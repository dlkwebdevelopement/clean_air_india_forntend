import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../shared/AppIcon';
import Button from '../../../shared/ui/Button';
import './PageHeader.css';

const PageHeader = ({ totalBlogs, publishedCount, draftCount, onStatClick }) => {
  const navigate = useNavigate();

  return (
    <div className="page-header">
      <div className="page-header-container">
        <div className="page-header-content">
          <h1 className="page-header-title">Blog List</h1>
          <p className="page-header-subtitle">
            Manage and organize your blog content
          </p>
        </div>
        
        <div className="page-header-actions">
          {/* <Button
            variant="outline"
            onClick={() => navigate('/tag-management')}
            iconName="Tag"
            iconPosition="left"
            iconSize={16}
          >
            Manage Tags
          </Button> */}
          <Button
            variant="default"
            onClick={() => navigate('/create-new-blog')}
            iconName="Plus"
            iconPosition="left"
            iconSize={16}
          >
            Create New Blog
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="page-header-stats">
        <div 
          className="stat-card clickable-stat"
          onClick={() => onStatClick('total')}
        >
          <div className="stat-card-content">
            <div className="stat-icon-container stat-icon-primary">
              <Icon name="FileText" size={20} className="stat-icon" />
            </div>
            <div className="stat-text">
              <p className="stat-label">Total Blogs</p>
              <p className="stat-value">{totalBlogs}</p>
            </div>
          </div>
        </div>

        <div 
          className="stat-card clickable-stat"
          onClick={() => onStatClick('published')}
        >
          <div className="stat-card-content">
            <div className="stat-icon-container stat-icon-success">
              <Icon name="Eye" size={20} className="stat-icon" />
            </div>
            <div className="stat-text">
              <p className="stat-label">Published</p>
              <p className="stat-value">{publishedCount}</p>
            </div>
          </div>
        </div>

        <div 
          className="stat-card clickable-stat"
          onClick={() => onStatClick('draft')}
        >
          <div className="stat-card-content">
            <div className="stat-icon-container stat-icon-warning">
              <Icon name="FileEdit" size={20} className="stat-icon" />
            </div>
            <div className="stat-text">
              <p className="stat-label">Drafts</p>
              <p className="stat-value">{draftCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
