import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import UserMenu from './Menus/UserMenu';

const DashboardDrawer = () => {
  const [sideMenu, setSideMenu] = useState(true);
  const handleDrawer = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <motion.div
      initial={{ width: '320px' }}
      animate={{ width: sideMenu ? '60px' : '320px' }}
      className="w-80 bg-primary text-primary-content flex flex-col py-5 h-full overflow-hidden"
    >
      <motion.div
        className="w-80  px-5 flex justify-between items-center"
        initial={{ x: 0 }}
        animate={{ x: sideMenu ? -245 : 0 }}
      >
        <h2 className="text-3xl">Dashboard</h2>
        <label className="btn btn-ghost btn-circle swap swap-rotate">
          <input
            type="checkbox"
            value={sideMenu}
            onChange={handleDrawer}
          />
          <IoClose className="text-3xl swap-on fill-current" />
          <IoMenu className="text-3xl swap-off fill-current" />
        </label>
      </motion.div>
      <motion.div
        className="w-80 pt-20 flex justify-between items-center"
        initial={{ x: 0 }}
        animate={{ x: sideMenu ? -245 : 0 }}
      >
        <UserMenu sideMenu={sideMenu} />
      </motion.div>
    </motion.div>
  );
};

export default DashboardDrawer;
