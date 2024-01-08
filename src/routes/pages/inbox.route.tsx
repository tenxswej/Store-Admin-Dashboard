import Message from "../../assets/svg/message";

const Inbox = () => {
  return (
    <div className=''>
      <div className=''>
        <div className='inline-flex items-center justify-start gap-5  border-b border-card-border w-[300px] pb-5'>
          <h1 className='font-bold text-primary text-xl tracking-widest uppercase'>
            inbox
          </h1>
          <Message />
        </div>
      </div>
      <div className='py-4 md:py-7'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-5 justify-between'>
          <div className='flex items-center self-center md:self-auto'>
            <a className='rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800'>
              <div className='py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full'>
                <p>All</p>
              </div>
            </a>
            <a className='rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8'>
              <div className='py-2 px-8 text-text-base-2 hover:text-indigo-700 hover:bg-indigo-100 rounded-full '>
                <p>Done</p>
              </div>
            </a>
            <a className='rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8'>
              <div className='py-2 px-8 text-text-base-2 hover:text-indigo-700 hover:bg-indigo-100 rounded-full '>
                <p>unread</p>
              </div>
            </a>
          </div>
          <div className='flex items-center self-end md:self-auto text-sm font-medium leading-none dark:text-gray-200 bg-gray-700 hover:bg-gray-300 cursor-pointer rounded p-3'>
            <p>Sort By:</p>
            <select
              aria-label='select'
              className='focus:text-indigo-600 focus:outline-none bg-transparent ml-1'
            >
              <option className='text-sm text-indigo-800'>Latest</option>
              <option className='text-sm text-indigo-800'>Oldest</option>
              <option className='text-sm text-indigo-800'>Latest</option>
            </select>
          </div>
        </div>
        <div className='mt-7 overflow-hidden rounded-lg shadow-md drop-shadow-md'>
          <table className='w-full whitespace-nowrap rounded-t-md dark:text-white text-center overflow-x-scroll'>
            <thead>
              <tr className='text-center text-xs font-semibold tracking-wide text-primary bg-card-head'>
                <th></th>
                <th className='px-4 py-3'>products</th>
                <th className='px-4 py-3'>price</th>
                <th className='px-4 py-3'>date</th>
                <th className='px-4 py-3'>received</th>
              </tr>
            </thead>
            <tbody>
              <tr className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-1'>
                <td>
                  <div className='relative inline-flex items-center w-[25px] px-1'>
                    <input type='checkbox' className='' />
                  </div>
                </td>
                <td>
                  <p className='text-primary text-md md:font-semibold  md:tracking-wide text-start'>
                    Carl
                  </p>
                </td>
                <td>
                  <p className='tracking-tight truncate w-[100px] md:w-[300px] text-xs md:text-lg text-text-base-2 mx-auto'>
                    Now and then I think of when we were together
                  </p>
                </td>
                <td>
                  <p className='text-primary font-light text-xs md:text-lg'>
                    2055/3/3
                  </p>
                </td>
                <td>
                  <div className='inline-flex items-center gap-5'>
                    <p className='text-primary font-light text-xs md:text-lg'>
                      9:50
                    </p>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-2'>
                <td>
                  <div className='relative inline-flex items-center w-[25px] px-1'>
                    <input type='checkbox' className='' />
                  </div>
                </td>
                <td>
                  <p className='text-primary text-md md:font-semibold  md:tracking-wide text-start'>
                    Abraham
                  </p>
                </td>
                <td>
                  <p className='tracking-tight truncate w-[100px] md:w-[300px] text-xs md:text-lg text-text-base-2 mx-auto'>
                    Hey I purchased some products from your store ...
                  </p>
                </td>
                <td>
                  <p className='text-primary font-light text-xs md:text-lg'>
                    2055/3/3
                  </p>
                </td>
                <td>
                  <div className='inline-flex items-center gap-5'>
                    <p className='text-primary font-light text-xs md:text-lg'>
                      9:50
                    </p>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-1'>
                <td>
                  <div className='relative inline-flex items-center w-[25px] px-1'>
                    <input type='checkbox' className='' />
                  </div>
                </td>
                <td>
                  <p className='text-primary text-md md:font-semibold  md:tracking-wide text-start'>
                    kelvin
                  </p>
                </td>
                <td>
                  <p className='tracking-tight truncate w-[100px] md:w-[300px] text-xs md:text-lg text-text-base-2 mx-auto'>
                    I bought some items in your store and I love it so much
                  </p>
                </td>
                <td>
                  <p className='text-primary font-light text-xs md:text-lg'>
                    2055/3/3
                  </p>
                </td>
                <td>
                  <div className='inline-flex items-center gap-5'>
                    <p className='text-primary font-light text-xs md:text-lg'>
                      9:50
                    </p>
                  </div>
                </td>
              </tr>
              <tr className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-2'>
                <td>
                  <div className='relative inline-flex items-center w-[25px] px-1'>
                    <input type='checkbox' className='' />
                  </div>
                </td>
                <td>
                  <p className='text-primary text-md md:font-semibold  md:tracking-wide text-start'>
                    Joe
                  </p>
                </td>
                <td>
                  <p className='tracking-tight truncate w-[100px] md:w-[300px] text-xs md:text-lg text-text-base-2 mx-auto'>
                    Now you're just somebody that I used to know
                  </p>
                </td>
                <td>
                  <p className='text-primary font-light text-xs md:text-lg'>
                    2057/1/13
                  </p>
                </td>
                <td>
                  <div className='inline-flex items-center gap-5 '>
                    <p className='text-primary font-light text-xs md:text-lg'>
                      9:50
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
