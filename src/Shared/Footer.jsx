import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
      <aside className='w-full max-w-1440 mx-auto flex justify-between items-center'>
        <p>Copyright © 2023 - All right reserved by DwelLife</p>
        <nav className='inline-flex text-xl gap-3 items-center'>
          <h4 className='!my-0 text-neutral-content'>Find us on</h4>
          <Link to={'#'}><BsFacebook /></Link>
          <Link to={'#'}><BsInstagram /></Link>
          <Link to={'#'}><BsTwitterX /></Link>
          <Link to={'#'}><BsLinkedin /></Link>
        </nav>
      </aside>
    </footer>
  );
};

export default Footer;
