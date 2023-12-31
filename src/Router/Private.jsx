import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" replace state={location?.pathname}></Navigate>







};

export default Private;