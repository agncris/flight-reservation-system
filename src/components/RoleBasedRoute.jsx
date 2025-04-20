import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const RoleBasedRoute = ({ allowedRoles }) => {
 const userRole = localStorage.getItem('userRole');
 return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/" />;
};
export default RoleBasedRoute;