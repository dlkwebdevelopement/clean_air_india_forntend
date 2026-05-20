import React from 'react';
import Icon from '../../../shared/AppIcon';
import './SecurityFeatures.css'; // Import the CSS file

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'Secure Registration',
      description: 'Your data is protected with industry-standard encryption'
    },
    {
      icon: 'Lock',
      title: 'Password Protection',
      description: 'Strong password requirements ensure account security'
    },
    // {
    //   icon: 'Mail',
    //   title: 'Email Verification',
    //   description: 'Verify your email address to activate your account'
    // },
    {
      icon: 'Users',
      title: 'Admin Access',
      description: 'Join the blog administration team with full content management'
    }
  ];

  return (
    <div className="security-features-container">
      <div className="security-features-header">
        <h3 className="security-features-title">
          Secure Blog Administration
        </h3>
        <p className="security-features-subtitle">
          Join our content management platform with enterprise-grade security
        </p>
      </div>
      <div className="security-features-list">
        {securityFeatures?.map((feature, index) => (
          <div key={index} className="security-feature-item">
            <div className="security-feature-icon-container">
              <Icon name={feature?.icon} size={20} className="security-feature-icon" />
            </div>
            <div className="security-feature-content">
              <h4 className="security-feature-title">
                {feature?.title}
              </h4>
              <p className="security-feature-description">
                {feature?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="security-features-footer">
        <div className="security-features-ssl">
          <Icon name="Shield" size={14} />
          <span>SSL Encrypted Connection</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;
