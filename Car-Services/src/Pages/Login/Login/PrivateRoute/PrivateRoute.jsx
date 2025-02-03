import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if(loading){
        <span className="loading loading-dots loading-lg"></span>
        return;
    }

    if(user){

        return children;
    }

    return (
        <Navigate state={location.pathname} to = '/login'></Navigate>
    );
};

export default PrivateRoute;