import { Link } from 'react-router-dom';
import RegisterForm from '../Components/RegisterForm';
import MediaButton from '../Components/MediaButton';

const Register = () => {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/whCDWjN/anil-kumar-SXigdc-QPbd8-unsplash.webp)" }}
      className="flex flex-col min-h-screen w-full items-center justify-center bg-center bg-cover bg-no-repeat"
    >
      <div className='glass p-20 max-w-lg w-full rounded-box overflow-hidden'>
        <h1 className='!my-0'>Sign up</h1>
        <p className='leading-snug'>Please sign up for a new account.
        <br />Already have an account? <Link to={'/login'}>Sign In</Link> here.</p>
        <RegisterForm />
        <MediaButton />
      </div> 
    </div>
  );
};

export default Register;
