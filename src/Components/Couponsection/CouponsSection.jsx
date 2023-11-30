/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { useQuery } from '@tanstack/react-query';
import CouponCard from './CouponCard';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Provider';

const CouponsSection = () => {
  const { loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    error,
    data: coupons = [],
  } = useQuery({
    queryKey: ['available-coupons'],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get('/api/available-coupons');
      return response.data;
    },
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="w-full grid grid-cols-2 py-20">
      <div
        className="flex w-full justify-center items-center bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(https://i.ibb.co/JKB4jHK/coupon-bg.png)' }}
      >
        <div className="w-full text-center min-h-[500px] flex flex-col justify-center items-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase !my-0  tracking-wider"
          >
            Coupons
          </motion.h1>
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="!my-0"
          >
            Exclusive discounts available for members
          </motion.h4>
        </div>
      </div>
      <div className="w-full">
        <Marquee pauseOnHover={'true'}>
          {coupons?.map((coupon) => (
            <CouponCard
              key={coupon?._id}
              coupon={coupon}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CouponsSection;
