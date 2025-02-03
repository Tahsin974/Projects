import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Context/useAuthContext";
import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    const {user,loading} = useAuthContext();
    const location = useLocation();

    if(loading){
        

        return <div className="flex justify-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }
    
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes ={
    children: PropTypes.node,
}