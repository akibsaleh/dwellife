import { useContext } from 'react';
import PageTitle from '../../Components/PageTitle';
import { AuthContext } from '../../Providers/Provider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import ProfileInformation from '../../Shared/ProfileInformation';
import useAdmin from '../../CustomHooks/useAdmin';
import AdminProfile from '../../Components/AdminProfile';
const MyProfile = () => {
  const isAdmin = useAdmin();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {data: agreement} = useQuery({
    queryKey: [`singleUserAgreement`, user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/single-agreement?email=${user?.email}`);
      return response.data;
    }
  });
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <PageTitle
        title={'My Profile'}
      />
      <div className="max-w-4xl w-full flex flex-col rounded-box overflow-hidden shadow-lg">
        <div className="w-full h-48 profile-pattern flex justify-center items-center">
          <img
            src={user?.photoURL}
            className="w-40 h-40 rounded-full border-4 shadow-xl border-base-300 object-cover"
            alt={user?.displayName}
          />
        </div>
        <div className="w-full py-5 text-center">
          <h3 className="text-xl">{user?.displayName}</h3>
          <p className="text-lg">{user?.email}</p>
        </div>
        {agreement && !isAdmin ? <ProfileInformation agreement={agreement} /> : '' }
        {isAdmin ? <AdminProfile /> : '' }
      </div>
    </div>
  );
};

export default MyProfile;
