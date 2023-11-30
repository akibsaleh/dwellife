/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { AuthContext } from '../../Providers/Provider';
import { toast } from 'react-toastify';

const CheckOutForm = ({ paymentDetails, rent }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.post('/api/create-payment-intent', {rent : rent}).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, rent]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
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

    // Confirm Payment

    const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmationError) {
      console.log('Confirmation Error');
      if (confirmationError.code === 'payment_intent_authentication_failure') {
        setError('Your card was declined. Please try again.');
      }
    } else {
      console.log('Payment Intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        setError('');
        setTransactionId(paymentIntent.id);
        toast.success('Payment Successful');

        const paymentDate = new Date().toLocaleDateString('en-GB');
        const paymentInfo = {
          apartment: paymentDetails?.apartment,
          rent: paymentIntent.amount / 100,
          paymentDate: paymentDate,
          email: paymentDetails?.email || user?.email,
          month: paymentDetails?.month,
          transactionId: paymentIntent.id,
        };

        const payHistoryRes = await axiosSecure.post('/api/payment-history', paymentInfo);
        console.log(payHistoryRes);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center"
    >
      <div className="border border-neutral-content p-5 rounded-box w-full">
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
        disabled={!stripe || !clientSecret}
        className="btn btn-primary text-primary-content btn-md my-5 text-xl uppercase font-bold w-fit"
      >
        Pay Rent
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && <p>Transaction Id: {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
