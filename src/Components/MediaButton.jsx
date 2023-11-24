/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/Provider';
import useAxiosPublic from '../CustomHooks/useAxiosPublic';

const MediaButton = () => {
  const { handleGoogleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleSignin = () => {
    handleGoogleLogin()
      .then((userCredential) => {
        if (userCredential.user) {
          const userInfo = {
            name: userCredential?.user?.displayName,
            email: userCredential?.user?.email,
            photo: userCredential?.user?.photoURL,
          };
          axiosPublic
            .post('/users', userInfo)
            .then((res) => {
              if (res.data.insertedId !== null) {
                toast.success('Account created successfully');
              } else {
                toast.success('Logged in successfully');
              }
            })
            .catch((err) => console.log(err));
          navigate(location.state?.from || '/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        onClick={onGoogleSignin}
        type="button"
        className="btn btn-outline btn-secondary hover:btn-active hover:btn-neutral text-lg w-full mt-5"
      >
        <FcGoogle />
        Sign in with Google
      </button>
    </>
  );
};

export default MediaButton;
