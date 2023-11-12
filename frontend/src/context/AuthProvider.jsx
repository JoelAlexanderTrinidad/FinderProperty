import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import { updateProfile, signOut } from "firebase/auth";
import auth from "../config/firebase";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState();
  const [emailUser, setEmailUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    const email = auth.onAuthStateChanged((user) => {
      user.email
    });

    setEmailUser(email);

      return unsubscribe;
  }, []);

  useEffect(() => {
    setEmailUser(currentUser)
  },[currentUser])

  const  updateUserProfile = (user, profile) => {
    return updateProfile(user, profile);
  }

  const register = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logout = () => {
    return signOut(auth);
  }

  const contextValue = {
    currentUser,
    login,
    register,
    error,
    setError,
    updateUserProfile,
    logout,
    emailUser
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}