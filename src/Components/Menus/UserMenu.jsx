/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { PiUserList, PiSpeakerHigh, PiUsersThree, PiMicrophone } from 'react-icons/pi';
import useAdmin from '../../CustomHooks/useAdmin';

const UserMenu = ({ sideMenu }) => {
  const [isAdmin] = useAdmin();
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
            to={'/dashboard/my-profile'}
          >
            <PiSpeakerHigh className="text-3xl" />
            {sideMenu ? '' : 'Announcements'}
          </NavLink>
        </>
      )}

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
    </nav>
  );
};

export default UserMenu;
