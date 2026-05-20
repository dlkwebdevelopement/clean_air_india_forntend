import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import NavigationSection from './NavigationSection';
import './SidebarNavigation.css';
import img from "../../assets/images/logo/Logos.svg"

const SidebarNavigation = ({ collapsed = false, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    blog: false,
    content: false
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setIsAdmin(storedUser?.role === 'admin');
  }, []);

  const navigationData = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'LayoutDashboard'
    },
    {
      id: 'blog',
      label: 'Blog Management',
      icon: 'FileText',
      children: [
        {
          id: 'create-blog',
          label: 'Create New',
          path: '/create-new-blog',
          icon: 'Plus'
        },
        {
          id: 'blog-list',
          label: 'Blog List',
          path: '/blog-list',
          icon: 'List'
        },
        // {
        //   id: 'drafts',
        //   label: 'Drafts',
        //   path: '/drafts',
        //   icon: 'FileEdit'
        // }
      ]
    },
    // {
    //   id: 'content',
    //   label: 'Content Organization',
    //   icon: 'FolderOpen',
    //   children: [
    //     {
    //       id: 'tag-management',
    //       label: 'Tag Management',
    //       path: '/tag-management',
    //       icon: 'Tag'
    //     },
    //     {
    //       id: 'category-management',
    //       label: 'Category Management',
    //       path: '/category-management',
    //       icon: 'Folder'
    //     }
    //   ]
    // }
  ];

  if (isAdmin) {
    navigationData.push({
      id: 'admin',
      label: 'User Management',
      icon: 'Users',
      children: [
        {
          id: 'create-admin',
          label: 'Create User',
          path: '/create-childadmin',
          icon: 'UserPlus'
        },
        {
          id: 'admin-list',
          label: 'User List',
          path: '/admin-list',
          icon: 'List'
        }
      ]
    });
  }

  useEffect(() => {
    const currentPath = location?.pathname;
    const newExpandedSections = { ...expandedSections };

    navigationData?.forEach(section => {
      if (section?.children) {
        const hasActiveChild = section?.children?.some(child => child?.path === currentPath);
        if (hasActiveChild) {
          newExpandedSections[section.id] = true;
        }
      }
    });

    setExpandedSections(newExpandedSections);
  }, [location?.pathname, navigationData]);

  const handleSectionToggle = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev?.[sectionId]
    }));
  };

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const isActiveRoute = (path) => {
    return location?.pathname === path;
  };

  const renderNavigationItem = (item) => {
    if (item?.children) {
      return (
        <NavigationSection
          key={item?.id}
          section={item}
          expanded={expandedSections?.[item?.id]}
          onToggle={() => handleSectionToggle(item?.id)}
          onNavigate={handleNavigation}
          isActiveRoute={isActiveRoute}
          collapsed={collapsed}
        />
      );
    }

    return (
      <button
        key={item?.id}
        onClick={() => handleNavigation(item?.path)}
        className={`sidebar-nav-item ${isActiveRoute(item?.path) ? 'sidebar-nav-item-active' : 'sidebar-nav-item-inactive'}`}
      >
        <Icon 
          name={item?.icon} 
          size={20} 
          className={`sidebar-nav-icon ${collapsed ? 'sidebar-nav-icon-collapsed' : 'sidebar-nav-icon-expanded'}`}
        />
        {!collapsed && (
          <span className="sidebar-nav-label">{item?.label}</span>
        )}
      </button>
    );
  };

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
      <div className="sidebar-content">
        {/* Logo Section */}
       <div className="sidebar-header">
  {!collapsed && (
    <div className="sidebar-logo">
      <div className="sidebar-logo-icon">
        <img height="75" width="136" src={img}
          alt="Blog Logo" 
          style={{ width: 150, height: 90, objectFit: 'contain' }}
        />
      </div>
    </div>
  )}
  {collapsed && (
    <div className="sidebar-logo-collapsed">
      <Icon name="FileText" size={20} color="white" />
    </div>
  )}
</div>


        {/* Navigation */}
        <nav className="sidebar-nav">
          {navigationData?.map(renderNavigationItem)}
        </nav>

        {/* Collapse Toggle */}
        <div className="sidebar-footer">
          <button
            onClick={onToggle}
            className="sidebar-toggle-btn"
          >
            <Icon 
              name={collapsed ? "ChevronRight" : "ChevronLeft"} 
              size={20} 
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNavigation;