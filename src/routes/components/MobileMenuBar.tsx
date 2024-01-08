import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import Admin from "../../assets/svg/admin";
import Message from "../../assets/svg/message";
import Activity from "../../assets/svg/activity";
import Left from "../../assets/svg/left";

interface IProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ open, setOpen }: IProp) {
  const { pathname } = useLocation();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='block md:hidden relative z-10 bg-blue-900 dark:bg-gray-900  text-white'
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='-translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-[200px]'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute -right-10 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setOpen(false)}
                      >
                        <span className='sr-only'>Close panel</span>
                        <Left/>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-700 py-6 shadow-xl '>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='font-semibold leading-6 text-gray-900 dark:text-white text-xl text-center'>
                        Welcome!
                      </Dialog.Title>
                    </div>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6 '>
                      <ul className='flex flex-col py-4 space-y-1'>
                        <li className='px-5 hidden md:block'>
                          <div className='flex flex-row items-center h-8'>
                            <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>
                              management
                            </div>
                          </div>
                        </li>
                        <li>
                          <Link
                            to='/'
                            className={`${
                              pathname === "/" ? "bg-gray-600" : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
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
                              pathname === "/orders" ? "bg-gray-600" : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
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
                              pathname === "/products" ||
                              pathname === "/products/addproduct"
                                ? "bg-gray-600"
                                : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
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
                              pathname === "/reports" ? "bg-gray-600" : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
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
                              pathname === "/activities" ? "bg-gray-600" : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
                          >
                            <span className='inline-flex justify-center items-center ml-4'>
                              <Activity/>
                            </span>
                            <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                              activities log
                            </span>
                          </Link>
                        </li>
                        <li className='px-5 hidden md:block'>
                          <div className='flex flex-row items-center mt-5 h-8'>
                            <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>
                              crm
                            </div>
                          </div>
                        </li>
                        <li>
                          <Link
                            to='/customers'
                            className={` ${
                              pathname === "/customers" ? "bg-gray-600" : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
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
                              pathname === "/inbox" ? "bg-gray-600" : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
                          >
                            <span className='inline-flex justify-center items-center ml-4'>
                              <Message/>
                            </span>
                            <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                              inbox
                            </span>
                          </Link>
                        </li>
                        <li className='px-5 hidden md:block'>
                          <div className='flex flex-row items-center mt-5 h-8'>
                            <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>
                              Administration
                            </div>
                          </div>
                        </li>
                        <li>
                          <Link
                            to='/admin'
                            className={` ${
                              pathname === "/admin" ? "bg-gray-600" : ""
                            } relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-800 hover:scale-110 hover:tracking-widest duration-200 text-white-600 hover:text-white-800 border-l-4 border-transparent `}
                          >
                            <span className='inline-flex justify-center items-center ml-4'>
                              <Admin/>
                            </span>
                            <span className='ml-2 text-sm tracking-wide truncate capitalize'>
                              admin
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
