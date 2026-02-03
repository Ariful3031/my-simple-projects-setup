import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { AuthContext } from "../AuthContext/AuthContext";
import { useState } from "react";
import auth from "../../firebase/firebase.config";


const AuthProvider = ({ children }) => {

    const [loading,setLoading]=useState();
    // const googleProvider = new GoogleAuthProvider();
    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        createUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;