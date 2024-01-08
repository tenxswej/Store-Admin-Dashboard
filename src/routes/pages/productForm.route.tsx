import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../services/products/productApi";

const ProductForm = () => {
  const navigate = useNavigate()
  const nameRef = useRef(null)
  const priceRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)
  const quantityRef = useRef(null)
  const [category, setCategory] = useState("")
  

  const [addProduct, {isLoading}] = useAddProductMutation()


  return (
    <main className=''>
      <section className='p-9 mx-auto bg-assent-1 rounded-md shadow-md'>
        <h1 className='text-3xl font-bold text-white capitalize dark:text-white text-center border-b border-gray-700 pb-3 w-[200px] mx-auto'>
          Product form
        </h1>
        <form>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-white dark:text-gray-200 capitalize'>
                product name
              </label>
              <input
                id='product-name'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-white dark:text-gray-200 capitalize'>
                price
              </label>
              <input
                id='price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-white dark:text-gray-200 capitalize'>
                quantity
              </label>
              <input
                id='password'
                type='password'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-white dark:text-gray-200 capitalize'>
                Select
              </label>
              <select className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'>
                <option>Surabaya</option>
                <option>Jakarta</option>
                <option>Tangerang</option>
                <option>Bandung</option>
              </select>
            </div>
            <div>
              <label className='text-white dark:text-gray-200'>Text Area</label>
              <textarea
                id='textarea'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              ></textarea>
            </div>
            <div>
              <label className='block text-sm font-medium text-white'>
                Image
              </label>
              <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                <div className='space-y-1 text-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-white'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 48 48'
                    aria-hidden='true'
                  >
                    <path
                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  <div className='flex text-sm text-gray-600'>
                    <label className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                      <span className=''>Upload a file</span>
                      <input
                        id='file-upload'
                        name='file-upload'
                        type='file'
                        className='sr-only'
                      />
                    </label>
                    <p className='pl-1 text-white'>or drag and drop</p>
                  </div>
                  <p className='text-xs text-white'>PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className='inline-flex justify-between md:justify-end w-full gap-5 md:gap-10 mt-6 '>
            <button type="button" className='inline-flex md:items-center gap-3 md:px-6 py-2 leading-5 text-gray-500 hover:text-gray-400 transition-colors duration-200 transform uppercase'onClick={() => navigate(-1)}>
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
            <button type="button" className='inline-flex items-center gap-3 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-800 uppercase'>
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
        </form>
      </section>
    </main>
  );
};

export default ProductForm;
