import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Login from '../pages/external/Login';

export default function PrivateRoute({component: Component, ...rest}) {

    return localStorage.getItem("JWT-token")  ? <Outlet /> : <Navigate to="/home" />
}
