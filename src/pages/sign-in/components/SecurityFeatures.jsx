import React from 'react';
import Icon from '../../../shared/AppIcon';
import './SecurityFeatures.css';

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'Secure Authentication',
      description: 'Industry-standard encryption protects your login credentials'
    },
    {
      icon: 'Lock',
      title: 'Data Protection',
      description: 'Your blog content and user data are encrypted and secure'
    },
    {
      icon: 'Eye',
      title: 'Privacy First',
      description: 'We never share your information with third parties'
    },
    {
      icon: 'Clock',
      title: 'Session Management',
      description: 'Automatic logout after inactivity for enhanced security'
    }
  ];

  return (
    <div className="security-features-container">
      <div className="security-features-card">
        <div className="security-features-header">
          <div className="security-features-icon-container">
            <Icon name="ShieldCheck" size={24} className="security-features-main-icon" />
          </div>
          <h3 className="security-features-title">Secure & Reliable</h3>
          <p className="security-features-subtitle">
            Your blog management platform built with security in mind
          </p>
        </div>

        <div className="security-features-list">
          {securityFeatures?.map((feature, index) => (
            <div key={index} className="security-feature-item">
              <div className="security-feature-icon-wrapper">
                <Icon name={feature?.icon} size={16} className="security-feature-icon" />
              </div>
              <div className="security-feature-content">
                <h4 className="security-feature-item-title">{feature?.title}</h4>
                <p className="security-feature-item-description">
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="security-features-footer">
          <div className="security-features-ssl">
            <Icon name="CheckCircle" size={14} className="security-features-ssl-icon" />
            <span>SSL Encrypted Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;
