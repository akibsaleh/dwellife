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
      <button
        className="btn btn-outline join-item uppercase ml-5"
        onClick={handleOnLogout}
      >
        <AiOutlineUsergroupDelete className="text-lg" />
        Sign Out
      </button>
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
