/* eslint-disable react/prop-types */
import { FiMapPin } from "react-icons/fi";
const Marker = () => {
  return (
    <div className='relative'>
        <div className="card w-48 glass absolute -top-40 -right-28">
          <div className="card-body text-center flex justify-center items-center">
        
            <h5 className="card-title !my-0 text-2xl">Dwellife</h5>
            <p className='!my-0'><strong>Address</strong>: Plot: 5, Road: 87, Gulshan 2 <br /> Dhaka, Bangladesh</p>
          </div>
        </div>
        <FiMapPin className='w-8 h-8' />
    </div>
  );
};

export default Marker;
