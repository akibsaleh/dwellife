/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { PiUserList, PiSpeakerHigh, PiUsersThree, PiMicrophone, PiTicket } from 'react-icons/pi';
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsCreditCard,BsClockHistory  } from "react-icons/bs";


import useAdmin from '../../CustomHooks/useAdmin';
import useMember from '../../CustomHooks/useMember';

const UserMenu = ({ sideMenu }) => {
  const [isAdmin] = useAdmin();
  const [isMember] = useMember();
  return (
    <nav className="w-full flex flex-col">
      <NavLink
        className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
        to={'/dashboard/my-profile'}
      >
        <PiUserList className="text-3xl" />
        {sideMenu ? '' : 'My Profile'}
      </NavLink>
      {!isAdmin && (
        <>
          <hr className="border border-base-300/30 inline-block my-2" />
          <NavLink
            className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
            to={'/dashboard/announcements'}
          >
            <PiSpeakerHigh className="text-3xl" />
            {sideMenu ? '' : 'Announcements'}
          </NavLink>
        </>
      )}
      {/* Member Exclusive Navigators  */}
      {isMember && (
        <>
          <hr className="border border-base-300/30 inline-block my-2" />
          <NavLink
            className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
            to={'/dashboard/make-payment'}
          >
            <BsCreditCard className="text-3xl" />
            {sideMenu ? '' : 'Make Payment'}
          </NavLink>
        </>
      )}
      {isMember && (
        <>
          <hr className="border border-base-300/30 inline-block my-2" />
          <NavLink
            className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
            to={'/dashboard/payment-history'}
          >
            <BsClockHistory className="text-3xl" />
            {sideMenu ? '' : 'Payment History'}
          </NavLink>
        </>
      )}
       {/* Admin Exclusive Navigators  */}
      {isAdmin && (
        <>
          <hr className="border border-base-300/30 inline-block my-2" />
          <NavLink
            className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
            to={'/dashboard/manage-members'}
          >
            <PiUsersThree className="text-3xl" />
            {sideMenu ? '' : 'Manage Members'}
          </NavLink>
        </>
      )}
      {isAdmin && (
        <>
        <hr className="border border-base-300/30 inline-block my-2" />
          <NavLink
            className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
            to={'/dashboard/make-announcement'}
          >
            <PiMicrophone className="text-3xl" />
            {sideMenu ? '' : 'Make Announcement'}
          </NavLink>
        </>
      )}
      {isAdmin && (
        <>
        <hr className="border border-base-300/30 inline-block my-2" />
          <NavLink
            className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
            to={'/dashboard/manage-agreements'}
          >
            <IoDocumentTextOutline className="text-3xl" />
            {sideMenu ? '' : 'Manage Agreements'}
          </NavLink>
        </>
      )}
      {isAdmin && (
        <>
        <hr className="border border-base-300/30 inline-block my-2" />
          <NavLink
            className={`text-2xl btn btn-ghost flex justify-${sideMenu ? 'end' : 'start'} items-center ${sideMenu ? 'pl-5 pr-7' : 'gap-x-5 px-5'}`}
            to={'/dashboard/manage-coupons'}
          >
            <PiTicket className="text-3xl" />
            {sideMenu ? '' : 'Manage Coupons'}
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default UserMenu;
