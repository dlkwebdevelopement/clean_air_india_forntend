import styled from "styled-components";

const BlogListStyleWrapper = styled.section`
  padding: 140px 0px;

  .latest-blog-content {
    padding-right: 20px;

    .row {
      display: flex;
      flex-wrap: wrap;
    }

    .col-md-6 {
      display: flex;
      flex-direction: column;

      /* Target the AnimatedWrapper rendered by ScrollAnimate */
      > div {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }

  /* Search Section */
  .blog-search-section {
    margin-bottom: 50px;
  }

  .search-form {
    max-width: 650px;
    margin: 0 auto;
  }

  .search-input-wrapper {
    position: relative;
  }

  .search-input-wrapper input {
    width: 100%;
    padding: 16px 60px 16px 28px;
    border: 2px solid #e2e8f0;
    border-radius: 50px;
    font-size: 16px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    background: #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    color: #334155;
    font-family: inherit;

    &::placeholder {
      color: #94a3b8;
    }
  }

  .search-input-wrapper input:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || '#0061a6'};
    box-shadow: 0 10px 25px rgba(0, 97, 166, 0.1);
  }

  .search-btn {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.primary || '#0061a6'};
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 97, 166, 0.2);
  }

  .search-btn:hover {
    background: ${({ theme }) => theme.colors.title || '#0e1118'};
    color: #fff;
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }

  /* Search Suggestions */
  .search-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    margin-top: 5px;
    overflow: hidden;
  }

  .suggestions-header {
    padding: 12px 20px;
    background: #f8f9fa;
    font-size: 12px;
    color: #6c757d;
    border-bottom: 1px solid #e9ecef;
  }

  .suggestion-item {
    padding: 12px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s ease;
    border-bottom: 1px solid #f8f9fa;
  }

  .suggestion-item:hover {
    background: #f8f9fa;
  }

  .suggestion-item:last-child {
    border-bottom: none;
  }

  .suggestion-category {
    font-weight: 500;
    color: #495057;
  }

  .suggestion-type {
    font-size: 12px;
    color: #6c757d;
    background: #e9ecef;
    padding: 2px 8px;
    border-radius: 12px;
  }

  /* Filter Header */
  .filter-header {
    background: #0061a6;
    color: white;
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .filter-info h3 {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 600;
  }

  .active-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    margin-bottom: 15px;
  }

  .filter-tag {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .filter-remove {
    background: rgba(255, 255, 255, 0.3);
    border: none;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .filter-remove:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  .clear-filters-btn {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
  }

  .clear-filters-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  .results-count {
    font-size: 16px;
    opacity: 0.9;
    font-weight: 300;
  }

  /* No Blogs Found */
  .no-blogs-found {
    text-align: center;
    padding: 80px 20px;
    background: #f8f9fa;
    border-radius: 15px;
    margin: 40px 0;
  }

  .no-blogs-found h3 {
    margin-bottom: 15px;
    color: #495057;
    font-size: 24px;
  }

  .no-blogs-found p {
    color: #6c757d;
    margin-bottom: 25px;
    font-size: 16px;
  }

  .no-blogs-found .clear-filters-btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .no-blogs-found .clear-filters-btn:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
  }

  /* Loading States */
  .loading-container {
    text-align: center;
    padding: 60px 20px;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media screen and (max-width: 991px) {
    .latest-blog-content {
      padding-right: 0px;
    }
    
    .filter-header {
      padding: 20px;
    }
    
    .active-filters {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0px 70px;
    
    .blog-search-section {
      margin-bottom: 30px;
    }
    
    .search-input-wrapper input {
      padding: 12px 45px 12px 15px;
      font-size: 14px;
    }
    
    .filter-header {
      padding: 15px;
      margin-bottom: 30px;
    }
    
    .filter-info h3 {
      font-size: 20px;
    }
    
    .no-blogs-found {
      padding: 50px 15px;
    }
  }

  @media screen and (max-width: 575px) {
    .search-suggestions {
      position: fixed;
      left: 10px;
      right: 10px;
      top: auto;
      bottom: 10px;
      max-height: 200px;
      overflow-y: auto;
    }
  }
`;

export default BlogListStyleWrapper;