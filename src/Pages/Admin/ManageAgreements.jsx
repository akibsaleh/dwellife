import { useQuery } from '@tanstack/react-query';
import PageTitle from '../../Components/PageTitle';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import useAdmin from '../../CustomHooks/useAdmin';
import AgreementRow from './AgreementRow';

const ManageAgreements = () => {
  const isAdmin = useAdmin();
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    error,
    data: agreements = [],
    refetch
  } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const response = await axiosSecure.get('/api/agreements');
      return response.data;
    },
  });
  if (isAdmin) {
    return (
      <div className="max-w-1440 w-full flex flex-col items-center">
        <PageTitle
          title={'Manage Agreements'}
          subtitle={'check and manage all the agreements in this page'}
        />
        <div className="w-full flex flex-col items-center pb-20">
          <div className="overflow-x-auto w-full flex flex-col items-center grow">
            {isLoading && (
              <div className="w-full h-full flex grow justify-center items-center">
                <progress className="progress w-56"></progress>
              </div>
            )}
            {error && <div className="w-full h-full grow flex grow justify-center items-center">
                <p className='text-3xl font-bold'>Failed to get data from Databse</p>
              </div>}
              {agreements?.length > 0 && (
              <table className="table table-zebra">
                {/* head */}
                <thead className="text-sm">
                  <tr>
                    <th></th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Floor No</th>
                    <th>Block No</th>
                    <th>Apartment No</th>
                    <th>Rent</th>
                    <th>Request Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agreements.map((agreement, idx) => (
                    <AgreementRow
                      key={agreement?._id}
                      idx={idx}
                      agreement={agreement}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-1440 w-full flex flex-col items-center">
        <PageTitle
          title={'Manage Coupons'}
          subtitle={'Create and manage all the coupons below'}
        />
        <div className="w-full flex flex-col items-center">
          <p>You are not an admin to access this page</p>
        </div>
      </div>
    );
  }
};

export default ManageAgreements;
