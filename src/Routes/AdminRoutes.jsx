import { useState } from 'react';
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import useAdmin from '../CustomHooks/useAdmin';
import { AuthContext } from '../Providers/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [check, setCheck] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(!loading && !isAdminLoading){
      setCheck(true);
    }
  },[isAdminLoading, loading])

  if (!check) {
    return (
      <div className="flex flex-col grow h-full items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to={'/login'}
      state={{ from: location }}
      replace
    />
  );
};

export default AdminRoutes;
