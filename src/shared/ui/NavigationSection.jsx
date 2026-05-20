import React from 'react';
import Icon from '../AppIcon';
import './NavigationSection.css';

const NavigationSection = ({ 
  section, 
  expanded, 
  onToggle, 
  onNavigate, 
  isActiveRoute, 
  collapsed 
}) => {
  const hasActiveChild = section?.children?.some(child => isActiveRoute(child?.path));

  return (
    <div className="navigation-section">
      {/* Section Header */}
      <button
        onClick={onToggle}
        className={`navigation-section-header ${hasActiveChild ? 'navigation-section-header-active' : 'navigation-section-header-inactive'}`}
      >
        <Icon 
          name={section?.icon} 
          size={20} 
          className={`navigation-section-icon ${collapsed ? 'navigation-section-icon-collapsed' : 'navigation-section-icon-expanded'}`}
        />
        {!collapsed && (
          <>
            <span className="navigation-section-label">{section?.label}</span>
            <Icon 
              name={expanded ? "ChevronDown" : "ChevronRight"} 
              size={16} 
              className="navigation-section-chevron"
            />
          </>
        )}
      </button>
      {/* Section Children */}
      {!collapsed && expanded && section?.children && (
        <div className="navigation-section-children">
          {section?.children?.map(child => (
            <button
              key={child?.id}
              onClick={() => onNavigate(child?.path)}
              className={`navigation-child-button ${isActiveRoute(child?.path) ? 'navigation-child-button-active' : 'navigation-child-button-inactive'}`}
            >
              <Icon 
                name={child?.icon} 
                size={16} 
                className="navigation-child-icon"
              />
              <span className="navigation-child-label">{child?.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationSection;