const ProductSearch = () => {
  return (
    <div className='inline-flex items-center justify-between w-full border-b border-b-gray-700'>
      <div className='inline-flex items-center cursor-pointer'>
        <button className='outline-none focus:outline-none b'>
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
            className='text-white'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
          </svg>
        </button>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search'
          className='w-full md:w-[500px] shadow-sm mx-auto pl-3 p-3 text-sm dark:text-white outline-none focus:outline-none bg-transparent'
        />
      </div>

      <div className="inline-flex items-center">
        <button className='rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800'>
          <div className='inline-flex items-center gap-2 py-2 px-8 dark:text-gray-200 hover:text-indigo-700 hover:bg-indigo-100 rounded-full '>
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
              <path d='M18 15l-6-6-6 6' />
            </svg>
            <p className='uppercase'> sort</p>
          </div>
        </button>

        <button className="hidden md:block">
          <div className='py-2 px-8 dark:text-gray-200'>
            <div className='p-1 inline-flex items-center'>
              <button className='p-1 rounded shadow '>
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
                  <rect x='3' y='3' width='18' height='18' rx='2' />
                  <path d='M21 12H3M12 3v18' />
                </svg>
              </button>
              <button className='p-1 rounded shadow bg-white'>
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
                  className='text-gray-600'
                >
                  <line x1='8' y1='6' x2='21' y2='6'></line>
                  <line x1='8' y1='12' x2='21' y2='12'></line>
                  <line x1='8' y1='18' x2='21' y2='18'></line>
                  <line x1='3' y1='6' x2='3.01' y2='6'></line>
                  <line x1='3' y1='12' x2='3.01' y2='12'></line>
                  <line x1='3' y1='18' x2='3.01' y2='18'></line>
                </svg>
              </button>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
