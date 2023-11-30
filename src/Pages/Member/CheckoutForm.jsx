/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';

const CheckOutForm = ({paymentDetails, rent}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const axiosSecure = useAxiosSecure();
  const [payMonth, setPayMonth] = useState('');

  useEffect(() => {
    if(paymentDetails?.month) {
        setPayMonth(JSON.parse(paymentDetails?.month).month);
    }
    const paymentDate = new Date().toLocaleDateString('en-GB');
    const paymentInfo = {
        apartment : paymentDetails?.apartment,
        rent : rent,
        paymentDate : paymentDate,
        email : paymentDetails?.email,
        month : payMonth,
    };
    axiosSecure.post('/api/create-payment-intent', paymentInfo)
    .then(res => setClientSecret(res.data.clientSecret))

  },[axiosSecure, payMonth, paymentDetails, rent]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if(card == null) {
        return;
    }

    const { error , paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
    });
    if (error) {
        setError(error.message);
      console.log('[error]', error);
    } else {
        setError('');
        console.log('[paymentMethod]', paymentMethod);
    }
  };

  console.log("🚀 ~ file: CheckoutForm.jsx:15 ~ CheckOutForm ~ payMonth:", payMonth)

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
      <div className='border border-neutral-content p-5 rounded-box w-full'>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
      </div>
      <button
        type="submit"
        disabled={!stripe || !clientSecret} className='btn btn-primary text-primary-content btn-md my-5 text-xl uppercase font-bold w-fit'
      >
        Pay Rent
      </button>
      <p className='text-red-500'>{error}</p>
    </form>
  );
};

export default CheckOutForm;
