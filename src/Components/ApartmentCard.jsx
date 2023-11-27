import { useNavigate } from 'react-router-dom';
/* eslint-disable react/prop-types */
import { PiElevator, PiDoorOpenFill, PiSquaresFour } from 'react-icons/pi';
import useAxiosSecure from '../CustomHooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Provider';
import { toast } from 'react-toastify';

const ApartmentCard = ({ apartment }) => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClick = async () => {
        const info = {
            email: user?.email,
            name: user?.displayName,
            apartment: apartment?.apartment,
            block: apartment?.block,
            floor: apartment?.floor,
            rent: apartment?.rent,
            status: 'pending',
        }
        if(user?.email) {
            const response = await axiosSecure.post('/api/agreement', info);
            if(response.data.insertedId) {
                toast.success('Agreement submitted successfully');
            } else {
                toast.error('Failed to submit agreement');
            }
        } else {
            navigate('/login');
        }
        
    }
  return (
    <div className="card card-side w-full bg-base-100 shadow-xl flex justify-between items-center">
      <figure className="!my-0 w-1/2 flex grow">
        <img
          src={apartment?.image}
          alt="apartment"
          className="w-full h-72 object-cover"
        />
      </figure>
      <div className="card-body [&_*]:!my-0 w-1/2 !py-6">
        <div className="flex flex-col">
          <p className="font-bold flex items-center">
            <PiDoorOpenFill className="text-2xl mr-2" />
            Apartment: {apartment?.apartment}
          </p>
          <p className="font-bold flex items-center">
            <PiElevator className="text-2xl mr-2" />
            Floor: {apartment?.floor}
          </p>
          <p className="font-bold flex items-center">
            <PiSquaresFour className="text-2xl mr-2" />
            Block: {apartment?.block}
          </p>
          <p className='py-3 font-bold'>Rent: <span className='inline-block text-5xl text-primary'>{apartment?.rent}</span>/month</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-outline btn-primary w-full text-2xl" onClick={handleClick}>Agreement</button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
