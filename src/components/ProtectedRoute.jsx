import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;