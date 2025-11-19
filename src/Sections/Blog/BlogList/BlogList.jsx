import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BlogListStyleWrapper from "./BlogList.style";
import StickyBox from "react-sticky-box";
import BlogItem from "../BlogItem/BlogItem";
import Pagination from "../../../Components/Pagination/Pagination";
import Sidebar from "../Sidebar/Sidebar";

const BlogList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [filters, setFilters] = useState({
    category: '',
    categoryName: '',
    tag: '',
    tagName: '',
    search: ''
  });
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const itemsPerPage = 6;

  // Fetch categories for name mapping
  useEffect(() => {
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
    
    fetchCategories();
  }, []);

  useEffect(() => {
  const fetchTags = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.cleanairindia.com/api/tags', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setTags(data); // Make sure your API returns an array of tags
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  fetchTags();
}, []);


  // Parse URL parameters and map IDs to names
 // Parse URL parameters and map IDs to names
useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get('category') || '';
  const tagId = searchParams.get('tag') || '';
  const search = searchParams.get('search') || '';

  // Find category name
  let categoryName = '';
  if (categoryId && categories.length > 0) {
    const category = categories.find(cat => cat._id === categoryId);
    categoryName = category ? category.name : '';
  }

  // Find tag name
  let tagName = '';
  if (tagId && tags.length > 0) {
    const tag = tags.find(t => t._id === tagId);
    tagName = tag ? tag.name : '';
  }

  const newFilters = {
    category: categoryId,
    categoryName: categoryName,
    tag: tagId,
    tagName: tagName,
    search: search
  };

  setFilters(newFilters);
  setCurrentPage(1);
}, [location.search, categories, tags]); // 👈 include tags here


  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      // Build query parameters
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        status: 'published'
      });

      // Add filters to query parameters
      if (filters.category) queryParams.append('category', filters.category);
      if (filters.tag) queryParams.append('tag', filters.tag);
      if (filters.search) queryParams.append('search', filters.search);

      const response = await fetch(`https://api.cleanairindia.com/api/blogs?${queryParams.toString()}`, {
        // headers: {
        //   'Authorization': `Bearer ${token}`
        // }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      
      const data = await response.json();
      setBlogs(data.blogs || []);
      setTotalPages(data.pagination?.pages || 1);
      setTotalItems(data.pagination?.total || 0);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch search suggestions
  const fetchSearchSuggestions = async (searchTerm) => {
    if (searchTerm.length < 2) {
      setSearchSuggestions([]);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://api.cleanairindia.com/api/blogs?search=${encodeURIComponent(searchTerm)}&limit=5`, {
        // headers: {
        //   'Authorization': `Bearer ${token}`
        // }
      });
      
      if (response.ok) {
        const data = await response.json();
        // Extract unique categories from search results
        const categorySuggestions = [];
        data.blogs?.forEach(blog => {
          if (blog.category && !categorySuggestions.find(cat => cat.id === blog.category._id)) {
            categorySuggestions.push({
              id: blog.category._id,
              name: blog.category.name,
              type: 'category'
            });
          }
        });
        setSearchSuggestions(categorySuggestions);
      }
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [navigate, currentPage, filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    navigate('/blog');
    setSearchSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.trim()) {
      fetchSearchSuggestions(searchTerm);
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements['blog-search'].value;
    if (searchTerm.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchTerm.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === 'category') {
      navigate(`/blog?category=${suggestion.id}`);
    }
    setShowSuggestions(false);
  };

  return (
    <BlogListStyleWrapper>
      <div className="container">
        {/* Search Bar */}
        <div className="blog-search-section">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-input-wrapper">
              <input
                type="search"
                name="blog-search"
                placeholder="Search category..."
                defaultValue={filters.search}
                onChange={handleSearchChange}
                onFocus={() => filters.search && fetchSearchSuggestions(filters.search)}
              />
              <button type="submit" className="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
              
              {/* Search Suggestions */}
              {showSuggestions && searchSuggestions.length > 0 && (
                <div className="search-suggestions">
                  <div className="suggestions-header">Categories matching your search:</div>
                  {searchSuggestions.map(suggestion => (
                    <div 
                      key={suggestion.id} 
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <span className="suggestion-category">{suggestion.name}</span>
                      <span className="suggestion-type">Category</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Filter Header */}
        {(filters.category || filters.tag || filters.search) && (
          <div className="filter-header">
            <div className="filter-info">
              <h3>Filtered Results</h3>
              <div className="active-filters">
                {filters.category && (
                  <span className="filter-tag">
                    Category: {filters.categoryName || filters.category}
                    <button 
                      onClick={() => navigate('/blog')}
                      className="filter-remove"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.tag && (
                  <span className="filter-tag">
                    Tag: {filters.tagName || filters.tag}
                    <button 
                      onClick={() => {
                        const newSearch = new URLSearchParams(location.search);
                        newSearch.delete('tag');
                        navigate(`/blog?${newSearch.toString()}`);
                      }}
                      className="filter-remove"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.search && (
                  <span className="filter-tag">
                    Search: "{filters.search}"
                    <button 
                      onClick={() => {
                        const newSearch = new URLSearchParams(location.search);
                        newSearch.delete('search');
                        navigate(`/blog?${newSearch.toString()}`);
                      }}
                      className="filter-remove"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button onClick={clearFilters} className="clear-filters-btn">
                  Clear All Filters
                </button>
              </div>
              
              {/* Results count */}
              <div className="results-count">
                Found {totalItems} blog{totalItems !== 1 ? 's' : ''} 
                {filters.search && ` for "${filters.search}"`}
                {filters.categoryName && ` in ${filters.categoryName}`}
                {filters.tagName && ` with tag ${filters.tagName}`}
              </div>
            </div>
          </div>
        )}

        <div className="row g-4">
          {/* blog section */}
          <div className="col-lg-8">
            <div className="latest-blog-content">
              {blogs.length === 0 ? (
                <div className="no-blogs-found">
                  <h3>No blogs found</h3>
                  <p>Try adjusting your filters or search terms.</p>
                  <button onClick={clearFilters} className="clear-filters-btn">
                    View All Blogs
                  </button>
                </div>
              ) : (
                <div className="row">
                  {blogs.map((blog, i) => (
                    <div key={blog._id} className="col-md-6">
                      <BlogItem 
                        id={blog._id}
                        thumbnail={blog.featuredImage || "/default-blog-image.jpg"} 
                        category={blog.category?.name || "Uncategorized"} 
                        date={new Date(blog.createdAt).toLocaleDateString()} 
                        title={blog.title}
                        details={blog.excerpt || (blog.content ? blog.content.substring(0, 150) + '...' : 'No content available')}
                        delay={i * 100}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* pagination section */}
            {totalPages > 1 && blogs.length > 0 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>

          {/* sidebar section */}
          <div className="col-lg-4">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <Sidebar />
            </StickyBox>
          </div>
        </div>
      </div>
    </BlogListStyleWrapper>
  );
};

export default BlogList;