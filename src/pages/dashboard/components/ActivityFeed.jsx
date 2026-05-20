import React, { useState } from 'react';
import Icon from '../../../shared/AppIcon';
import './ActivityFeed.css';

const ActivityFeed = ({ activities = [], loading = false }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const getActivityIcon = (type) => {
    const iconMap = {
      blog_created: 'FileText',
      blog_published: 'Globe',
      blog_edited: 'Edit',
      category_created: 'Folder',
      tag_created: 'Tag'
    };
    return iconMap[type] || 'Activity';
  };

  const getActivityColor = (type) => {
    const colorMap = {
      blog_created: 'activity-color-primary',
      blog_published: 'activity-color-success',
      blog_edited: 'activity-color-warning',
      category_created: 'activity-color-accent',
      tag_created: 'activity-color-secondary'
    };
    return colorMap[type] || 'activity-color-muted';
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Just now';
    
    const now = new Date();
    const diff = now - new Date(timestamp);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) {
      return 'Just now';
    } else if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days < 7) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      return new Date(timestamp).toLocaleDateString();
    }
  };

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return (
      <div className="activity-feed-card">
        <div className="activity-feed-header">
          <h2 className="activity-feed-title">Recent Activity</h2>
        </div>
        <div className="activity-feed-list">
          {[1, 2, 3].map((item) => (
            <div key={item} className="activity-item loading">
              <div className="activity-content">
                <div className="activity-icon activity-color-muted"></div>
                <div className="activity-details">
                  <div className="activity-header">
                    <div className="activity-title-skeleton"></div>
                    <div className="activity-timestamp-skeleton"></div>
                  </div>
                  <div className="activity-description-skeleton"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="activity-feed-card">
      <div className="activity-feed-header">
        <div className="activity-feed-title-container">
          <h2 className="activity-feed-title">Recent Activity</h2>
        </div>
      </div>
      <div className="activity-feed-list">
        {activities.length === 0 ? (
          <div className="activity-empty-state">
            <Icon name="Activity" size={48} className="activity-empty-icon" />
            <p>No recent activity</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-content">
                <div className={`activity-icon ${getActivityColor(activity.type)}`}>
                  <Icon name={getActivityIcon(activity.type)} size={20} />
                </div>
                
                <div className="activity-details">
                  <div className="activity-header">
                    <h3 className="activity-title">{activity.title}</h3>
                    <span className="activity-timestamp">
                      {formatTimestamp(activity.timestamp)}
                    </span>
                  </div>
                  
                  <p className="activity-description">{activity.description}</p>
                  
                  <div className="activity-footer">
                    <div className="activity-meta">
                      <span className="activity-user">by {activity.user}</span>
                      <span className="activity-category">
                        {activity.category}
                      </span>
                      <span className={`activity-status ${
                        activity.status === 'Published' ? 'activity-status-published' :
                        activity.status === 'Draft' ? 'activity-status-draft' : 'activity-status-active'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => toggleExpanded(activity.id)}
                      className="activity-toggle-btn"
                    >
                      <span>{expandedItems[activity.id] ? 'Less' : 'More'}</span>
                      <Icon 
                        name={expandedItems[activity.id] ? 'ChevronUp' : 'ChevronDown'} 
                        size={14} 
                      />
                    </button>
                  </div>
                  
                  {expandedItems[activity.id] && (
                    <div className="activity-expanded-details">
                      <p className="activity-details-text">{activity.details}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
