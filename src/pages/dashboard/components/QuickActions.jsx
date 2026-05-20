import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/ui/Button';
import './QuickActions.css';

const QuickActions = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 'create-blog',
      title: 'Create New Blog',
      description: 'Start writing a new blog post',
      icon: 'Plus',
      variant: 'default',
      path: '/create-new-blog'
    },
    {
      id: 'manage-categories',
      title: 'Manage Categories',
      description: 'Organize your content categories',
      icon: 'Folder',
      variant: 'outline',
      path: '/create-new-blog'
    },
    {
      id: 'view-drafts',
      title: 'View Drafts',
      description: 'Continue working on draft posts',
      icon: 'FileEdit',
      variant: 'outline',
      path: '/blog-list'
    },
    {
      id: 'manage-tags',
      title: 'Manage Tags',
      description: 'Create and organize content tags',
      icon: 'Tag',
      variant: 'outline',
      path: '/create-new-blog'
    }
  ];

  const handleActionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="quick-actions-card">
      <div className="quick-actions-header">
        <h2 className="quick-actions-title">Quick Actions</h2>
        <p className="quick-actions-subtitle">
          Access frequently used features and shortcuts
        </p>
      </div>
      <div className="quick-actions-grid">
        {quickActions?.map((action) => (
          <div
            key={action?.id}
            className="quick-action-item"
            onClick={() => handleActionClick(action?.path)}
          >
            <div className="quick-action-content">
              <div className="quick-action-icon-container">
                <Button
                  variant="ghost"
                  size="icon"
                  iconName={action?.icon}
                  iconSize={20}
                  className="quick-action-button"
                />
              </div>
              
              <div className="quick-action-text">
                <h3 className="quick-action-title">
                  {action?.title}
                </h3>
                <p className="quick-action-description">
                  {action?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="quick-actions-footer">
        <Button
          variant="outline"
          fullWidth
          iconName="MoreHorizontal"
          iconPosition="left"
          onClick={() => navigate('/blog-list')}
        >
          View All Blog Posts
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;
