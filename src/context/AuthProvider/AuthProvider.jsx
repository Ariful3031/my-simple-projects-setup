import { GoogleAuthProvider } from "firebase/auth"
import { AuthContext } from "../AuthContext/AuthContext";


const AuthProvider = ({ children }) => {

    // const googleProvider = new GoogleAuthProvider();
    const createUser= "hello"

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