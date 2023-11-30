/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const BannerContent = ({prevSlide, nextSlide, headline, subhead, text, img, link}) => {
  return (
<div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] relative">
      <div className='h-[300px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl col-span-3 absolute top-0 w-full'></div>
      <div className='flex flex-col items-center lg:items-start order-last lg:order-first w-full  pt-[400px] md:pt-[600px] lg:pt-0'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: 'easeInOut' }}
          className="relative w-screen max-w-full flex flex-col justify-end items-center lg:items-start lg:h-[300px] pt-10 lg:pl-20 pb-5"
        >
          <h2 className="w-full !my-0 !text-6xl max-w-xl font-black opacity-85 text-center lg:text-left">
            {headline}
          </h2>
          <h3 className='w-full !my-0 !text-4xl max-w-xl lg:ml-2 text-center lg:text-left'>
             {subhead}
          </h3>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
          className="!my-0 lg:pt-5 px-5 md:px-20 max-w-2xl text-lg font-semibold text-center lg:text-left"
        >
          {text}
        </motion.p>
        <div className='flex items-center gap-x-2 lg:ml-20 mt-5'>
            <Link to={link} className='mr-5'>
                <motion.button
                  initial={{ opacity: 0, scale: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: 'easeInOut' }}
                  className="btn btn-lg btn-outline btn-accent "
                >
                  All Apartments
                </motion.button>
            </Link>
            <motion.button initial={{ opacity:0, scale:0}} animate={{ opacity: 1, scale: 1}} transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }} className='btn btn-circle btn-neutral text-xl' onClick={prevSlide}><HiArrowSmallLeft /></motion.button>
            <motion.button initial={{ opacity:0, scale: 0}} animate={{ opacity: 1, scale: 1}} transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }} className='btn btn-circle btn-neutral text-xl' onClick={nextSlide}><HiArrowSmallRight /></motion.button>
        </div>
      </div>
      <div className='relative order-first lg:order-last'>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: 'easeInOut' }}
          className="mask mask-hexagon-2 absolute top-0 right-6 md:right-20 !my-0 !z-20 h-[400px] md:h-[600px] w-[400px] md:w-[600px]"
          src={img}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
          className="mask mask-hexagon-2 absolute top-0 right-4 md:right-16 !my-0 h-[400px] md:h-[600px] z-10 w-[400px] md:w-[600px] bg-secondary"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeInOut' }}
          className="mask mask-hexagon-2 absolute top-0 right-2 md:right-12 !my-0 h-[400px] md:h-[600px] z-0 w-[400px] md:w-[600px] bg-accent"
        ></motion.div>
      </div>
    </div>
  );
};

export default BannerContent;
