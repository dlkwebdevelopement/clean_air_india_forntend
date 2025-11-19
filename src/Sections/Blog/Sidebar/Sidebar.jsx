import React, { useState, useEffect } from 'react';
import SidebarStyleWrapper from "./Sidebar.style";
import SerachIcon from "../../../assets/images/icons/search-icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Sidebar = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSidebarData();
  }, []);

  const fetchSidebarData = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Fetch categories
      const categoriesResponse = await fetch('https://api.cleanairindia.com/api/categories', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      }

      // Fetch recent posts
      const postsResponse = await fetch('https://api.cleanairindia.com/api/blogs?page=1&limit=3&status=published', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (postsResponse.ok) {
        const postsData = await postsResponse.json();
        setRecentPosts(postsData.blogs || []);
      }

      // Fetch tags
      const tagsResponse = await fetch('https://api.cleanairindia.com/api/tags', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (tagsResponse.ok) {
        const tagsData = await tagsResponse.json();
        setTags(tagsData);
      }
    } catch (error) {
      console.error('Error fetching sidebar data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryId, categoryName) => {
    navigate(`/blog?category=${categoryId}`);
  };

  const handleTagClick = (tagId, tagName) => {
    navigate(`/blog?tag=${tagId}`);
  };

  const handleRecentPostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements['post-search'].value;
    if (searchTerm.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  if (loading) {
    return (
      <SidebarStyleWrapper>
        <div className="letest-blog-card">
          <div className="sidebar-loading">
            <div className="loading-spinner"></div>
            <p>Loading sidebar data...</p>
          </div>
        </div>
      </SidebarStyleWrapper>
    );
  }

  return (
    <SidebarStyleWrapper>
      <ScrollAnimate>
        <div className="letest-blog-card">
          {/* search */}
          {/* <div className="letest-blog-search-section">
            <form onSubmit={handleSearch} method="post">
              <input
                type="search"
                name="post-search"
                id="post-search"
                placeholder="Search here ..."
              />
              <button type="submit">
                <img src={SerachIcon} alt="Search" />
              </button>
            </form>
          </div> */}

          {/* Categories */}
          <ScrollAnimate delay={200}>
            <div className="categories-list">
              <h4 className="letest-blog-catd-title">Categories</h4>
              <ul>
                {categories.map((category) => (
                  <li key={category._id}>
                    <NavLink 
                      to="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick(category._id, category.name);
                      }}
                      className="sidebar-link"
                    >
                      {category.name}
                    </NavLink>
                  </li>
                ))}
                {categories.length === 0 && (
                  <li className="no-data">No categories found</li>
                )}
              </ul>
            </div>
          </ScrollAnimate>

          {/* Recent post */}
          <ScrollAnimate delay={250}>
            <div className="recent-post-section">
              <h4 className="letest-blog-catd-title">Recent Posts</h4>
              <ul>
                {recentPosts.map((post) => (
                  <li key={post._id}>
                    <NavLink 
                      to="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleRecentPostClick(post._id);
                      }}
                      className="recent-post-img"
                    >
                      <img src={post.featuredImage || "/default-blog-image.jpg"} alt="post thumbnail" />
                    </NavLink>
                    <div className="recent-post-text">
                      <h6>{new Date(post.createdAt).toLocaleDateString()}</h6>
                      <h5>
                        <NavLink 
                          to="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            handleRecentPostClick(post._id);
                          }}
                        >
                          {post.title}
                        </NavLink>
                      </h5>
                    </div>
                  </li>
                ))}
                {recentPosts.length === 0 && (
                  <li className="no-data">No recent posts</li>
                )}
              </ul>
            </div>
          </ScrollAnimate>

          {/* Post Tags */}
          <ScrollAnimate delay={250}>
            <div className="post-tags-section">
              <h4 className="letest-blog-catd-title">Post Tags</h4>
              <ul>
                {tags.map((tag) => (
                  <li key={tag._id}>
                    <NavLink 
                      to="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleTagClick(tag._id, tag.name);
                      }}
                      className="sidebar-link"
                    >
                      {tag.name}
                    </NavLink>
                  </li>
                ))}
                {tags.length === 0 && (
                  <li className="no-data">No tags found</li>
                )}
              </ul>
            </div>
          </ScrollAnimate>
        </div>
      </ScrollAnimate>
    </SidebarStyleWrapper>
  );
};

export default Sidebar;