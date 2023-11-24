import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/apartments'}>Apartments</Link>
      </li>
    </>
  );
};

export default Menu;
