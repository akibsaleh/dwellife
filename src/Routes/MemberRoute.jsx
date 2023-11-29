import { useState } from 'react';
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../Providers/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import useMember from '../CustomHooks/useMember';
import { useEffect } from 'react';

const MemberRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isMember, isMemberLoading] = useMember();
  const [check, setCheck] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!loading && !isMemberLoading) {
      setCheck(true);
    }
  }, [isMemberLoading, loading]);

  if (!check) {
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
