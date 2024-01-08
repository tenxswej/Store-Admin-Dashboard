import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "../components/Drawer.component";
import ProductTableTags from "../components/ProductTableTags.component";
import ProductSearch from "../components/ProductSearch.component";
import { useGetProductsQuery } from "../../services/products/productApi";

const ProductTable = () => {
  const [open, setOpen] = useState(false);

  const {data} = useGetProductsQuery("")


  console.log("Data ->",data)

  return (
    <div className='pb-28 relative '>
      <div className='space-y-7'>
        <ProductSearch />
        {/* tag cards  */}
        <div className='p-4 w-full'>
          <ProductTableTags />
        </div>
        {/*  */}
        <div className='mt-7 overflow-hidden border border-card-border rounded-lg'>
          
          <table className='w-full'>
            <thead className='bg-card-head'>
              <tr className='text-xs font-semibold tracking-wide text-left text-primary uppercase'>
                <th colSpan={4}>
                  <div className='bg-card-head p-4'>
                    <p className='text-primary uppercase text-start md:text-center font-bold'>
                      all products
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <thead>
              <tr className='text-xs font-semibold tracking-wide text-left text-text-base uppercase border-b border-card-border  bg-card-1'>
                <th className='px-4 py-4 text-head'>customers</th>
                <th className='px-4 py-4 text-head'>
                  <span>amount</span>
                  <span className='text-xs text-primary ml-1'>(Ks)</span>
                </th>
                <th className='px-4 py-4 text-head'>Status</th>
                <th className='px-4 py-4 text-head'>time</th>
              </tr>
            </thead>
            <tbody className='divide-y dark:divide-gray-700'>
              <tr
                className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-2 text-text-base'
                onClick={() => setOpen(true)}
              >
                <td className='px-2 py-3 h-[30px]'>
                  <div className='inline-flex items-center text-sm'>
                    <div className='relative w-8 h-8 mr-3'>
                      <img
                        className='object-cover w-full h-full rounded-md'
                        src='https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt=''
                        loading='lazy'
                      />
                      <div
                        className='absolute inset-0 rounded-full shadow-inner'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <div>
                      <p className='text-primary font-semibold text-sm md:text-base text-ellipsis max-w-[40px]'>
                        Steak
                      </p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  85.85
                </td>
                <td className='px-4 py-3 text-xs'>
                  <div className='w-[15px] h-[15px] rounded-full bg-red-700' />
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  150
                </td>
              </tr>
              <tr
                className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-1 text-text-base'
                onClick={() => setOpen(true)}
              >
                <td className='px-2 py-3 h-[30px]'>
                  <div className='inline-flex items-center text-sm'>
                    <div className='relative w w-8 h-8 mr-3 rounded-full'>
                      <img
                        className='object-cover w-full h-full rounded-md'
                        src='https://images.pexels.com/photos/2238309/pexels-photo-2238309.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt='banana'
                        loading='lazy'
                      />
                      <div
                        className='absolute inset-0 rounded-full shadow-inner'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <div>
                      <p className='text-primary font-semibold text-sm md:text-base text-ellipsis max-w-[40px]'>
                        banana
                      </p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  9.75
                </td>
                <td className='px-4 py-3 text-xs'>
                  <div className='w-[15px] h-[15px] rounded-full bg-yellow-200' />
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  230
                </td>
              </tr>
              <tr
                className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-2 text-text-base'
                onClick={() => setOpen(true)}
              >
                <td className='px-2 py-3 h-[30px]'>
                  <div className='inline-flex items-center text-sm'>
                    <div className='relative w w-8 h-8 mr-3 rounded-full'>
                      <img
                        className='object-cover w-full h-full rounded-md'
                        src='https://firebasestorage.googleapis.com/v0/b/shop-admin-bceb0.appspot.com/o/files%2F10-1691677973946-c8e59b13-3fbf-48b2-bd10-fa14b366ac04.jpg?alt=media&token=6c176ad3-a5b3-4e88-ae8f-619894023b8c'
                        alt=''
                        loading='lazy'
                      />
                      <div
                        className='absolute inset-0 rounded-full shadow-inner'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <div>
                      <p className='text-primary font-semibold text-sm md:text-base text-ellipsis max-w-[40px]'>
                        fish
                      </p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  25.45
                </td>
                <td className='px-4 py-3 text-xs'>
                  <div className='w-[15px] h-[15px] rounded-full bg-green-700' />
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  221
                </td>
              </tr>
              <tr
                className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-1 text-text-base'
                onClick={() => setOpen(true)}
              >
                <td className='px-2 py-3 h-[30px]'>
                  <div className='inline-flex items-center text-sm'>
                    <div className='relative w w-8 h-8 mr-3 rounded-full'>
                      <img
                        className='object-cover w-full h-full rounded-md'
                        src='https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt=''
                        loading='lazy'
                      />
                      <div
                        className='absolute inset-0 rounded-full shadow-inner'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <div>
                      <p className='text-primary font-semibold text-sm md:text-base text-ellipsis max-w-[40px]'>
                        {" "}
                        frozen beef
                      </p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  126.75
                </td>
                <td className='px-4 py-3 text-xs'>
                  <div className='w-[15px] h-[15px] rounded-full bg-green-700' />
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  121
                </td>
              </tr>
              <tr
                className='focus:outline-none hover:bg-card-assent-1 h-16 rounded bg-card-2 text-text-base'
                onClick={() => setOpen(true)}
              >
                <td className='px-2 py-3 h-[30px]'>
                  <div className='inline-flex items-center text-sm'>
                    <div className='relative w w-8 h-8 mr-3 rounded-full'>
                      <img
                        className='object-cover w-full h-full rounded-md'
                        src='https://images.pexels.com/photos/4203056/pexels-photo-4203056.jpeg?auto=compress&cs=tinysrgb&w=600'
                        alt=''
                        loading='lazy'
                      />
                      <div
                        className='absolute inset-0 rounded-full shadow-inner'
                        aria-hidden='true'
                      ></div>
                    </div>
                    <div>
                      <p className='text-primary font-semibold text-sm md:text-base text-ellipsis max-w-[40px]'>
                        cucumber
                      </p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  3.45
                </td>
                <td className='px-4 py-3 text-xs'>
                  <div className='w-[15px] h-[15px] rounded-full bg-green-700' />
                </td>
                <td className='px-4 py-3 text-sm text-end sm:text-start md:text-base text-primary'>
                  821
                </td>
              </tr>
            </tbody>
          </table>

          {/* <div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
            <span className='flex items-center col-span-3'>
              {" "}
              Showing 21-30 of 100{" "}
            </span>
            <span className='col-span-2'></span>

            <span className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
              <nav aria-label='Table navigation'>
                <ul className='inline-flex items-center'>
                  <li>
                    <button
                      className='px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple'
                      aria-label='Previous'
                    >
                      <svg
                        aria-hidden='true'
                        className='w-4 h-4 fill-current'
                        viewBox='0 0 20 20'
                      >
                        <path
                          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                          clip-rule='evenodd'
                          fill-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      1
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      2
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      3
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      4
                    </button>
                  </li>
                  <li>
                    <span className='px-3 py-1'>...</span>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      8
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      className='px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple'
                      aria-label='Next'
                    >
                      <svg
                        className='w-4 h-4 fill-current'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                      >
                        <path
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clip-rule='evenodd'
                          fill-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div> */}
        </div>
        <Link
          to='addproduct'
          className='fixed bottom-10 right-10 px-3 py-2 bg-blue-700 hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500 duration-[400ms,700ms] transition-[color,box-shadow] rounded-xl'
        >
          <div className='inline-flex items-center gap-2 dark:text-gray-200 '>
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
              <path d='M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6' />
              <path d='M14 3v5h5M18 21v-6M15 18h6' />
            </svg>
            <p className='capitalize font text-base-bold tracking-wide'>
              add new item
            </p>
          </div>
        </Link>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </div>
  );
};

export default ProductTable;
