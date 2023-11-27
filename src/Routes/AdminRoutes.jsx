/* eslint-disable react/prop-types */
import { useContext } from 'react';
import useAdmin from '../CustomHooks/useAdmin';
import { AuthContext } from '../Providers/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
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
