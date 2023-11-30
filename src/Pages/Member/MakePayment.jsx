import { useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import PageTitle from '../../Components/PageTitle';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { AuthContext } from '../../Providers/Provider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const MakePayment = () => {
  const { user, loading } = useContext(AuthContext);
  const [monthsList, setMonthsList] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: agreement,
  } = useQuery({
    queryKey: [user?.email, 'agreementForPayment'],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/make-payment?email=${user?.email}`);
      return response.data;
    },
  });

  useEffect(() => {
    if (agreement) {
      const agDateParts = agreement.date.split('/');
      const sortedAgDate = `${agDateParts[1]}/${agDateParts[0]}/${agDateParts[2]}`
      const newAgDate = new Date(sortedAgDate);
      const AgMonth = newAgDate.getMonth();
      const AgYear = newAgDate.getFullYear();
      const monthsOptions = Array.from({length: 3}, (_, idx) => {
        const nextMonth = new Date(AgYear, AgMonth + idx);
        return {
          monthNumeric: nextMonth.getMonth(),
          monthName: nextMonth.toLocaleString('en-Us', { month: 'long' }),
          year: nextMonth.getFullYear(),
        };
      })
      setMonthsList(monthsOptions);
    }
  }, [agreement]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnsubmit = (data) => {
    data.email = agreement?.email;
    data.floor = agreement?.floor;
    data.block = agreement?.block;
    data.apartment = agreement?.apartment;
    data.rent = agreement?.rent;
    navigate('/dashboard/confirm-payment', {state : data});
  };

  if (isLoading)
    return (
      <div className="flex flex-col grow h-full items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col grow h-full items-center justify-center">
        <p className="text-s">Failed load data from database</p>
      </div>
    );
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <PageTitle
        title={'Make Payment'}
        subtitle={'Fill out the form below to make the payment'}
      />
      <div className="w-full flex flex-col items-center">
        <div className="p-10 shadow-lg mb-20 max-w-2xl mx-auto w-full">
          <form
            onSubmit={handleSubmit(handleOnsubmit)}
            className="w-full flex flex-col gap-y-3"
          >
            {/* email */}
            <div className="form-control">
              <div className="label">
                <label className="label-text">Email</label>
              </div>
              <input
                type="text"
                defaultValue={agreement?.email || ''}
                className="input input-bordered text-xl w-full"
                {...register('email', { disabled: true })}
              />
            </div>
            {/* Floor */}
            <div className="form-control">
              <div className="label">
                <label className="label-text">Floor</label>
              </div>
              <input
                type="text"
                disabled
                defaultValue={agreement?.floor || ''}
                className="input input-bordered text-xl w-full"
                {...register('floor')}
              />
            </div>
            {/* Block */}
            <div className="form-control">
              <div className="label">
                <label className="label-text">Block</label>
              </div>
              <input
                type="text"
                defaultValue={agreement?.block || ''}
                className="input input-bordered text-xl w-full"
                {...register('block', { disabled: true })}
              />
            </div>
            {/* Apartment */}
            <div className="form-control">
              <div className="label">
                <label className="label-text">Apartment</label>
              </div>
              <input
                type="text"
                defaultValue={agreement?.apartment || ''}
                className="input input-bordered text-xl w-full"
                {...register('apartment', { disabled: true })}
              />
            </div>
            {/* rent */}
            <div className="form-control">
              <div className="label">
                <label className="label-text">Rent</label>
              </div>
              <input
                type="text"
                defaultValue={agreement?.rent || ''}
                className="input input-bordered text-xl w-full"
                {...register('rent', { disabled: true })}
              />
            </div>
            {/* Month */}
            <div className="form-control">
              <div className="label">
                <label className="label-text">Month</label>
              </div>
              <select
                className="select select-bordered w-full"
                {...register('month', { required: 'Selecting a month is required' })}
              >
                {monthsList.map((month, idx) => (
                  <option key={idx} value={`${month.monthName},${month.year}`}>{month.monthName}, {month.year}</option>
                ))}
              </select>
              {errors.month && <p className="text-red-500">{errors.month.message}</p>}
            </div>
            <div className="form-control pt-5 items-center">
              <button
                type="submit"
                className="btn btn-primary btn-outline btn-md text-xl text-primary-content w-fit"
              >
                Pay Rent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MakePayment;
