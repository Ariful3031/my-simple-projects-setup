import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import { useLocation, useNavigate } from "react-router";



const AuthProvider = ({ children }) => {
   
    // const location = useLocation();
    // const navigate = useNavigate()

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    // 🔥 current user detect
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);


    // create user / register user 
    const createUser = async (email, password) => {
        setLoading (true);
        return createUserWithEmailAndPassword(auth, email, password);
      
    };

    // sign user / login user 
    const signInUser = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOutUser = () => {
        signOut(auth)
            .then(() => {
                toast.success('Logout Successful')
                // Sign-out successful.
            }).catch((err) => {
                toast.error(err.message)
                // An error happened.
            });
    }


    // google login 
    const handleGoogleLogin =() => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        loading,
        setLoading,
        currentUser: user,
        createUser,
        signInUser,
        logOutUser,
        handleGoogleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;