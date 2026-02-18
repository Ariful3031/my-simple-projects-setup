import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { AuthContext } from "../AuthContext/AuthContext";
import { useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../../redux/api/authApi";



const AuthProvider = ({ children }) => {
    const [registerUser, { isLoading, error }] = useRegisterUserMutation()


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
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const userInfo = {
                email: result?.user?.email,
                emailVerified: result?.user?.emailVerified,
                displayName: result?.user?.displayName,
                photoURL: result?.user?.photoURL,
                creationTime: result?.user?.metadata?.creationTime,
                lastSignInTime: result?.user?.metadata?.lastSignInTime,
                accessToken: result?.user?.accessToken,
                phoneNumber: result?.user?.phoneNumber,
            };
            // এখানে Redux / RTK Query mutation call করো
            await registerUser(userInfo).unwrap();
            toast.success('Register successful');
            return result.user;

        } catch (err) {
            toast.error(err.message || "Something went wrong");
            console.log(err);
        }
    };

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
    const handleGoogleLogin = async () => {

        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result)

            const userInfo = {
                email: result?.user?.email,
                emailVerified: result?.user?.emailVerified,
                displayName: result?.user?.displayName,
                photoURL: result?.user?.photoURL,
                creationTime: result?.user?.metadata?.creationTime,
                lastSignInTime: result?.user?.metadata?.lastSignInTime,
                accessToken: result?.user?.accessToken,
                phoneNumber: result?.user?.phoneNumber,
            };

            await registerUser(userInfo).unwrap();
            toast.success('Register successful');
            return result.user;

        } catch (err) {
            toast.error(err.message || "Something went wrong");
            // console.log(err);
        }




        // .then(() => {
        //     // console.log(result)
        //     toast.success("login successful")
        // }).catch((err) => {
        //     console.log(err.message)
        //     toast.error(err.message)
        // });
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