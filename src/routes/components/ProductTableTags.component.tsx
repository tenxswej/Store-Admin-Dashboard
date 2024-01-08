const ProductTableTags = () => {
  return (
    <div className='grid grid-cols-8 md:grid-cols-12 gap-4'>
      <div className='col-span-4 md:col-span-4 cursor-pointer'>
        <div className='flex flex-row bg-blue-600 hover:bg-blue-600 duration-200 transition shadow-sm rounded p-4 border-[0.2px] border-gray-400'>
          <div className='flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-200'>
            <img
              src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/128/shop-icon.png'
              alt='meat'
            />
          </div>
          <div className='flex flex-col flex-grow ml-4'>
            <div className='text-sm text-gray-100 capitalize'>all</div>
            <div className='font-bold text-lg dark:text-white'>1259</div>
          </div>
        </div>
      </div>
      <div className='col-span-4 md:col-span-4 cursor-pointer'>
        <div className='flex flex-row bg-assent-1 hover:bg-blue-600 duration-200 transition shadow-sm rounded p-4'>
          <div className='flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-200'>
            <img
              src='https://icons.iconarchive.com/icons/pixelmixer/kitty/48/fish-icon.png'
              alt='meat'
            />
          </div>
          <div className='flex flex-col flex-grow ml-4'>
            <div className='text-sm text-gray-300 capitalize'>fish</div>
            <div className='font-bold text-lg text-white'>1259</div>
          </div>
        </div>
      </div>
      <div className='col-span-4 md:col-span-4 cursor-pointer'>
        <div className='flex flex-row bg-assent-1 hover:bg-blue-600 duration-200 transition shadow-sm rounded p-4'>
          <div className='flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-200'>
            <img
              src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/128/Cut-Of-Meat-Flat-icon.png'
              alt='meat'
            />
          </div>
          <div className='flex flex-col flex-grow ml-4'>
            <div className='text-sm text-gray-300 capitalize'>meat</div>
            <div className='font-bold text-lg text-white'>1259</div>
          </div>
        </div>
      </div>
      <div className='col-span-4 md:col-span-4 cursor-pointer'>
        <div className='flex flex-row bg-assent-1 hover:bg-blue-600 duration-200 transition shadow-sm rounded p-4'>
          <div className='flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-200'>
            <img
              src='https://icons.iconarchive.com/icons/iconshow/agriculture/128/Fruits-Vegetables-icon.png'
              alt='vege'
            />
          </div>
          <div className='flex flex-col flex-grow ml-4'>
            <div className='text-sm text-gray-300 capitalize'>vegetables</div>
            <div className='font-bold text-lg text-white'>230</div>
          </div>
        </div>
      </div>
      <div className='col-span-4 md:col-span-4 cursor-pointer'>
        <div className='flex flex-row bg-assent-1 hover:bg-blue-600 duration-200 transition shadow-sm rounded p-4'>
          <div className='flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-200'>
            <img
              src='https://icons.iconarchive.com/icons/martin-berube/food/128/banana-icon.png'
              alt='fruit'
            />
          </div>
          <div className='flex flex-col flex-grow ml-4'>
            <div className='text-sm text-gray-300 capitalize'>Fruit</div>
            <div className='font-bold text-lg text-white'>190</div>
          </div>
        </div>
      </div>
      <div className='col-span-4 md:col-span-4 cursor-pointer'>
        <div className='flex flex-row bg-assent-1 hover:bg-blue-600 duration-200 transition shadow-sm rounded p-4'>
          <div className='flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-200 text-red-500'>
            <img
              src='https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/128/32371-bread-icon.png'
              alt='bread'
            />
          </div>
          <div className='flex flex-col flex-grow ml-4'>
            <div className='text-sm text-gray-300 capitalize'>groceries</div>
            <div className='font-bold text-lg text-white'>120</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTableTags;
