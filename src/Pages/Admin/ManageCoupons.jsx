import { useState } from 'react';
import PageTitle from '../../Components/PageTitle';
import { IoIosAdd } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import useAdmin from '../../CustomHooks/useAdmin';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const ManageCoupons = () => {
  const isAdmin = useAdmin();
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);
  const {
    isloading,
    error,
    data: coupons = [],
    refetch
  } = useQuery({
    queryKey: ['coupons'],
    queryFn: async () => {
      const response = await axiosSecure.get('/api/coupons');
      return response.data;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleCouponForm = async (data) => {
    const response = await axiosSecure.post('/api/coupons', data);
    console.log(response);
    if (response.data.insertedId) {
      toast.success('Coupon created successfully');
      reset();
      refetch();
    }
  };
  if (isAdmin) {
    return (
      <div className="max-w-1440 w-full flex flex-col items-center">
        <PageTitle
          title={'Manage Coupons'}
          subtitle={'Create and manage all the coupons below'}
        />
        <div className="w-full flex flex-col items-center pb-20">
          <div className="pb-10">
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="btn btn-lg btn-primary text-2xl"
            >
              <IoIosAdd className="text-3xl mr-2" />
              Create Coupon
            </button>
          </div>
          {isloading && (
            <div className="w-full flex flex-col items-center justify-center">
              <progress className="progress w-56"></progress>
            </div>
          )}
          {error && (
            <div className="w-full flex flex-col items-center justify-center">
                <p className='text-2xl font-bold'>Failed to get coupons data from database</p>
            </div>
          )}
          {coupons && (
            <div className="w-full flex flex-col items-center max-w-screen-lg">
              <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                  {/* head */}
                  <thead className="text-lg">
                    <tr>
                      <th></th>
                      <th>Coupon code</th>
                      <th>Discount Percentage</th>
                      <th>Description</th>
                      <th>Availability</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-xl">
                    {coupons.map((coupon, idx) => <tr key={coupon?._id}>
                      <th>{idx + 1}</th>
                      <td>{coupon?.code}</td>
                      <td>{coupon?.percentage}%</td>
                      <td className="text-sm">{coupon?.desc}</td>
                      <td>
                        <p className="badge badge-success">Available</p>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-error btn-outline btn-sm text-xl"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <dialog
          id="coupon-modal"
          className="modal modal-bottom sm:modal-middle glass"
          open={openModal}
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Create New Coupon</h3>
            <p className="py-4">Fill out the form below to create new coupon</p>
            <div className="modal-action w-full">
              <form
                method="dialog"
                onSubmit={handleSubmit(handleCouponForm)}
                className="w-full flex flex-col gap-y-3"
              >
                <input
                  type="text"
                  placeholder="Enter coupon code here"
                  className="input input-bordered w-full"
                  {...register('code', { required: 'Coupon code is required' })}
                />
                {errors.code && <p className="text-red-500">{errors.code.message}</p>}
                <input
                  type="number"
                  placeholder="Enter discount percentage here"
                  className="input input-bordered w-full"
                  {...register('percentage', { required: 'Coupon discount percentage is required' })}
                />
                {errors.percentage && <p className="text-red-500">{errors.percentage.message}</p>}
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Enter coupon description here"
                  {...register('desc')}
                ></textarea>

                <div className="w-full flex justify-end gap-x-3">
                  <button
                    className="btn btn-md btn-outline btn-primary text-xl"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button type='button'
                    className="btn btn-md btn-outline btn-error text-xl"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
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

export default ManageCoupons;
