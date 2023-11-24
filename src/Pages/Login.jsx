import { Link } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import MediaButton from '../Components/MediaButton';

const Login = () => {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/jrrNLC4/sebastian-svenson-Lpby-DENb-QQg-unsplash.webp)" }}
      className="flex flex-col min-h-screen w-full items-center justify-center bg-center bg-cover bg-no-repeat"
    >
      <div className='glass p-20 max-w-lg w-full rounded-box overflow-hidden'>
        <h1 className='!my-0'>Sign In</h1>
        <p className='leading-snug'>Please sign in to your account.
        <br />Don&apos;t have an account? <Link to={'/signup'}>Sign up</Link> here.</p>
        <LoginForm />
        <MediaButton />
      </div> 
    </div>
  );
};

export default Login;
