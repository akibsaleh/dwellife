/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const BannerContent = ({prevSlide, nextSlide, headline, subhead, text, img, link}) => {
  return (
    <div className="flex flex-col justify-start items-start relative w-full h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: 'easeInOut' }}
        className="relative w-screen max-w-full flex flex-col justify-end h-[300px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl pt-10 pl-20 pb-5"
      >
        <h2 className="w-full !my-0 !text-6xl max-w-xl font-black opacity-85">
          {headline}
        </h2>
        <h3 className='w-full !my-0 !text-4xl max-w-xl ml-2 font-'>
           {subhead} 
        </h3>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
        className="!my-0 pt-5 px-20 max-w-2xl text-lg font-semibold"
      >
        {text}
      </motion.p>
      <div className='flex items-center gap-x-2 ml-20 mt-5'>
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
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease: 'easeInOut' }}
        className="mask mask-hexagon-2 absolute top-0 right-20 !my-0 z-20 h-[600px] w-[600px]"
        src={img}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
        className="mask mask-hexagon-2 absolute top-0 right-16 !my-0 h-[600px] z-10 w-[600px] bg-secondary"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeInOut' }}
        className="mask mask-hexagon-2 absolute top-0 right-12 !my-0 h-[600px] z-0 w-[600px] bg-accent"
      ></motion.div>
    </div>
  );
};

export default BannerContent;
