import React from 'react';
import Icon from '../../../shared/AppIcon';
import './AuthLayout.css';
import logo from "../../../assets/images/logo/Logos.svg"

const AuthLayout = ({ children }) => {
  const currentYear = new Date()?.getFullYear();

  return (
    <div className="auth-layout">
      {/* Header */}
      <header className="auth-header">
        <div className="auth-header-container">
         <div className="auth-logo">
  <img height="75" width="136" src={logo} 
    alt="Logo" 
    className="auth-logo-img"
  />
</div>

          
          {/* Security Indicator */}
          <div className="auth-security-indicator">
            <Icon name="Shield" size={16} className="auth-security-icon" />
            <span>Secure Connection</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="auth-main">
        <div className="auth-content">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="auth-footer">
        <div className="auth-footer-container">
          <div className="auth-footer-content">
            <div className="auth-footer-copyright">
              <span>&copy; {currentYear} Blog Admin Dashboard</span>
              <span className="auth-footer-separator">•</span>
              <span className="auth-footer-rights">All rights reserved</span>
            </div>
            
            <div className="auth-footer-links">
              <button className="auth-footer-link">
                Privacy Policy
              </button>
              <span className="auth-footer-separator">•</span>
              <button className="auth-footer-link">
                Terms of Service
              </button>
              <span className="auth-footer-separator">•</span>
              <button className="auth-footer-link">
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
