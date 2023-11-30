import { useQuery } from '@tanstack/react-query';
import PageTitle from '../../Components/PageTitle';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Provider';

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { isLoading, error, data: history } = useQuery({
    queryKey: ['paymentsHistory'],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/payment-history?email=${user?.email}`);
      return response.data;
    },
  });
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <PageTitle
        title={'Payment History'}
        subtitle={'All the successful payment history is listed in this page'}
      />
      <div className="w-full max-w-md pb-10">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center gap-x-3"
        >
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search with month name. Ex. November"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn btn-primary text-lg"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Apartment</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Payment Date</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {history?.map((payment, idx) =>
              <tr key={payment?._id}>
                <th className='max-w-[40px]'>{idx+1}</th>
                <td>{payment?.email}</td>
                <td>{payment?.apartment}</td>
                <td>{payment?.month}</td>
                <td>{payment?.rent}</td>
                <td>{payment?.paymentDate}</td>
                <td>{payment?.transactionId}</td>
              </tr>
               )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
