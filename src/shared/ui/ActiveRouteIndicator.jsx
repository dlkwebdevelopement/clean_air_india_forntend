import React from 'react';
import { useLocation } from 'react-router-dom';

const ActiveRouteIndicator = ({ 
  path, 
  children, 
  className = '', 
  activeClassName = 'bg-primary text-primary-foreground',
  inactiveClassName = 'text-foreground hover:bg-muted hover:text-foreground'
}) => {
  const location = useLocation();
  const isActive = location?.pathname === path;

  const combinedClassName = `${className} ${
    isActive ? activeClassName : inactiveClassName
  } transition-smooth`;

  return (
    <div className={combinedClassName}>
      {children}
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
      )}
    </div>
  );
};

export default ActiveRouteIndicator;