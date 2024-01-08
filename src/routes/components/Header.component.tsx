import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

interface IProp {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setOpen }: IProp) => {
  const toggle = (mode: "light" | "dark") => {
    const html = document.querySelector("html");

    if (html) html.setAttribute("data-theme", mode);
  };

  const name = useSelector((state : RootState) => state.auth.name )

  return (
    <nav className='text-primary bg-background px-5 py-5 z-50 '>
      <div className='col-span-2 w-full inline-flex items-center justify-between gap-10'>
        <Link to='/' className='hidden md:inline-flex items-center gap-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9' />
            <path d='M9 22V12h6v10M2 10.6L12 2l10 8.6' />
          </svg>
          <h1 className='capitalize font-extrabold tracking-wider text-xl md:text-4xl'>
            welcome! {name}
          </h1>
        </Link>
        <button
          type='button'
          className='block md:hidden'
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='23'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M17 9.5H3M21 4.5H3M21 14.5H3M17 19.5H3' />
          </svg>
        </button>

        <div className='inline-flex items-center justify-center gap-5 px-3'>
          <div className='inline-flex items-center justify-center my-5'>
            <div className='bg-white bg-opacity-50 backdrop-blur-md rounded-md px-2 py-1 inline-flex items-center justify-between gap-5'>
              <button
                title='list view'
                type='button'
                className='bg-white bg-opacity-30 p-1 shadow-md rounded-sm transition-all duration-150'
                onClick={() => toggle("dark")}
              >
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  viewBox='0 0 49.739 49.739'
                >
                  <path
                    d='M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
       c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
       c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
       C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
       c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
       c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z'
                  />
                </svg>
              </button>
              <button
                title=''
                type='button'
                className='p-1 shadow-md rounded-sm transition-all duration-150'
                onClick={() => toggle("light")}
              >
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  width="20"
                  viewBox='0 0 496 496'
                  className="text-background"
                >
                  <rect
                    x='152.994'
                    y='58.921'
                    transform='matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)'
                    width='40.001'
                    height='16'
                  />
                  <rect
                    x='46.9'
                    y='164.979'
                    transform='matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)'
                    width='40.001'
                    height='16'
                  />
                  <rect
                    x='46.947'
                    y='315.048'
                    transform='matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)'
                    width='40.001'
                    height='16'
                  />

                  <rect
                    x='164.966'
                    y='409.112'
                    transform='matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)'
                    width='16'
                    height='39.999'
                  />

                  <rect
                    x='303.031'
                    y='421.036'
                    transform='matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)'
                    width='40.001'
                    height='16'
                  />

                  <rect
                    x='409.088'
                    y='315.018'
                    transform='matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)'
                    width='40.001'
                    height='16'
                  />

                  <rect
                    x='409.054'
                    y='165.011'
                    transform='matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)'
                    width='40.001'
                    height='16'
                  />
                  <rect
                    x='315.001'
                    y='46.895'
                    transform='matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)'
                    width='16'
                    height='39.999'
                  />
                  <path
                    d='M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
				c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z'
                  />
                  <rect x='240' width='16' height='72' />
                  <rect
                    x='62.097'
                    y='90.096'
                    transform='matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)'
                    width='71.999'
                    height='16'
                  />
                  <rect y='240' width='72' height='16' />

                  <rect
                    x='90.091'
                    y='361.915'
                    transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)'
                    width='16'
                    height='71.999'
                  />
                  <rect x='240' y='424' width='16' height='72' />

                  <rect
                    x='361.881'
                    y='389.915'
                    transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)'
                    width='71.999'
                    height='16'
                  />
                  <rect x='424' y='240' width='72' height='16' />
                  <rect
                    x='389.911'
                    y='62.091'
                    transform='matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)'
                    width='16'
                    height='71.999'
                  />
                </svg>
              </button>
            </div>
          </div>
          <Link
            to='/admin/member'
            className='w-10 h-10 rounded-full bg-assent-2  mx-auto inline-flex items-center justify-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='23'
              height='23'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-primary text-center'
            >
              <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
