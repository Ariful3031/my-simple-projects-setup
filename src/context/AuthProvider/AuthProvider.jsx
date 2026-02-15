import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";


const AuthProvider = ({ children }) => {

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
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
                toast.success('Register successfull')
                return result.user;
            })
            .catch((err) => {
                toast.error(err.message || "something went wrong")
                console.log(err)
            })
    }
    // sign user / login user 
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 

                console.log(user)
                toast.success("login successfull")
                return result.user;
            })
            .catch((err) => {
                toast.error(err.message)
                console.log(err.message)
            });

    }
    const logOutUser = () => {
        console.log('click logout')
        signOut(auth)
            .then(() => {
                toast.success('Sing-out Successful')
                // Sign-out successful.
            }).catch((err) => {
                toast.error(err.message)
                // An error happened.
            });
    }


    // google login 
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                // console.log(result)
                toast.success("login successful")
            }).catch((err) => {
                console.log(err.message)
                toast.error(err.message)
            });
    }

    const authInfo = {
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