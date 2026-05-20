import React from 'react';
import Icon from '../../../shared/AppIcon';
import './PopularContent.css';

const PopularContent = () => {
  const popularPosts = [
    {
      id: 1,
      title: 'React Performance Optimization Guide',
      views: 15420,
      likes: 892,
      comments: 156,
      category: 'React',
      publishedDate: new Date('2024-12-08'),
      trend: 'up'
    },
    {
      id: 2,
      title: 'Modern CSS Grid Layout Techniques',
      views: 12350,
      likes: 734,
      comments: 98,
      category: 'CSS',
      publishedDate: new Date('2024-12-06'),
      trend: 'up'
    },
    {
      id: 3,
      title: 'JavaScript ES2024 New Features',
      views: 9870,
      likes: 567,
      comments: 89,
      category: 'JavaScript',
      publishedDate: new Date('2024-12-05'),
      trend: 'down'
    },
    {
      id: 4,
      title: 'Building Responsive Web Applications',
      views: 8450,
      likes: 445,
      comments: 67,
      category: 'Web Development',
      publishedDate: new Date('2024-12-04'),
      trend: 'stable'
    },
    {
      id: 5,
      title: 'Node.js Best Practices 2024',
      views: 7230,
      likes: 398,
      comments: 54,
      category: 'Node.js',
      publishedDate: new Date('2024-12-03'),
      trend: 'up'
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'popular-trend-up';
      case 'down': return 'popular-trend-down';
      default: return 'popular-trend-neutral';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'k';
    }
    return num?.toString();
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="popular-content-card">
      <div className="popular-content-header">
        <div className="popular-content-title-container">
          <div>
            <h2 className="popular-content-title">Popular Content</h2>
            <p className="popular-content-subtitle">
              Top performing blog posts this month
            </p>
          </div>
          <Icon name="BarChart3" size={24} className="popular-content-icon" />
        </div>
      </div>
      <div className="popular-content-list">
        {popularPosts?.map((post, index) => (
          <div key={post?.id} className="popular-content-item">
            <div className="popular-content-item-header">
              <div className="popular-content-item-info">
                <div className="popular-content-rank">
                  <span className="popular-content-rank-number">#{index + 1}</span>
                </div>
                <div className="popular-content-item-details">
                  <h3 className="popular-content-item-title">
                    {post?.title}
                  </h3>
                  <div className="popular-content-item-meta">
                    <span className="popular-content-category">
                      {post?.category}
                    </span>
                    <span className="popular-content-date">
                      {formatDate(post?.publishedDate)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={`popular-content-trend ${getTrendColor(post?.trend)}`}>
                <Icon name={getTrendIcon(post?.trend)} size={16} />
              </div>
            </div>
            
            <div className="popular-content-metrics">
              <div className="popular-content-metric">
                <Icon name="Eye" size={14} className="popular-content-metric-icon" />
                <span className="popular-content-metric-value">{formatNumber(post?.views)}</span>
              </div>
              
              <div className="popular-content-metric">
                <Icon name="Heart" size={14} className="popular-content-metric-icon" />
                <span className="popular-content-metric-value">{formatNumber(post?.likes)}</span>
              </div>
              
              <div className="popular-content-metric">
                <Icon name="MessageCircle" size={14} className="popular-content-metric-icon" />
                <span className="popular-content-metric-value">{post?.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="popular-content-footer">
        <button className="popular-content-view-all">
          View Detailed Analytics
        </button>
      </div>
    </div>
  );
};

export default PopularContent;
