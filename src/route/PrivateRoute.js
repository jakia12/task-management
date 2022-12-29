import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Spinner from '../components/spinner/Spinner';
import { AuthState } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();


    const { user, loading } = AuthState();

    if (loading) {
        return <div><Spinner /></div>
    }

    if (user) {
        return children;

    }
    return <Navigate to="/login" state={{ from: location }} replace />

}

export default PrivateRoute
