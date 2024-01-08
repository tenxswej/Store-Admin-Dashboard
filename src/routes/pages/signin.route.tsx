import { useState, FormEvent, useEffect, useRef, ElementRef } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoginMutation } from "../../services/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../services/auth/authSlice";
import { AppDispatch } from "../../services/store";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const focus = useRef<ElementRef<"input">>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    focus.current?.focus();
  }, []);

  const [message, setMessage] = useState({
    message: "Welcome Back.",
    status: "normal",
  });

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  const handleInput = async (e: FormEvent) => {
    e.preventDefault();

    try {
      interface ICredentials {
        token: string;
        name: string;
        roles: number[];
      }
      const credentials = await login({
        name: "joebiden",
        email: "joe@biden.com",
        password: "1234@Admin",
      });

      console.log(credentials);
      if (credentials) {
        const data = credentials.data;

        dispatch(
          setCredentials({
            token: data.token,
            name: data.user.name,
            roles: data.user.roles,
          })
        );

        navigate("/");
      }
    } catch (e: any) {
      setMessage({ message: "An error occurred ", status: "error" });
    }
  };

  return (
    <div className='h-screen grid grid-col-1 md:grid-cols-2'>
      <div
        className='hidden md:grid place-content-center w-full bg-transparent bg-[url(https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=600)]
          bg-no-repeat bg-cover relative overflow-hidden'
      >
        <div className='absolute right-0 top-0 w-[100vh] h-full rotate-90 '>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
            className='relative block hw-full'
          >
            <path d='M1200 120L0 16.48 0 0 1200 0 1200 120z' fill='#000'></path>
          </svg>
        </div>
        <div className='w-full mx-auto flex flex-col items-center justify-center px-20  space-y-6 bg-white h-full bg-opacity-25'>
          <div>
            <h1 className='text-gray-900 font-bold text-4xl font-sans uppercase'>
              Admin dashboard
            </h1>
            <p className='text-gray-600 mt-1 self-center'>Good morning!</p>
            <div className='flex justify-center lg:justify-start mt-6'>
              <Link
                to='/auth'
                className='hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center items-center dark:bg-black space-y-8'>
        <div className='w-full px-8 md:px-32 lg:px-24 max-w-7xl mx-auto'>
          <form
            className='bg-white dark:bg-gray-900 rounded-md shadow-2xl p-5'
            onSubmit={handleInput}
          >
            <h1 className='text-gray-800 dark:text-white font-bold text-2xl mb-1 capitalize'>
              Hello team!
            </h1>
            <p
              className={`text-sm font-normal  mb-8 ${
                message.status !== "error"
                  ? "text-gray-600 dark:text-gray-300"
                  : "text-red-700"
              }`}
            >
              {message.message}
            </p>
            <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                />
              </svg>
              <input
                ref={focus}
                id='name'
                className='bg-transparent pl-2 w-full outline-none border-none dark:text-white'
                type='text'
                name='name'
                placeholder='username'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                />
              </svg>
              <input
                id='email'
                className='bg-transparent pl-2 w-full outline-none border-none dark:text-white'
                type='email'
                name='email'
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex items-center border-2 mb-12 py-2 px-3 rounded-2xl '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                className='bg-transparent pl-2 w-full outline-none border-none dark:text-white'
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 capitalize'
            >
              {isLoading ? <ClipLoader color='#fff' /> : "Sign In"}
            </button>
            <div className='flex justify-between mt-4'>
              <span className='text-sm ml-2 dark:text-white hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all'>
                Forgot Password ?
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
