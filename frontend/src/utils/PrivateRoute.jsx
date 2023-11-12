import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

export const WithPrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
      // If there is a current user it will render the passed down component
    if (currentUser) {
      return children;
    }
  
    // Otherwise redirect to the login route
    return <Navigate to="/login" />;
};


WithPrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
  }