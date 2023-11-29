/* eslint-disable react/prop-types */
import { MdDeleteForever } from 'react-icons/md';
import { CgUnavailable } from 'react-icons/cg';
import { IoCheckmarkDone } from "react-icons/io5";

import Swal from 'sweetalert2';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { toast } from 'react-toastify';

const CouponRow = ({ coupon, idx, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0069FF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete Coupon',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/coupons/${id}`)
          .then((response) => {
            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Coupon has been deleted.',
                icon: 'success',
              });
            }
            refetch();
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const handleUpdate = async (id, availability) => {
    const status = {available :  false};
    if(availability === false) status.available = true;
    const response = await axiosSecure.patch(`/api/coupons/${id}`, status);
    if (response.data.modifiedCount > 0) {
        toast.success('coupon availability updated');
        refetch();
    }
  };

  return (
    <tr key={coupon?._id}>
      <th>{idx + 1}</th>
      <td>{coupon?.code}</td>
      <td className="text-center">{coupon?.percentage}%</td>
      <td className="text-sm max-w-xs">{coupon?.desc}</td>
      <td className="text-sm font-bold text-center">
        <span className={coupon?.available ? 'badge badge-success' : 'badge badge-error'}>{coupon?.available ? 'Available' : 'Expired'}</span>
      </td>
      <td className="space-x-2">
        <div
          className="tooltip"
          data-tip={coupon?.available ? "Expire Coupon" : "Avail Coupon"}
        >
          <button
            type="button"
            onClick={() => handleUpdate(coupon._id, coupon?.available)}
            className={`btn ${coupon?.available ? 'btn-warning' : 'btn-success'} text-warning-content btn-sm btn-circle text-xl`}
          >
            {coupon?.available ? <CgUnavailable /> : <IoCheckmarkDone />}
          </button>
        </div>
        <div
          className="tooltip"
          data-tip="Delete"
        >
          <button
            type="button"
            onClick={() => handleDelete(coupon._id)}
            className="btn btn-error text-warning-content btn-sm btn-circle text-xl"
          >
            <MdDeleteForever />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CouponRow;
