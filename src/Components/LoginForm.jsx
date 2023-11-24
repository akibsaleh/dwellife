import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/Provider';
const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleEmailPassSignin } = useContext(AuthContext);

  const handleOnSubmit = (data) => {
    const { email, password } = data;
    handleEmailPassSignin(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          navigate(location?.state ? location?.state?.from?.pathname : '/');
          toast.success('Logged in successfully');
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="grid gap-y-4">
        {/* Form Group */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm mb-2"
          >
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              className={`input input-bordered input-secondary w-full max-w-full ${
                errors.email && '!input-error'
              }`}
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
              className="block text-sm mb-2"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className={`input input-bordered input-secondary w-full max-w-full ${
                errors.password && '!input-error'
              }`}
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
          {errors.password && (
            <p
              role="alert"
              className="text-sm text-red-500 mt-1"
            >
              {errors.password?.message}
            </p>
          )}
        </div>
        {/* End Form Group */}
        <button
          type="submit"
          className="btn btn-outline btn-secondary hover:btn-active hover:btn-neutral text-lg"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
