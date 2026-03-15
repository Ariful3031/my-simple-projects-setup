import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';

const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    const { currentUser, loading } = useContext(AuthContext)

    if (loading) {
        return <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    if (!currentUser) {
        return <Navigate  state={{ from: location.pathname }}  to={`/login`}></Navigate>
    }
    return children;
}

export default ProtectedRoute