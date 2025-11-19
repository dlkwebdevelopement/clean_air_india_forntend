import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import SearchAndFilters from './components/SearchAndFilters';
import BlogTable from './components/BlogTable';
import Pagination from './components/Pagination';
import ConfirmationModal from './components/ConfirmationModal';
import './BlogList.css';
import Header from '../../components copy/ui/Header';
import SidebarNavigation from '../../components copy/ui/SidebarNavigation';

const BlogList = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // State for blogs data
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]); // Store all blogs for stats calculation
  
  // Filter and search states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  
  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  
  // Modal states
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, blogId: null, isBulk: false, blogIds: [] });
  
  // Categories state
  const [categories, setCategories] = useState([]);
  
  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setIsAdmin(storedUser?.role === 'admin');
  }, []);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      // Build query parameters correctly
      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
      });

      // Add status filter if not 'all'
      if (statusFilter !== 'all') {
        params.append('status', statusFilter.toLowerCase());
      }

      // Add category filter if not 'all' - use category ID instead of name
      if (categoryFilter !== 'all') {
        // Find the category by name to get its ID
        const selectedCategory = categories.find(cat => cat.name === categoryFilter);
        if (selectedCategory) {
          params.append('category', selectedCategory._id);
        }
      }

      // Add search term if exists
      if (searchTerm) {
        params.append('search', searchTerm);
      }

      // Add sorting if configured
      if (sortConfig.key) {
        params.append('sortBy', sortConfig.key);
        params.append('sortOrder', sortConfig.direction);
      }

      console.log('Fetching blogs with params:', params.toString());

      const response = await fetch(`https://api.cleanairindia.com/api/blogs?${params}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/admin');
        }
        throw new Error('Failed to fetch blogs');
      }

      const data = await response.json();
      setBlogs(data.blogs);
      setTotalPages(data.pagination.pages);
      setTotalItems(data.pagination.total);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all blogs for stats calculation (without pagination)
  const fetchAllBlogsForStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://api.cleanairindia.com/api/blogs?limit=1000`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setAllBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Error fetching all blogs for stats:', error);
    }
  };

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.cleanairindia.com/api/categories', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Check authentication and fetch data on component mount
  useEffect(() => {
    fetchCategories().then(() => {
      // After categories are loaded, fetch blogs
      fetchBlogs();
      fetchAllBlogsForStats();
    });
  }, []);

  // Refetch blogs when filters, pagination, or sorting change
  useEffect(() => {
    if (categories.length > 0) { // Only fetch blogs when categories are loaded
      fetchBlogs();
    }
  }, [currentPage, itemsPerPage, statusFilter, categoryFilter, searchTerm, sortConfig, categories]);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Calculate stats from allBlogs (not just current page)
  const stats = {
    total: allBlogs.length,
    published: allBlogs.filter(blog => blog.status === 'published').length,
    draft: allBlogs.filter(blog => blog.status === 'draft').length
  };

  // Handle stat card clicks
  const handleStatClick = (statType) => {
    switch (statType) {
      case 'total':
        setStatusFilter('all');
        break;
      case 'published':
        setStatusFilter('Published');
        break;
      case 'draft':
        setStatusFilter('Draft');
        break;
      default:
        setStatusFilter('all');
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Event handlers
  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleEdit = (blogId) => {
    navigate(`/create-new-blog?edit=${blogId}`);
  };

  const handleDelete = async (blogId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://api.cleanairindia.com/api/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }
      
      // Refresh the blog list and stats
      fetchBlogs();
      fetchAllBlogsForStats();
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting blog. Please try again.');
    }
  };

  const handleBulkDelete = async (blogIds) => {
    try {
      const token = localStorage.getItem('token');
      
      // Delete each blog in the list
      const deletePromises = blogIds.map(id => 
        fetch(`https://api.cleanairindia.com/api/blogs/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      );
      
      await Promise.all(deletePromises);
      
      // Refresh the blog list and stats
      fetchBlogs();
      fetchAllBlogsForStats();
    } catch (error) {
      console.error('Error bulk deleting blogs:', error);
      alert('Error deleting blogs. Please try again.');
    }
  };

  const handleBulkStatusChange = async (blogIds, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      
      // Update each blog in the list
      const updatePromises = blogIds.map(id => 
        fetch(`https://api.cleanairindia.com/api/blogs/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ status: newStatus.toLowerCase() })
        })
      );
      
      await Promise.all(updatePromises);
      
      // Refresh the blog list and stats
      fetchBlogs();
      fetchAllBlogsForStats();
    } catch (error) {
      console.error('Error bulk updating blogs:', error);
      alert('Error updating blogs. Please try again.');
    }
  };

  const confirmDelete = () => {
    if (deleteModal.isBulk) {
      handleBulkDelete(deleteModal.blogIds);
    } else {
      handleDelete(deleteModal.blogId);
    }
    setDeleteModal({ isOpen: false, blogId: null, isBulk: false, blogIds: [] });
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setCategoryFilter('all');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  // Format blogs for display in table
  const formattedBlogs = blogs.map((blog, index) => ({
    id: blog._id,
    serialNumber: (currentPage - 1) * itemsPerPage + index + 1,
    title: blog.title,
    excerpt: blog.excerpt,
    category: blog.category?.name || 'Uncategorized',
    createdDate: new Date(blog.createdAt).toLocaleDateString(),
    status: blog.status.charAt(0).toUpperCase() + blog.status.slice(1),
    author: blog.author,
    postedBy: `${blog.createdBy?.firstName || ''} ${blog.createdBy?.lastName || ''} (${blog.createdBy?.role ? blog.createdBy.role.charAt(0).toUpperCase() + blog.createdBy.role.slice(1) : 'Admin'})`.trim() || 'Unknown'
  }));

  // Get unique category names for filter
  const categoryOptions = categories.map(cat => cat.name);

  return (
    <div className="app-container">
      <SidebarNavigation
        collapsed={sidebarCollapsed} 
        onToggle={handleSidebarToggle} 
      />
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header 
          onSidebarToggle={handleSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />
        <div className="blog-list-content">
          <PageHeader
            totalBlogs={stats.total}
            publishedCount={stats.published}
            draftCount={stats.draft}
            onStatClick={handleStatClick}
          />

          <SearchAndFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            categoryFilter={categoryFilter}
            onCategoryFilterChange={setCategoryFilter}
            categories={categoryOptions}
            onClearFilters={handleClearFilters}
          />

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading blogs...</p>
            </div>
          ) : (
            <>
              <BlogTable
                blogs={formattedBlogs}
                onEdit={handleEdit}
                onDelete={(blogId) => setDeleteModal({ isOpen: true, blogId, isBulk: false, blogIds: [] })}
                onBulkDelete={(blogIds) => setDeleteModal({ isOpen: true, blogId: null, isBulk: true, blogIds })}
                onBulkStatusChange={handleBulkStatusChange}
                sortConfig={sortConfig}
                onSort={handleSort}
                isAdmin={isAdmin}
              />

              {totalPages > 1 && (
                <div className="pagination-container">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                  />
                </div>
              )}
            </>
          )}

          <ConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={() => setDeleteModal({ isOpen: false, blogId: null, isBulk: false, blogIds: [] })}
            onConfirm={confirmDelete}
            title={deleteModal.isBulk ? "Delete Multiple Blogs" : "Delete Blog Post"}
            message={
              deleteModal.isBulk 
                ? `Are you sure you want to delete ${deleteModal.blogIds.length} selected blog posts? This action cannot be undone.`
                : "Are you sure you want to delete this blog post? This action cannot be undone."
            }
            confirmText="Delete"
            confirmVariant="destructive"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogList;