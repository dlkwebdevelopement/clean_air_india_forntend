import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BlogListStyleWrapper from "./BlogList.style";
import StickyBox from "react-sticky-box";
import BlogItem from "../BlogItem/BlogItem";
import Pagination from "../../../Components/Pagination/Pagination";
import Sidebar from "../Sidebar/Sidebar";
import { getBlogImageUrl } from "../../../utils/image";

const staticBlogs = [
  { _id: "static1", slug: "biosafety-cabinets-class-ii-iii-a2-b2-manufacturers-in-india", title: "Biosafety Cabinets Class II, III, A2, B2 Manufacturers in India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Explore our range of high-quality Biosafety Cabinets Class II, III, A2, and B2 manufactured in India." },
  { _id: "static2", slug: "laminar-airflow-systems-for-cleanroom-solutions-india", title: "Laminar Airflow Systems for Cleanroom Solutions India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Discover our premium Laminar Airflow Systems designed for optimal cleanroom solutions in India." },
  { _id: "static3", slug: "laboratory-fume-hoods-laboratory-hoods-manufacturers-in-india", title: "Laboratory Fume Hoods Manufacturers in India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Leading manufacturers of Laboratory Fume Hoods and extraction systems in India." },
  { _id: "static4", slug: "air-shower-entry-system", title: "Air Shower Entry System", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "High-performance Air Shower Entry Systems for maintaining cleanroom integrity." },
  { _id: "static5", slug: "powder-dispensing-booths-manufacturers-in-chennai-and-india", title: "Powder Dispensing Booths Manufacturers in Chennai and India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Top quality powder dispensing and sampling booths manufactured in Chennai, India." },
  { _id: "static6", slug: "pass-boxes-manufacturers-in-chennai-india-clean-air-systems", title: "Pass Boxes Manufacturers in Chennai, India - Clean Air Systems", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Dynamic and static pass boxes for safe material transfer in cleanrooms." },
  { _id: "static7", slug: "modular-cleanrooms", title: "Modular Cleanrooms", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Custom-built modular cleanrooms and softwall cleanroom solutions." },
  { _id: "static8", slug: "downflow-booth", title: "Downflow Booths", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "High-quality downflow booths for cleanroom operations." },
  { _id: "static9", slug: "pharma-weighing-booths", title: "Pharma Weighing Booths", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Precision pharma weighing booths for pharmaceutical industries." },
  { _id: "static10", slug: "reverse-flow-booth", title: "Reverse Flow Booths", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Advanced reverse flow booths for optimal operator protection." },
  { _id: "static11", slug: "walk-in-fume-hoods-manufacturers-in-chennai-and-india", title: "Walk-in Fume Hoods Manufacturers in Chennai and India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Custom walk-in fume hoods for large-scale laboratory applications." },
  { _id: "static12", slug: "distillation-fume-hoods-manufacturers-in-chennai-and-india", title: "Distillation Fume Hoods Manufacturers in Chennai and India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Specialized distillation fume hoods for chemical extraction processes." },
  { _id: "static13", slug: "powder-containment-booths-manufacturers-in-chennai-india", title: "Powder Containment Booths Manufacturers in Chennai, India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Effective powder containment booths for safe material handling." },
  { _id: "static14", slug: "powder-sampling-booths-manufacturers-in-chennai-and-india", title: "Powder Sampling Booths Manufacturers in Chennai and India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Reliable powder sampling booths ensuring safety and precision." },
  { _id: "static15", slug: "static-pass-box-manufacturers-in-chennai-india", title: "Static Pass Box Manufacturers in Chennai, India", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "High-quality static pass boxes for controlled environment transfers." },
  { _id: "static16", slug: "fan-filter-units", title: "Fan Filter Units", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Efficient fan filter units for maintaining cleanroom air quality." },
  { _id: "static17", slug: "sterile-garment-storage-cabinet", title: "Sterile Garment Storage Cabinet", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Sterile garment storage cabinets to maintain garment integrity." },
  { _id: "static18", slug: "softwall-cleanrooms", title: "Softwall Cleanrooms", category: { name: "Products" }, createdAt: new Date().toISOString(), excerpt: "Flexible and modular softwall cleanrooms for varied applications." }
];

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
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/categories`, {
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
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/tags`, {
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
      
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        status: 'published'
      });

      if (filters.category) queryParams.append('category', filters.category);
      if (filters.tag) queryParams.append('tag', filters.tag);
      if (filters.search) queryParams.append('search', filters.search);

      const apiUrl = import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api';
      
      const response = await fetch(`${apiUrl}/blogs?${queryParams.toString()}`);
      
      let data = { blogs: [], pagination: { pages: 0, total: 0 } };
      if (response.ok) {
        data = await response.json();
      }

      let finalBlogs = data.blogs || [];
      let total = data.pagination?.total || 0;
      
      if (!filters.search && !filters.category && !filters.tag) {
        if (finalBlogs.length === 0) {
          const startIndex = (currentPage - 1) * itemsPerPage;
          finalBlogs = staticBlogs.slice(startIndex, startIndex + itemsPerPage);
          total = staticBlogs.length;
        } else {
          if (currentPage === 1) {
            finalBlogs = [...staticBlogs, ...finalBlogs];
            total += staticBlogs.length;
          }
        }
      }
      
      setBlogs(finalBlogs);
      setTotalPages(Math.ceil(total / itemsPerPage) || 1);
      setTotalItems(total);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      if (!filters.search && !filters.category && !filters.tag) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        setBlogs(staticBlogs.slice(startIndex, startIndex + itemsPerPage));
        setTotalPages(Math.ceil(staticBlogs.length / itemsPerPage) || 1);
        setTotalItems(staticBlogs.length);
      } else {
        setBlogs([]);
        setTotalPages(1);
        setTotalItems(0);
      }
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
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs?search=${encodeURIComponent(searchTerm)}&limit=5`, {
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
                placeholder="Search blogs & articles..."
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
              {loading ? (
                <div className="loading-container" style={{ textAlign: 'center', padding: '100px 0' }}>
                  <div className="spinner-border" style={{ width: '3rem', height: '3rem', color: '#0095ff' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p style={{ marginTop: '15px', color: '#666' }}>Loading articles...</p>
                </div>
              ) : blogs.length === 0 ? (
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
                        id={blog.slug}
                        thumbnail={blog.featuredImage} 
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