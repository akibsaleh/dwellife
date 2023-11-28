import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Provider';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="container max-w-screen-xl mx-auto flex flex-col grow items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user?.email) return children;

  return (
    <Navigate
      to="/login"
      state={{ from: location }}
    />
  );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
