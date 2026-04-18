import React, { useContext, useEffect } from 'react'
import useCurrentRole from '../Components/hooks/useCurrentRole'
import { AuthContext } from '../context/AuthContext/AuthContext';
import Loading from '../components/pages/Loading/Loading';
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { currentRole, roleLoading } = useCurrentRole();
    const { loading, logOutUser } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (!loading && !roleLoading && currentRole !== "admin") {
            toast.error("Access is forbidden", { toastId: "admin-error" });
            logOutUser();
        }
    }, [currentRole, loading, roleLoading]);

    if (loading || roleLoading) {
        return <Loading />;
    }

    if (currentRole !== "admin") {
        return (
            <Navigate
                to="/login"
                state={{ from: location.pathname }}
            />
        );
    }

    return children;
}

export default AdminRoute;
