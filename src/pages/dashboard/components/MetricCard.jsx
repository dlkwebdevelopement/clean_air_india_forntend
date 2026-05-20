import React from 'react';
import Icon from '../../../shared/AppIcon';
import './MetricCard.css';

const MetricCard = ({ title, value, change, changeType, icon, onClick }) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'metric-change-positive';
    if (changeType === 'negative') return 'metric-change-negative';
    return 'metric-change-neutral';
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') return 'TrendingUp';
    if (changeType === 'negative') return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div 
      className={`metric-card ${onClick ? 'metric-card-clickable' : ''}`}
      onClick={onClick}
    >
      <div className="metric-card-header">
        <div className="metric-icon-container">
          <Icon name={icon} size={24} className="metric-icon" />
        </div>
        {/* {change && (
          <div className={`metric-change ${getChangeColor()}`}>
            <Icon name={getChangeIcon()} size={16} />
            <span className="metric-change-value">{change}</span>
          </div>
        )} */}
      </div>
      <div className="metric-content">
        <h3 className="metric-value">{value}</h3>
        <p className="metric-title">{title}</p>
      </div>
    </div>
  );
};

export default MetricCard;
