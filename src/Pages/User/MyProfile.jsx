import { useContext } from 'react';
import PageTitle from '../../Components/PageTitle';
import { AuthContext } from '../../Providers/Provider';
const MyProfile = () => {
  const { user } = useContext(AuthContext);
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
        <div className="w-full flex items-center text-left px-10 text-lg border-t border-base-300">
          <p className="w-2/5 text-lg font-semibold border-r border-base-300 py-5 mr-5">Rented Apartment Info</p>
          <p className="w-1/5">Floor: 4</p>
          <p className="w-1/5">Block: A</p>
          <p className="w-1/5">Apartment No: 401</p>
        </div>
        <div className="w-full flex items-center text-left px-10 text-lg border border-base-300">
          <p className="w-2/5 text-lg font-semibold border-r border-base-300 py-5 mr-5">Agreement acceptence date</p>
          <p className="w-3/5 text-left">29/11/2022</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
