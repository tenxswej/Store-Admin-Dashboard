import Activity from "../../assets/svg/activity";
import Admin from "../../assets/svg/admin";
import Message from "../../assets/svg/message";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <aside className='hidden md:flex fixed left-0 flex-col md:min-w-[180px] md:max-w-[180px] h-screen hover:w-64 bg-assent-1 text-white transition-all duration-300 border-none rounded-md'>
      <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
        <ul className='flex flex-col py-4 space-y-1'>
          <li className='px-5 hidden md:block'>
            <div className='flex flex-row items-center h-8'>
              <div className='text-sm font-light tracking-wide uppercase'>
                management
              </div>
            </div>
          </li>
          <li>
            <Link
              to='/'
              className={`${
                pathname === "/"
                  ? "rounded-l-lg bg-background text-primary border-l-4 border-transparent"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200 `}
            >
              <span className='inline-flex justify-center items-center ml-4'>
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
                  <path d='M3 3v18h18' />
                  <path d='M18.7 8l-5.1 5.2-2.8-2.7L7 14.3' />
                </svg>
              </span>
              <span className='ml-2 text-sm tracking-wide truncate'>
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/orders'
              className={` ${
                pathname === "/orders"
                  ? "rounded-l-lg bg-background text-text-base dark:text-primary border-l-4 border-transparent"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200`}
            >
              <span className='inline-flex justify-center items-center ml-4'>
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
                  <path d='M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5' />
                  <path d='M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z' />
                </svg>
              </span>
              <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                Orders
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/products'
              className={` ${
                pathname === "/products" || pathname === "/products/addproduct"
                  ? "rounded-l-lg text-text-base dark:text-primary border-l-4 border-transparent bg-background"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200`}
            >
              <span className='inline-flex justify-center items-center ml-4'>
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
                  <path d='M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0' />
                </svg>
              </span>
              <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                products
              </span>
            </Link>
          </li>

          <li>
            <Link
              to='reports'
              className={` ${
                pathname === "/reports"
                  ? "rounded-l-lg bg-background text-text-base dark:text-primary border-l-4 border-transparent "
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200`}
            >
              <span className='inline-flex justify-center items-center ml-4'>
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
                  <path d='M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z' />
                  <path d='M14 3v5h5M16 13H8M16 17H8M10 9H8' />
                </svg>
              </span>
              <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                reports
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='activities'
              className={` ${
                pathname === "/activities"
                  ? "rounded-l-lg bg-background text-text-base dark:text-primary border-l-4 border-transparent"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200 `}
            >
              <span className='inline-flex justify-center items-center ml-4'>
                <Activity />
              </span>
              <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                activities log
              </span>
            </Link>
          </li>
          <li className='px-5 hidden md:block'>
            <div className='flex flex-row items-center mt-5 h-8'>
              <div className='text-sm font-light tracking-wide uppercase'>
                crm
              </div>
            </div>
          </li>
          <li>
            <Link
              to='/customers'
              className={` ${
                pathname === "/customers"
                  ? "rounded-l-lg bg-background text-text-base dark:text-primary"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200 border-l-4 border-transparent `}
            >
              <span className='inline-flex justify-center items-center ml-4'>
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
                  <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                  <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                </svg>
              </span>
              <span className='ml-2 text-sm tracking-wide truncate'>
                Customers
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/inbox'
              className={` ${
                pathname === "/inbox"
                  ? "rounded-l-lg bg-background text-text-base dark:text-primary"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200 border-l-4 border-transparent `}
            >
              <span className='inline-flex justify-center items-center ml-4'>
                <Message />
              </span>
              <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                inbox
              </span>
            </Link>
          </li>
          <li className='px-5 hidden md:block'>
            <div className='flex flex-row items-center mt-5 h-8'>
              <div className='text-sm font-light tracking-wide  uppercase'>
                Administration
              </div>
            </div>
          </li>
          <li>
            <Link
              to='/admin'
              className={` ${
                pathname === "/admin"
                  ? "rounded-l-lg bg-background text-text-base dark:text-primary"
                  : ""
              } relative flex flex-row items-center h-11 focus:outline-none hover:bg-assent-2 hover:text-text-base-2 hover:scale-110 hover:tracking-widest duration-200 border-l-4 border-transparent `}
            >
              <span className='inline-flex justify-center items-center ml-4'>
                <Admin />
              </span>
              <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                admin
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
