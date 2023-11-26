import SectionTitle from '../Banner/sectionTitle';
import AddressMap from './AddressMap';
import { BsTelephoneInbound, BsEnvelopeAt, BsGlobe2 } from 'react-icons/bs';
import { TbMapPin2 } from 'react-icons/tb';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <div className="w-full flex columns-2 items-center justify-center gap-10 mt-10 mb-16">
      <motion.div
        className="w-full"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <AddressMap />
      </motion.div>
      <div className="w-full -mt-16">
        <SectionTitle
          title={'Our Location'}
          subtitle={'Explore and Navigate the Landscape'}
          align={'left'}
        ></SectionTitle>
        <ul className="list-none [&_li_a]:flex [&_li_a]:items-center [&_li_a]:gap-3 !px-0">
          <motion.li
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="tel:+8801700000000"
              className="!no-underline text-base-content"
            >
              <span className="btn btn-outline btn-circle btn-neutral">
                <BsTelephoneInbound className="text-xl" />
              </span>
              +8801700000000
            </a>
          </motion.li>
          <motion.li
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="mailto:info@dwellife.com"
              className="!no-underline text-base-content"
            >
              <span className="btn btn-outline btn-circle btn-neutral">
                <BsEnvelopeAt className="text-xl" />
              </span>
              info@dwellife.com
            </a>
          </motion.li>
          <motion.li
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="dwellife.com"
              target="_blank"
              className="!no-underline text-base-content"
            >
              <span className="btn btn-outline btn-circle btn-neutral">
                <BsGlobe2 className="text-xl" />
              </span>
              dwellife.com
            </a>
          </motion.li>
          <motion.li
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex item gap-3 text-base-content"
          >
            <span className="btn btn-outline btn-circle btn-neutral">
              <TbMapPin2 className="text-xl" />
            </span>
            Plot: 5, Road: 87, Gulshan 2, Dhaka, Bangladesh
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
