/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align }) => {
  return (
    <div className={`max-w-1440 w-full mt-16 flex flex-col items-${align === 'left' ? 'start' : 'center'}`}>
      <motion.h3
        initial={{ scaleX: 0, opacity: 0, y: -10 }}
        whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-box !mt-0 !mb-5 capitalize py-2 px-6 bg-primary !text-lg !text-primary-content inline-block w-fit"
      >
        {title}
      </motion.h3>
      <motion.h5 className="text-4xl font-bold !my-0 capitalize bg-base relative inline-block w-fit overflow-hidden">
        {subtitle}{' '}
        <motion.span
          initial={{ x: 0 }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-base-100 block w-full h-full absolute top-0 left-0"
        ></motion.span>
      </motion.h5>
    </div>
  );
};

export default SectionTitle;
