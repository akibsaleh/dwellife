/* eslint-disable react/prop-types */
import { useState } from 'react';
import { RxCopy } from "react-icons/rx";
const CouponCard = ({ coupon }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(coupon?.code);
        setCopied(true);
    }
  return (
    <div className="card w-80 bg-base-300 mx-5">
      <div className="card-body">
        <div className="w-full border-2 border-accent p-5 rounded-box border-dashed">
          <h2 className="card-title justify-center !my-0 !text-xl">
            <span className='bg-primary text-white p-5 rounded-full w-28 h-28 flex justify-center items-center'><span className="text-6xl font-black">{coupon?.percentage}</span><span className='-mb-5'>%</span></span>
          </h2>
          <p className="!my-3 text-xl font-bold bg-secondary text-secondary-content py-2 text-center rounded-badge">{coupon?.code}</p>
          <p className="!my-0 text-base pb-4 text-center">{coupon?.desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-accent text-accent-content text-lg" onClick={handleCopy}>{copied ? 'copied' : <RxCopy />}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
