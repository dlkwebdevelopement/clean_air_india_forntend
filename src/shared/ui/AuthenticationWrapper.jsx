import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthenticationWrapper = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authRoutes = ['/admin', '/sign-up'];
  const isAuthRoute = authRoutes?.includes(location?.pathname);

  useEffect(() => {
    // Check authentication status from localStorage or context
    const authStatus = localStorage.getItem('token');
    setIsAuthenticated(authStatus === 'true');
  }, [location?.pathname]);

  const handleAuthChange = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('token', status?.toString());
  };

  return (
    <div className="min-h-screen bg-background">
      {React.cloneElement(children, {
        isAuthenticated,
        onAuthChange: handleAuthChange,
        showNavigation: isAuthenticated && !isAuthRoute
      })}
    </div>
  );
};

export default AuthenticationWrapper;