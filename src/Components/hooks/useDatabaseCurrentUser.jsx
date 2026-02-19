import React from 'react'
import useCurrentUser from './useCurrentUser';
import { useGetSingleUserAndRoleQuery } from '../../redux/api/authApi';

const useDatabaseCurrentUser = () => {

    const currentUser = useCurrentUser();
    const { data, isLoading } = useGetSingleUserAndRoleQuery({ email: currentUser?.email });
    const currentDatabaseUser = data?.user;
    // console.log(currentDatabaseUser)

    return { currentDatabaseUser, isLoading }
}

export default useDatabaseCurrentUser