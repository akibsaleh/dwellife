/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import useAdmin from '../../CustomHooks/useAdmin';

const AllUsers = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosSecure.get('/users');
      return response.data;
    },
  });

  return (
    <div className="max-w-1440 w-full flex flex-col items-center">
      <h2 className="text-center">All Users</h2>
      <div className="text-center flex justify-center">
        <p>Total Users: {users?.length}</p>
      </div>
    </div>
  );
};

export default AllUsers;
