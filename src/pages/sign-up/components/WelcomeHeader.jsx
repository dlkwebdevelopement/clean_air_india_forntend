import React from 'react';
import Icon from '../../../shared/AppIcon';
import './WelcomeHeader.css';
import logo from '../../../assets/images/logo/Logos.svg'; // adjust path to your SVG/PNG

const WelcomeHeader = () => {
  return (
    <div className="welcome-header">
      {/* Logo */}
      <div className="welcome-logo-container">
       <div className="welcome-logo">
  <img height="75" width="136" src={logo} 
    alt="Logo" 
    className="welcome-logo-img"
  />
</div>

      </div>

      {/* Welcome Text */}
      <div className="welcome-text">
        <h1 className="welcome-title">
          Join Blog Admin
        </h1>
        <p className="welcome-description">
          Create your administrator account to start managing blog content, categories, and publications
        </p>
      </div>

      {/* Features Preview */}
      <div className="welcome-features">
        <div className="welcome-feature">
          <Icon name="Edit3" size={14} />
          <span>Rich Editor</span>
        </div>
        <div className="welcome-feature">
          <Icon name="Folder" size={14} />
          <span>Content Management</span>
        </div>
        <div className="welcome-feature">
          <Icon name="BarChart3" size={14} />
          <span>Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
