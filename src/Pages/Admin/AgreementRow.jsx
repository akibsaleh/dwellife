/* eslint-disable react/prop-types */
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoCloseCircleOutline } from 'react-icons/io5';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AgreementRow = ({ agreement, idx }) => {
  const axiosSecure = useAxiosSecure();
  const handleAgreement = async (status) => {
    const agreementInfo = {
      status: 'checked',
    };
    const userInfo = {
      role: 'member',
    };

    const response = await axiosSecure.patch(`/api/agreements/${agreement._id}`, agreementInfo);
    if (response.data?.modifiedCount > 0) {
      if (status === 'approved') {
        const responseUser = await axiosSecure.patch(`/api/users/${agreement.email}`, userInfo);
        if (responseUser.data?.modifiedCount > 0) {
          toast.success('Agreement Accepted');
        }
      } else {
        toast.warning('Agreement rejected');
      }
    } else {
      toast.error('Failed to update agreement');
      console.log(response);
    }
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{agreement?.name}</td>
      <td>{agreement?.email}</td>
      <td>{agreement?.floor}</td>
      <td>{agreement?.block}</td>
      <td>{agreement?.apartment}</td>
      <td>{agreement?.rent}</td>
      <td>{agreement?.date}</td>
      <td>{agreement?.status}</td>
      <td className="flex items-center gap-x-2">
        <div
          className="tooltip"
          data-tip="Accept"
        >
          <button
            className="btn btn-circle btn-md text-2xl btn-success text-success-content"
            onClick={() => handleAgreement('approved')}
          >
            <IoCheckmarkCircleOutline />
          </button>
        </div>
        <div
          className="tooltip"
          data-tip="Accept"
        >
          <button
            className="btn btn-circle btn-md text-2xl btn-error text-error-content"
            onClick={() => handleAgreement('declined')}
          >
            <IoCloseCircleOutline />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AgreementRow;
