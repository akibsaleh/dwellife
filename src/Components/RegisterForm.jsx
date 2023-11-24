import { useLocation } from 'react-router-dom';
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/Provider';
import useAxiosPublic from '../CustomHooks/useAxiosPublic';
const RegisterForm = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleEmailPassSignup, setProfileInfo } = useContext(AuthContext);

  const handleOnSubmit = async (data) => {
    const { name, photo, email, password } = data;
    const userInfo = { name, photo, email };
    try {
      const userCredential = await handleEmailPassSignup(email, password);
      const profileUpdateStatus = await updateProfile(userCredential?.user?.auth?.currentUser, { displayName: name, photoURL: photo })
        .then(() => true)
        .catch((err) => err);
      const addUserToDB = await axiosPublic.post('/users', userInfo);
      if (addUserToDB.data.insertedId && profileUpdateStatus) {
        navigate(location?.state ? location?.state?.from?.pathname : '/');
        toast.success(`${name} signed up successfully`);
      }
      const newProfileInfo = {
        name: userCredential?.user?.auth?.currentUser?.displayName,
        photo: userCredential?.user?.auth?.currentUser?.photoURL,
      };
      setProfileInfo(newProfileInfo);
      if (!userCredential.user) toast.error(userCredential);
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/email-already-in-use).') toast.error('This email is already registered. Please try with another valid email.');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="grid gap-y-4">
        {/* Form Group */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm mb-2 "
          >
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              className={`input input-bordered input-secondary w-full max-w-full ${errors.name && '!input-error'}`}
              {...register('name', { required: 'Please enter your full name' })}
            />
          </div>
          {errors.name && <p className="text-sm mt-1 text-red-500">{errors.photoUrl?.message}</p>}
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <label
            htmlFor="photo"
            className="block text-sm mb-2 "
          >
            Profile Photo
          </label>
          <div className="relative">
            <input
              type="url"
              id="photo"
              className="input input-bordered input-secondary w-full max-w-full"
              {...register('photo', {
                required: false,
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: 'Please enter a valid URL',
                },
              })}
            />
          </div>
          {errors.photoUrl && <p className="text-sm mt-1 text-red-500">{errors.photoUrl?.message}</p>}
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm mb-2 "
          >
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              className={`input input-bordered input-secondary w-full max-w-full ${errors.email && '!input-error'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          {errors.email && (
            <p
              role="alert"
              className="text-sm text-red-500 mt-1"
            >
              {errors.email?.message}
            </p>
          )}
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="block text-sm mb-2 "
            >
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className={`input input-bordered input-secondary w-full max-w-full ${errors.password && '!input-error'}`}
              {...register('password', {
                required: 'Password is required',
                validate: {
                  atleast6Character: (value) => /^.{6,}$/.test(value) || 'Password must be at least 6 characters long',
                  atleast1Uppercase: (value) => /^(?=.*[A-Z]).+$/.test(value) || 'Password must be at least 1 uppercase',
                  atleast1lowercaser: (value) => /^(?=.*[a-z]).+$/.test(value) || 'Password must be at least 1 lowercase',
                  atleast1lspecial: (value) => /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+$/.test(value) || 'Password must be at least 1 special charecter',
                },
              })}
            />
          </div>
        </div>
        {/* End Form Group */}
        <button
          type="submit"
          className="btn btn-outline btn-secondary hover:btn-active hover:btn-neutral text-lg"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
