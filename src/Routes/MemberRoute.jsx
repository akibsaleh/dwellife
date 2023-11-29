/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../Providers/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import useMember from '../CustomHooks/useMember';

const MemberRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isMember, isMemberLoading] = useMember();
  const location = useLocation();

  if (loading && isMemberLoading) {
    return (
      <div className="flex flex-col grow h-full items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user && isMember) {
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

export default MemberRoutes;
