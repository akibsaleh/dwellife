import { motion } from 'framer-motion';
const Features = () => {
  return (
    <div className="grid grid-cols-3 max-w-screen-xl mx-auto w-full h-auto mt-10 mb-20">
      <div className="w-full flex flex-col justify-end">
        <motion.img initial={{ scale: 0.5, opacity: 0, y:50 }} whileInView={{ scale: 1, opacity: 1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          src='https://i.ibb.co/qkrFr4L/1.webp'
          className="w-64 place-self-center z-10 mask mask-squircle"
        />
        <div className="bg-neutral h-[240px] w-full flex text-center items-end z-0 -mt-40 rounded-s-3xl">
          <motion.p
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="w-full font-bold text-4xl !mb-11 text-neutral-content"
          >
            Elegant Comfort
          </motion.p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end">
        <motion.img initial={{ scale: 0.5, opacity: 0, y:50 }} whileInView={{ scale: 1, opacity: 1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          src='https://i.ibb.co/hyLH9Xy/2.webp'
          className="w-64 place-self-center z-10 mask mask-squircle"
        />
        <div className="bg-neutral h-[240px] w-full flex items-end z-0 -mt-40 text-center">
          <motion.p
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full font-bold text-4xl !mb-11 text-neutral-content"
          >
            Intelligent Design
          </motion.p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end">
        <motion.img initial={{ scale: 0.5, opacity: 0, y:50 }} whileInView={{ scale: 1, opacity: 1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}
          src='https://i.ibb.co/dg4Z0Ts/3.webp'
          className="w-64 place-self-center z-10 mask mask-squircle"
        />
        <div className="bg-neutral h-[240px] w-full flex items-end z-0 -mt-40 text-center rounded-e-3xl">
          <motion.p
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full font-bold text-4xl !mb-11 text-neutral-content"
          >
            Peaceful Retreat
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Features;
