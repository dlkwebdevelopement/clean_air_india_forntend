import React from 'react';
import Icon from '../../../shared/AppIcon';
import './WordCountDisplay.css';

const WordCountDisplay = ({ wordCount }) => {
  const { words = 0, characters = 0 } = wordCount;

  return (
    <div className="word-count-display">
      <div className="word-count-container">
        <div className="word-count-metrics">
          <div className="word-count-metric">
            <Icon name="FileText" size={16} className="word-count-icon" />
            <span className="word-count-label">Words:</span>
            <span className="word-count-value">{words?.toLocaleString()}</span>
          </div>
          <div className="word-count-metric">
            <Icon name="Type" size={16} className="word-count-icon" />
            <span className="word-count-label">Characters:</span>
            <span className="word-count-value">{characters?.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="word-count-status">
          <div className={`word-count-indicator ${words > 0 ? 'word-count-indicator-active' : 'word-count-indicator-inactive'}`}></div>
          <span className="word-count-status-text">
            {words === 0 ? 'Start writing...' : 'Content added'}
          </span>
        </div>
      </div>
      {words > 0 && (
        <div className="word-count-details">
          <div className="word-count-reading-time">
            <span>Reading time</span>
            <span>{Math.ceil(words / 200)} min read</span>
          </div>
          <div className="word-count-progress-bar">
            <div 
              className="word-count-progress"
              style={{ width: `${Math.min((words / 1000) * 100, 100)}%` }}
            ></div>
          </div>
          <div className="word-count-article-type">
            {words < 300 ? 'Short article' : words < 1000 ? 'Medium article' : 'Long article'}
          </div>
        </div>
      )}
    </div>
  );
};

export default WordCountDisplay;
