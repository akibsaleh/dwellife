import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../CustomHooks/useAxiosSecure';

const AdminProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { data: information } = useQuery({
    queryKey: ['adminInformation'],
    queryFn: async () => {
      const response = await axiosSecure.get('/api/admin-profile-info');
      return response.data;
    },
  });
  return (
    <>
      <div className="w-full grid grid-cols-2 px-10 text-lg border-t border-neutral-content divide">
        <p className="py-5 pl-2 pr-1 border-b border-neutral-content">
          Total Apartments/Rooms: <strong>{information?.totalApartments}</strong>
        </p>
        <p className="py-5 pl-2 pr-1 border-b border-neutral-content">
          Percentage of Available Apartments/Rooms: <strong>{information?.percentageOfAvailableApartments.toFixed(2)}%</strong>
        </p>
        <p className="py-5 pl-2 pr-1 border-b border-neutral-content">
          Percentage of Rented Rooms: <strong>{information?.percentageOfRentedApartments.toFixed(2)}%</strong>
        </p>
        <p className="py-5 pl-2 pr-1 border-b border-neutral-content">
          Number of Users on the Database: <strong>{information?.totalUsers}</strong>
        </p>
        <p className="py-5 pl-2 pr-1">
          Number of members in the database: <strong>{information?.totalMembers}</strong>
        </p>
      </div>
    </>
  );
};

export default AdminProfile;
