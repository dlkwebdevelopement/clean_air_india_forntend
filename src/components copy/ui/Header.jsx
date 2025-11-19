import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import './Header.css';

const Header = ({ onSidebarToggle, sidebarCollapsed = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const primaryNavItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
    { label: 'Create Blog', path: '/create-new-blog', icon: 'Plus' },
    { label: 'Blog List', path: '/blog-list', icon: 'List' }
  ];

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/admin');
        return;
      }

      const response = await fetch('https://api.cleanairindia.com/api/user/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      setUserData(data.user);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const isActiveRoute = (path) => location?.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin');
  };

  const getUserFullName = () => {
    if (!userData) return 'Loading...';
    return `${userData.firstName || ''} ${userData.lastName || ''}`.trim();
  };

  return (
    <header className="header" style={{ left: sidebarCollapsed ? '64px' : '240px' }}>
      <div className="header-container">
        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSidebarToggle}
            className="mobile-toggle-btn"
          >
            <Icon name="Menu" size={20} />
          </Button>
        </div>

        {/* Primary Navigation */}
        <nav className="primary-nav">
          {primaryNavItems?.map(item => (
            <Button
              key={item?.path}
              variant={isActiveRoute(item?.path) ? "default" : "ghost"}
              size="sm"
              onClick={() => handleNavigation(item?.path)}
              iconName={item?.icon}
              iconPosition="left"
              iconSize={6}
              className="nav-button"
            >
              {item?.label}
            </Button>
          ))}
        </nav>

        {/* Right Section */}
        <div className="header-right-section">
          {/* User Profile */}
          <div className="user-profile">
            <div className="user-info">
              <div className="user-name">{getUserFullName()}</div>
              {/* <div className="user-email">{userData?.email || 'Loading...'}</div> */}
            </div>
            <div
              className="user-avatar"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Icon name="User" size={16} color="white" />
            </div>

            {/* Dropdown menu on avatar click */}
            {showMenu && (
              <div className="user-menu-dropdown">
                <button
                  onClick={handleLogout}
                  className="user-menu-item logout-item"
                >
                  <Icon name="LogOut" size={16} className="user-menu-icon" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown */}
      {showMenu && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setShowMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;
