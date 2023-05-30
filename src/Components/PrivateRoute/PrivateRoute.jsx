import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};