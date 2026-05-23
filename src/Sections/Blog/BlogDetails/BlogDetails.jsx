import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from "react-router-dom";
import BlogDetailsStyleWrapper from "./BlogDetails.style";
import StickyBox from "react-sticky-box";
import Sidebar from "../Sidebar/Sidebar";
import Comments from "../Comments/Comments";

import ShapeIcon1 from "../../../assets/images/shape/breadcrumb-shape1.svg";
import ShapeIcon2 from "../../../assets/images/shape/breadcrumb-shape2.svg";
import ShareIcon from "../../../assets/images/icons/share-icon.svg";
import PrevImg from "../../../assets/images/blog/blog-prev-img.png";
import NextImg from "../../../assets/images/blog/blog-next-img.png";

import BlogDetailsImg from "../../../assets/images/blog/blog.webp";
import ProfileImg from "../../../assets/images/icons/icon_profile.svg";
import CategoryImg from "../../../assets/images/icons/icon_category.svg";
import CalendarImg from "../../../assets/images/icons/icon_calendar.svg";
import QuotationImg from "../../../assets/images/icons/quotation.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { getBlogImageUrl } from "../../../utils/image";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  // Fetch blog details from API
  const fetchBlogDetails = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs/${slug}`, {
        // headers: {
        //   'Authorization': `Bearer ${token}`
        // }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog details');
      }
      
      const data = await response.json();
      setBlog(data);
      // console.log("test",blog.content)
      
      // Fetch related blogs (same category, exclude current blog)
      if (data.category) {
        const relatedResponse = await fetch(
          `${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs?page=1&limit=3&category=${data.category._id}&status=published`,
          {
            // headers: {
            //   'Authorization': `Bearer ${token}`
            // }
          }
        );
        
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          // Filter out the current blog from related posts
          const filteredRelated = relatedData.blogs?.filter(blog => blog.slug !== slug) || [];
          setRelatedBlogs(filteredRelated.slice(0, 2)); // Take only 2 related posts
        }
      }
    } catch (error) {
      console.error('Error fetching blog details:', error);
      navigate('/blog');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   fetchBlogDetails();
  }, [slug, navigate]);

  const handleCategoryClick = (categoryId) => {
    navigate(`/blog?category=${categoryId}`);
  };

  const handleTagClick = (tagId) => {
    navigate(`/blog?tag=${tagId}`);
  };

  if (loading) {
    return (
      <BlogDetailsStyleWrapper>
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading blog post...</p>
          </div>
        </div>
      </BlogDetailsStyleWrapper>
    );
  }

  if (!blog) {
    return (
      <BlogDetailsStyleWrapper>
        <div className="container">
          <div className="error-container">
            <h2>Blog post not found</h2>
            <NavLink to="/blog" className="back-link">
              Back to Blog
            </NavLink>
          </div>
        </div>
      </BlogDetailsStyleWrapper>
    );
  }

  return (
    <BlogDetailsStyleWrapper>
      {/* breadcrumb section */}
      <section className="breadcrumb-section blog-details-breadcrumb-section">
        <div className="bg-shape">
          <div className="shape-img img-1">
            <ScrollAnimate><img height="160" width="197" src={ShapeIcon1} alt="shape" loading="lazy"/></ScrollAnimate>
          </div>
          <div className="shape-img img-2">
            <ScrollAnimate><img height="110" width="136" src={ShapeIcon2} alt="shape" loading="lazy"/></ScrollAnimate>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <ScrollAnimate>
                <div className="breadcrumb-content">
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb breadcrumb-list">
                      <li className="breadcrumb-item">
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li className="breadcrumb-item">
                        <NavLink to="/blog">Latest Blogs</NavLink>
                      </li>
                      <li className="breadcrumb-item active">{blog.title}</li>
                    </ul>
                  </nav>
                  <div className="breadcrumb-sec">
                    <h1 className="breadcrumb-title">
                      {blog.title}
                    </h1>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* blog details section */}
      <section className="blog-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* blog details content */}
              <div className="blog-details-content">
                <ScrollAnimate>
                  <div className="blog-details-img">
                    <img src={getBlogImageUrl(blog.featuredImage, BlogDetailsImg)} alt={blog.title} loading="lazy"/>
                  </div>
                </ScrollAnimate>
                <div className="blog-details-inner">
                  <div className="blog-details-info-list">
                    <ScrollAnimate>
                      <ul>
                        <li>
                          <span>
                            <img height="22" width="20" src={ProfileImg} alt="icon" loading="lazy"/>
                          </span>
                          By - <span className="author-name">{blog.author}</span>
                        </li>
                        <li>
                          <span>
                            <img height="22" width="22" src={CategoryImg} alt="icon" loading="lazy"/>
                          </span>
                          <NavLink 
                            to="#" 
                            onClick={(e) => {
                              e.preventDefault();
                              handleCategoryClick(blog.category?._id);
                            }}
                            className="category-link"
                          >
                            {blog.category?.name || 'Uncategorized'}
                          </NavLink>
                        </li>
                        <li>
                          <span>
                            <img height="22" width="20" src={CalendarImg} alt="icon" loading="lazy"/>
                          </span>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </li>
                      </ul>
                    </ScrollAnimate>
                  </div>
                  
                    <div 
                      className="blog-content"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  

                  <ScrollAnimate>
                    <div className="blog-tag-section">
                      {/* blog tags */}
                      <ul>
                        {blog.tags?.map(tag => (
                          <li key={tag._id}>
                            <NavLink 
                              to="#" 
                              onClick={(e) => {
                                e.preventDefault();
                                handleTagClick(tag._id);
                              }}
                              className="tag-link"
                            >
                              {tag.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>

                      {/* share button */}
                      {/* <button className="share-btn">
                        <img height="18" width="16" src={ShareIcon} alt="icon" loading="lazy"/>
                        Share
                      </button> */}
                    </div>
                  </ScrollAnimate>
                </div>
              </div>

              {/* previous next blog */}
              {relatedBlogs.length > 0 && (
                <div className="blog-previous-next-section">
                  <div className="row">
                    {/* previous blog link */}
                    {relatedBlogs[0] && (
                      <div className="col-sm-6">
                        <ScrollAnimate>
                          <div className="blog-card">
                            <NavLink to={`/blog/${relatedBlogs[0].slug}`} className="blog-card-img">
                              <img src={getBlogImageUrl(relatedBlogs[0].featuredImage, PrevImg)} alt={relatedBlogs[0].title} loading="lazy"/>
                            </NavLink>
                            <div className="blog-card-text">
                              <NavLink to={`/blog/${relatedBlogs[0].slug}`}>Previous</NavLink>
                              <h6>
                                <NavLink to={`/blog/${relatedBlogs[0].slug}`}>
                                  {relatedBlogs[0].title}
                                </NavLink>
                              </h6>
                            </div>
                          </div>
                        </ScrollAnimate>
                      </div>
                    )}

                    {/* next blog link */}
                    {relatedBlogs[1] && (
                      <div className="col-sm-6">
                        <ScrollAnimate>
                          <div className="blog-card justify-right">
                            <NavLink to={`/blog/${relatedBlogs[1].slug}`} className="blog-card-img">
                              <img src={getBlogImageUrl(relatedBlogs[1].featuredImage, NextImg)} alt={relatedBlogs[1].title} loading="lazy"/>
                            </NavLink>
                            <div className="blog-card-text">
                              <NavLink to={`/blog/${relatedBlogs[1].slug}`}>Next</NavLink>
                              <h6>
                                <NavLink to={`/blog/${relatedBlogs[1].slug}`}>
                                  {relatedBlogs[1].title}
                                </NavLink>
                              </h6>
                            </div>
                          </div>
                        </ScrollAnimate>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Comments section */}
              {/* <Comments /> */}
            </div>

            {/* sidebar section */}
            <div className="col-lg-4">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
          </div>
        </div>
      </section>
    </BlogDetailsStyleWrapper>
  );
};

export default BlogDetails;