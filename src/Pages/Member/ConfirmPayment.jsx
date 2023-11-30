/* eslint-disable no-unused-vars */
import { useLocation } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckoutForm';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const ConfirmPayment = () => {
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [rent, setRent] = useState(parseInt(location.state.rent));
  const [disableCoupon, setDisableCoupon] = useState(false);

  useEffect(() => {
    setPaymentDetails(location.state);
  }, [location.state, paymentDetails]);

  const handleCoupon = async(e) => {
    e.preventDefault();
    const coupon = e.target.coupon.value;
    const response = await axiosSecure.get(`/api/coupons/${coupon}`);
    const discountedRent = parseInt(rent) - (parseInt(rent)/100 * response.data.percentage);
    setRent(discountedRent);
    setDisableCoupon(true);
  };

  return (
    <div className="flex flex-col grow h-full items-center w-full pb-20">
      <PageTitle
        title={'Confirm Payment'}
        subtitle={'Fill out the form to confirm payment'}
      />
      <div className="w-full flex flex-col items-center">
        <div className="max-w-xl w-full bg-base-100 p-10 shadow-lg">
          <div className="w-full pb-5">
            <p className='pb-3'>Do you have Coupon? Apply here</p>
            <form
              onSubmit={handleCoupon}
              className="w-full flex gap-x-5 justify-center items-center"
            >
                <input type="text" placeholder="Type here" className="input input-bordered w-full" id='coupon' name='coupon' />
                <button type="submit" className='btn btn-outline btn-secondary text-secondary-content text-xl' disabled={disableCoupon}>Apply Coupon</button>
            </form>
          </div>
          <h3 className="text-2xl text-neutral-content pb-5">Rent Information</h3>
          <div className="w-full flex flex-col items-center divide-y divide-base-300 border border-base-300 rounded-box mb-10">
            <div className="w-full flex justify-between items-center py-5 px-5">
              <p className="text-xl font-bold">Month</p>
              <p className="text-xl font-bold">Amount</p>
            </div>
            <div className="w-full flex justify-between items-center py-5 px-5">
              <p className="text-xl font-semibold">{paymentDetails?.month}</p>
              <p className="text-xl font-semibold">$ {rent}</p>
            </div>
          </div>
          <Elements stripe={stripePromise}>
            <CheckOutForm paymentDetails={paymentDetails} rent={rent} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
