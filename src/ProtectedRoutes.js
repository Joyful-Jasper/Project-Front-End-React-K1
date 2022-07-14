import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.user);

  return !user.logged ? <Navigate to='/log-in' /> : <Outlet />; 
}

export default ProtectedRoutes