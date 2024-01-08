import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Edit from "../../assets/svg/edit";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Drawer({ open, setOpen }: IProps) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
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
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setOpen(false)}
                      >
                        <span className='sr-only'>Close panel</span>
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
                          <line x1='18' y1='6' x2='6' y2='18'></line>
                          <line x1='6' y1='6' x2='18' y2='18'></line>
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll dark:bg-gray-700 bg-white py-6 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-base font-semibold leading-6 dark:text-white text-gray-900 uppercase'>
                        product information
                      </Dialog.Title>
                    </div>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                      <div>
                        <div className='px-4 sm:px-0'>
                          <div className='flex flex-col gap-5'>
                            <img
                              src='https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600'
                              alt='image'
                              className='object-cover rounded-xl border-2 border-gray-600 shadow-md'
                            />
                            <ul className='inline-flex items-start gap-5'>
                              <li>
                                <img
                                  src='https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600'
                                  alt='image'
                                  className='w-[50px] h-[50px] object-cover rounded-xl border-2 border-gray-600 shadow-md'
                                />
                              </li>
                              <li>
                                <img
                                  src='https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600'
                                  alt='image'
                                  className='w-[50px] h-[50px] object-cover rounded-xl border-2 border-gray-600 shadow-md'
                                />
                              </li>
                              <li>
                                <img
                                  src='https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&w=600'
                                  alt='image'
                                  className='w-[50px] h-[50px] object-cover rounded-xl border-2 border-gray-600 shadow-md'
                                />
                              </li>
                              <button
                                className='border rounded-xl '
                                onClick={() => {
                                  fileRef.current?.click();
                                }}
                              >
                                <input
                                  ref={fileRef}
                                  type='file'
                                  className='hidden'
                                />
                                <label htmlFor='file'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='50'
                                    height='50'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='dark:text-white cursor-pointer'
                                  >
                                    <line x1='12' y1='5' x2='12' y2='19'></line>
                                    <line x1='5' y1='12' x2='19' y2='12'></line>
                                  </svg>
                                </label>
                              </button>
                            </ul>
                          </div>
                        </div>
                        <div className='mt-6 border-t border-gray-500'>
                          <dl className='divide-y divide-gray-500'>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                              <dt className='text-sm font-medium leading-6 text-gray-900 dark:text-white capitalize'>
                                name
                              </dt>
                              <input
                                type='text'
                                readOnly
                                className='bg-transparent mt-1 text-sm leading-6 text-gray-700 dark:text-white sm:col-span-2 sm:mt-0 capitalize focus:outline-none'
                                value='Banana'
                              />
                            </div>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                              <dt className='text-sm font-medium leading-6 text-gray-900 dark:text-white capitalize'>
                                inventory
                                <span className='dark:text-gray-400 mx-1'>
                                  (kg)
                                </span>
                              </dt>
                              <input
                                type='number'
                                readOnly
                                className='bg-transparent mt-1 text-sm leading-6 text-gray-700 dark:text-white sm:col-span-2 sm:mt-0 capitalize focus:outline-none'
                                value='220'
                              />
                            </div>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                              <dt className='text-sm font-medium leading-6 text-gray-900 dark:text-white capitalize'>
                                status
                              </dt>
                              <dd className='mt-1 text-sm leading-6 text-green-500 sm:col-span-2 sm:mt-0 font-bold uppercase'>
                                active
                              </dd>
                            </div>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                              <dt className='text-sm font-medium leading-6 text-gray-900 dark:text-white capitalize'>
                                price
                                <span className='dark:text-gray-400 mx-1'>
                                  ($)
                                </span>
                              </dt>
                              <input
                                type='number'
                                readOnly
                                className='bg-transparent mt-1 text-sm leading-6 text-gray-700 dark:text-white sm:col-span-2 sm:mt-0 capitalize focus:outline-none'
                                value='6.0'
                              />
                            </div>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                              <dt className='text-sm font-medium leading-6 text-gray-900 dark:text-white capitalize'>
                                description
                              </dt>
                              <dd className='mt-1 text-sm leading-6 text-gray-700 dark:text-white sm:col-span-2 sm:mt-0'>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus deleniti fugiat
                                delectus asperiores temporibus qui, nam tenetur
                                quam eaque cum, expedita magni ullam
                                consequuntur. Et tempore quas doloremque aut
                                repellat.
                              </dd>
                            </div>
                          </dl>
                        </div>

                        <button
                          type='button'
                          className='mt-10 inline-flex w-full items-center justify-center gap-5 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 capitalize'
                        >
                          <span>
                            <Edit />
                          </span>
                          edit
                        </button>
                      </div>
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
