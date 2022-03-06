import React from 'react'
import { Route, Navigate, Outlet  } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Login from './Login';

export default function LoginRoute({component: Component, ...rest}) {

    return localStorage.getItem("JWT-token") ? <Navigate to="/home" /> : <Outlet />;
}
