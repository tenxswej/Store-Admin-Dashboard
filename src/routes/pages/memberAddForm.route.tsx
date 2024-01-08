import { useNavigate } from "react-router-dom";

export default function MemberAddForm() {
  const navigate = useNavigate();

  return (
    <div className='p-9 mx-auto bg-assent-1 rounded-lg'>
      <h1 className='text-xl md:text-3xl font-bold text-white capitalize dark:text-white text-center border-b border-gray-700 pb-3  md:w-[400px] mx-auto '>
        member form
      </h1>
      <form>
        <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
          <div className='space-y-5'>
            <div>
              <label className='text-white dark:text-gray-200 capitalize'>
                name
              </label>
              <input
                id='product-name'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-white dark:text-gray-200 capitalize'>
                email
              </label>
              <input
                id='email'
                type='email'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-white dark:text-gray-200 capitalize'>
                short note
              </label>
              <input
                id='note'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
          </div>
          <fieldset>
            <legend className='text-white dark:text-gray-200 capitalize'>
              Roles
            </legend>
            <div className='mt-2 space-y-[26px] px-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600'>
              <div className='relative flex gap-x-3'>
                <div className='flex h-6 items-center'>
                  <input
                    id='admin'
                    name='admin'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                </div>
                <div className='text-sm leading-6'>
                  <label
                    htmlFor='admin'
                    className='font-medium text-gray-900 dark:text-white uppercase'
                  >
                    admin
                  </label>
                  <p className='text-red-500 capitalize'>all access.</p>
                </div>
              </div>
              <div className='relative flex gap-x-3'>
                <div className='flex h-6 items-center'>
                  <input
                    id='audit'
                    name='audit'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                </div>
                <div className='text-sm leading-6'>
                  <label
                    htmlFor='audit'
                    className='font-medium text-gray-900 dark:text-white uppercase'
                  >
                    audit
                  </label>
                  <p className='text-gray-500 capitalize'>
                    CRUD sales, Customers reviews, pos.
                  </p>
                </div>
              </div>
              <div className='relative flex gap-x-3'>
                <div className='flex h-6 items-center'>
                  <input
                    id='editor'
                    name='editor'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                </div>
                <div className='text-sm leading-6'>
                  <label
                    htmlFor='editor'
                    className='font-medium text-gray-900 dark:text-white uppercase'
                  >
                    editor
                  </label>
                  <p className='text-gray-500 capitalize'>CRUD products.</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
      <div className='inline-flex justify-between md:justify-end w-full gap-5 md:gap-10 mt-6 '>
        <button
          type='button'
          className='inline-flex md:items-center gap-3 md:px-6 py-2 leading-5 text-text-base hover:text-gray-400 transition-colors duration-200 transform uppercase'
          onClick={() => navigate(-1)}
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
            <path d='M19 12H6M12 5l-7 7 7 7' />
          </svg>
          back
        </button>
        <button
          type='button'
          className='inline-flex items-center gap-3 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-800 uppercase'
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
            <path d='M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3' />
          </svg>
          save
        </button>
      </div>
    </div>
  );
}
