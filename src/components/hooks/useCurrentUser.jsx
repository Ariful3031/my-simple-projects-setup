import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext';

const useCurrentUser = () => {
    const { currentUser } = useContext(AuthContext)

    return currentUser;
}

export default useCurrentUser