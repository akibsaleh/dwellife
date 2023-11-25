import { useContext } from 'react';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Provider';
import { toast } from 'react-toastify';

const AccessButtons = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const handleOnLogout = () => {
    handleLogout()
      .then(() => toast.success('Logged out successfully'))
      .catch((err) => console.log(err));
  };
  if (user?.email)
    return (
      <>
        <div className="dropdown dropdown-end ml-3 z-50">
          <label tabIndex={0} className="btn btn-outline btn-circle m-1">
            <img src={user?.photoURL || 'https://avatar.iran.liara.run/public/43'} alt={user?.displayName} className='w-10 h-10 rounded-full' />
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 gap-y-1 border-primary/20 border">
            <li className='font-semibold text-lg'><Link to={'/my-profile'}>{user?.displayName}</Link></li>
            <li className='font-semibold text-lg'><Link to={'/dashboard'}>Dashboard</Link></li>
            <li onClick={handleOnLogout} className='btn btn-primary btn-outline content-center flex-row font-semibold text-lg'><span><AiOutlineUsergroupDelete className="text-lg" /> Sign out</span></li>
          </ul>
        </div>
        <button
          className="btn btn-outline uppercase ml-2"
          onClick={handleOnLogout}
        >
          <AiOutlineUsergroupDelete className="text-2xl" />
        </button>
      </>
    );

  return (
    <div className="join ml-5">
      <Link
        className="btn btn-outline join-item uppercase"
        to={'/login'}
      >
        <AiOutlineUserSwitch className="text-2xl" />
      </Link>
      <Link
        className="btn btn-outline join-item uppercase"
        to={'/signup'}
      >
        <AiOutlineUserAdd className="text-2xl" />
      </Link>
    </div>
  );
};

export default AccessButtons;
