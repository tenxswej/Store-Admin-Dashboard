import Maximize from "../../assets/svg/maximize";
import { AreaChart } from "../components/charts/AreaChart";
import { HorizontalChart } from "../components/charts/HorizontalChart";
import { PieChart } from "../components/charts/PieChart";
import { VerticalBar } from "../components/charts/VerticalBar";
import Up from "../../assets/svg/up";

const Dashboard = () => {
  return (
    <main className='space-y-5'>
      <section>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='bg-assent-1 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-card-assent-1 text-white font-medium group'>
            <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:bg-green-500 group-hover:scale-125'>
              <svg
                width='30'
                height='30'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='stroke-current text-blue-800 dark:text-gray-800 group-hover:text-white transform transition-transform duration-500 ease-in-out'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                ></path>
              </svg>
            </div>
            <div className='hidden md:inline-flex items-center gap-2 '>
              <Up />
              <span className='dark:text-green-500 font-thin '>23%</span>
            </div>
            <div className='text-right capitalize'>
              <p className='text-lg md:text-2xl'>157</p>
              <p>Visitors</p>
            </div>
          </div>
          <div className='bg-assent-1 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-card-assent-1 text-white font-medium group'>
            <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:bg-green-500 group-hover:scale-125'>
              <svg
                width='30'
                height='30'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='stroke-current text-blue-800 dark:text-gray-800 group-hover:text-white transform transition-transform duration-500 ease-in-out'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                ></path>
              </svg>
            </div>
            <div className='hidden md:inline-flex items-center gap-2 '>
              <Up />
              <span className='dark:text-green-500 font-thin '>3%</span>
            </div>
            <div className='text-right capitalize'>
              <p className='text-lg md:text-2xl'>257</p>
              <p>Orders</p>
            </div>
          </div>
          <div className='bg-assent-1 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-card-assent-1 text-white font-medium group'>
            <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:-rotate-45 group-hover:bg-green-500'>
              <svg
                width='30'
                height='30'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='stroke-current text-blue-800 dark:text-gray-800 group-hover:text-white transform transition-transform duration-500 ease-in-out'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                ></path>
              </svg>
            </div>
            <div className='hidden md:inline-flex items-center gap-2 '>
              <Up />
              <span className='dark:text-green-500 font-thin '>12%</span>
            </div>
            <div className='text-right capitalize'>
              <p className='text-lg sm:text-xl md:text-2xl'>$2,414</p>
              <p>Sales</p>
            </div>
          </div>
          <div className='bg-assent-1 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-card-assent-1 text-white font-medium group'>
            <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:bg-green-500 group-hover:scale-125'>
              <svg
                width='30'
                height='30'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='stroke-current text-blue-800 dark:text-gray-800 group-hover:text-white transform transition-transform duration-500 ease-in-out'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
            </div>
            <div className='hidden md:inline-flex items-center gap-2 '>
              <Up />
              <span className='dark:text-green-500 font-thin '>7%</span>
            </div>
            <div className='text-right capitalize'>
              <p className='text-lg md:text-2xl'>$75,257</p>
              <p>profit</p>
            </div>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16'>
        <div className='relative space-y-5 bg-gradient-to-r from-from to-to bg-opacity-30 rounded-xl duration-200 transition-all'>
          <button className='absolute top-4 right-4 hover:scale-125 duration-200'>
            <Maximize />
          </button>
          <h1 className='text-3xl font-bold text-center text-gray-100 dark:text-white tracking-wider capitalize'>
            regional Sales
          </h1>
          <VerticalBar />
        </div>
        <div className='relative space-y-5 bg-gradient-to-r from-from to-to bg-opacity-30 rounded-xl duration-200 transition-all'>
          <button className='absolute top-4 right-4 hover:scale-125 duration-200'>
            <Maximize />
          </button>
          <h1 className='text-3xl font-bold text-center text-gray-100 dark:text-white tracking-wider capitalize'>
            profit/loss
          </h1>
          <HorizontalChart />
        </div>
        <div className='relative  space-y-5 bg-gradient-to-r from-from to-to bg-opacity-30 rounded-xl duration-200 transition-all'>
          <button className='absolute top-4 right-4 hover:scale-125 duration-200'>
            <Maximize />
          </button>
          <h1 className='text-3xl font-bold text-center text-gray-100 dark:text-white tracking-wider capitalize'>
            yearly Sales
          </h1>
          <AreaChart />
        </div>
        <div className='relative space-y-5 bg-gradient-to-r from-from to-to bg-opacity-30 rounded-xl duration-200 transition-all'>
          <button className='absolute top-4 right-4 hover:scale-125 duration-200'>
            <Maximize />
          </button>
          <h1 className='text-3xl font-bold text-center text-gray-100 dark:text-white tracking-wider capitalize'>
            category Sales
          </h1>
          <div className='max-w-[400px] h-[300px] mx-auto'>
            <PieChart />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
