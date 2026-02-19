import React from 'react'
import useCurrentUser from './useCurrentUser';
import { useGetSingleUserAndRoleQuery } from '../../redux/api/authApi';

const useCurrentRole = () => {

    const currentUser = useCurrentUser();
    const { data, isLoading: roleLoading } = useGetSingleUserAndRoleQuery({ email: currentUser?.email, fields: "role" });
    const currentRole = data?.role;

    return { currentRole, roleLoading }
}

export default useCurrentRole