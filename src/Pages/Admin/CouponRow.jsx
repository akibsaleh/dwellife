/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import Swal from 'sweetalert2'
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';

const CouponRow = ({ coupon, idx, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0069FF",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete Coupon"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure(`/api/delete-coupon/${coupon?._id}`)
              .then(response => {
                console.log(response);
              }).catch(err => console.log(err));
            }
          });
    }
    const handleUpdate = () => {
        console.log('update function');
    };

  return (
    <tr key={coupon?._id}>
      <th>{idx + 1}</th>
      <td>{coupon?.code}</td>
      <td className='text-center'>{coupon?.percentage}%</td>
      <td className="text-sm">{coupon?.desc}</td>
      <td className="text-sm font-bold text-center"><span className={coupon?.available ? 'badge badge-success' : 'badge badge-error'}>{coupon?.available ? 'Available' : 'Expired'}</span>
      </td>
      <td className='space-x-2'>
      <div className='tooltip' data-tip="Expire Coupon">
            <button
              type="button" onClick={handleUpdate}
              className="btn btn-warning text-warning-content btn-sm btn-circle text-xl"
            >
              <CgUnavailable />
            </button>
        </div>
        <div className='tooltip' data-tip="Delete">
            <button
              type="button" onClick={handleDelete}
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
