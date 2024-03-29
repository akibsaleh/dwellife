/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import axios from 'axios';
import auth from '../Firebase/firebase.config';
import useAxiosPublic from '../CustomHooks/useAxiosPublic';

const AuthContext = createContext(null);
export { AuthContext };
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState(null);

  const axiosPublic = useAxiosPublic();

  const handleEmailPassSignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleEmailPassSignup = async (email, password) => {
    try {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogout = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if(res.data.token) {
            localStorage.setItem('access-token', res.data.token);
            setLoading(false);
          }
        }).catch(err => console.log(err));
      } else {
        localStorage.removeItem('access-token');
        setProfileInfo({});
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = { user, loading, handleEmailPassSignin, handleEmailPassSignup, handleGoogleLogin, handleLogout, profileInfo, setProfileInfo };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
