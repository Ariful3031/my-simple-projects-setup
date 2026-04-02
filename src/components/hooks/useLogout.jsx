import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const useLogout = () => {
    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOutUser();
            toast.success("Logout Successful");
            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return handleLogout;
};

export default useLogout;