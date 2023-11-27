/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import useAdmin from '../../CustomHooks/useAdmin';
import PageTitle from '../../Components/PageTitle';
import { toast } from 'react-toastify';

const ManageMembers = () => {
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosSecure.get('/api/users?role=member');
      return response.data;
    },
  });
  const handleMember = async (email) => {
    const response = await axiosSecure.patch('/api/remove-member', { email: email });
    console.log(response, response?.data?.modifiedCount > 0);
    if (response?.data?.modifiedCount > 0) {
      toast.success('Member removed successfully');
      refetch();
    }
  };

  if (isAdmin && !error) {
    return (
      <div className="max-w-1440 w-full flex flex-col items-center">
        <PageTitle
          title={'Manage Members'}
          subtitle={'Manage all the available members below'}
        />
        <div className="w-full flex justify-center items-start">
          <div className="overflow-x-auto w-full max-w-screen-lg mx-auto">
            <table className="table table-zebra text-lg">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-12 mask mask-squircle">
                          <img src={user?.photo} />
                        </div>
                      </div>
                    </td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-outline btn-error text-error-content btn-sm text-base"
                        onClick={() => handleMember(user?.email)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-1440 w-full flex flex-col items-center">
      <PageTitle
        title={'Manage Members'}
        subtitle={'Manage all the available members below'}
      />
      <div className="w-full flex h-full grow justify-center items-start">
        <p className='text-3xl'> Failed to fetch Members Data from Database</p>
      </div>
    </div>
  );
};

export default ManageMembers;
