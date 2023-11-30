import { motion } from 'framer-motion';
const AboutSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-5 lg:px-0">
      <div className="w-full lg:w-1/2 flex items-center gap-x-8">
        <div className="hidden md:block w-40 break-words !text-5xl font-black relative h-600 font-gabarito text-neutral-content mt-7 overflow-hidden">
          ABOUT <span className="h-5 block"></span> US
          <motion.span
            initial={{ y: 0 }}
            whileInView={{ y: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-base-100 absolute top-0 left-0 w-full h-full"
          ></motion.span>
        </div>
        <div>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent font-black text-2xl"
          >
            Harmony Unveiled
          </motion.h4>
          <motion.h5
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-semibold text-5xl"
          >
            Discover the Symphony <br /> of Living in Every Detail
          </motion.h5>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Step into the enchanting world of Dwellife, where each brick and beam contributes to a melody of harmonious living. Our spaces are not just structures; they are orchestrations of comfort, elegance, and a shared sense of belonging. Join
            the symphony, where every resident is a note in the composition of a vibrant community. Unveil the harmony of living at Dwellife.
          </motion.p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col jus items-center relative">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src="https://source.unsplash.com/tVER-9XAaaI/800x800"
          className="mask mask-hexagon w-full max-w-xl"
        />
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src="https://i.ibb.co/S77k5Qg/about-2.webp"
          className="mask mask-hexagon w-40 absolute top-0 left-32 "
        />
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src="https://i.ibb.co/jH84mLw/about-3.webp"
          className="mask mask-hexagon w-52 absolute bottom-0 right-32 "
        />
      </div>
    </div>
  );
};

export default AboutSection;
