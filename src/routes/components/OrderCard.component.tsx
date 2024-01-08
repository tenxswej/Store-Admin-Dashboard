import { useState } from "react";
const OrderCard = () => {
  const [status, setStatus] = useState("pending");

  const StatusOptions = () => {
    return (
      <select
        name='status'
        value={status}
        className={`${
          status.toLowerCase() === "pending"
            ? "bg-gray-600"
            : status.toLocaleLowerCase() === "completed"
            ? "bg-green-700"
            : status.toLocaleLowerCase() === "confirmed"
            ? "bg-blue-700"
            : status.toLocaleLowerCase() === "denied"
            ? "bg-red-500"
            : "bg-none"
        } appearance-none text-white font-semibold text-center px-2 py-1 rounded-xl capitalize focus:outline-none cursor-pointer`}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value='pending' className='bg-gray-600 text-white'>
          pending
        </option>
        <option value='confirmed' className='bg-gray-600 text-white'>
          confirmed
        </option>
        <option value='completed' className='bg-gray-600 text-white'>
          completed
        </option>
        <option value='denied' className='bg-gray-600 text-white'>
          denied
        </option>
      </select>
    );
  };

  return (
    <div className='w-full overflow-hidden rounded-lg'>
      <div className='w-full overflow-x-auto '>
        <table className='w-full'>
          <thead>
            <tr className='text-xs font-semibold tracking-wide text-left text-primary bg-card-1'>
              <th colSpan={4}>
                <div className='bg-card-1  p-3 rounded-tr-md'>
                  <p className='text-head uppercase text-start md:text-center font-bold'>
                    today's orders
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <thead>
            <tr className='text-xs font-semibold tracking-wide text-left uppercase border-b border-b-card-border bg-card-1 text-text-base'>
              <th className='px-4 py-3 text-head'>customers</th>
              <th className='px-4 py-3 text-head'>
                <span>amount</span>
                <span className='text-xs text-head ml-1'>(Ks)</span>
              </th>
              <th className='px-4 py-3 text-head'>Status</th>
              <th className='px-4 py-3 text-head'>time</th>
            </tr>
          </thead>
          <tbody className='divide-y dark:divide-gray-700 bg-card-1'>
            <tr className='hover:bg-card-assent-1 bg-card-1 text-text-base'>
              <td className='px-4 py-3'>
                <div className='flex items-center text-sm'>
                  <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                    <img
                      className='object-cover w-full h-full rounded-full'
                      src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                      alt=''
                      loading='lazy'
                    />
                    <div
                      className='absolute inset-0 rounded-full '
                      aria-hidden='true'
                    ></div>
                  </div>
                  <div className='min-h-[30px]'>
                    <p className='font-semibold text-ellipsis text-primary'>
                      Hans Burger
                    </p>
                    <p className='font-semibold text-ellipsis text-xs text-text-base-2'>
                      20 items
                    </p>
                  </div>
                </div>
              </td>
              <td className='px-4 py-3 text-sm text-primary' >855.85</td>
              <td className='px-4 py-3 text-xs'>
                <StatusOptions />
              </td>
              <td className='px-4 py-3 text-sm text-primary' >15:30</td>
            </tr>
            <tr className='hover:bg-card-assent-1 bg-card-2 text-text-base'>
              <td className='px-4 py-3'>
                <div className='flex items-center text-sm'>
                  <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                    <img
                      className='object-cover w-full h-full rounded-full'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6'
                      alt=''
                      loading='lazy'
                    />
                    <div
                      className='absolute inset-0 rounded-full '
                      aria-hidden='true'
                    ></div>
                  </div>
                  <div className='min-h-[30px]'>
                    <p className='font-semibold text-ellipsis text-primary'>
                      Jolina Angelie
                    </p>
                    <p className='font-semibold text-ellipsis text-xs text-text-base-2'>
                      20 items
                    </p>
                  </div>
                </div>
              </td>
              <td className='px-4 py-3 text-sm text-primary' >369.75</td>
              <td className='px-4 py-3 text-xs'>
                <StatusOptions />
              </td>
              <td className='px-4 py-3 text-sm text-primary' >23:02</td>
            </tr>
            <tr className='hover:bg-card-assent-1 bg-card-1 text-text-base'>
              <td className='px-4 py-3'>
                <div className='flex items-center text-sm'>
                  <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                    <img
                      className='object-cover w-full h-full rounded-full'
                      src='https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5'
                      alt=''
                      loading='lazy'
                    />
                    <div
                      className='absolute inset-0 rounded-full '
                      aria-hidden='true'
                    ></div>
                  </div>
                  <div className='min-h-[30px]'>
                    <p className='font-semibold text-ellipsis text-primary'>
                      Dave Li
                    </p>
                    <p className='font-semibold text-ellipsis text-xs text-text-base-2'>
                      20 items
                    </p>
                  </div>
                </div>
              </td>
              <td className='px-4 py-3 text-sm text-primary' >775.45</td>
              <td className='px-4 py-3 text-xs'>
                <span className='px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700'>
                  {" "}
                  Pending{" "}
                </span>
              </td>
              <td className='px-4 py-3 text-sm text-primary' >09:29</td>
            </tr>
            <tr className='hover:bg-card-assent-1 bg-card-2 text-text-base'>
              <td className='px-4 py-3'>
                <div className='flex items-center text-sm'>
                  <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                    <img
                      className='object-cover w-full h-full rounded-full'
                      src='https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                      alt=''
                      loading='lazy'
                    />
                    <div
                      className='absolute inset-0 rounded-full '
                      aria-hidden='true'
                    ></div>
                  </div>
                  <div className='min-h-[30px]'>
                    <p className='font-semibold text-ellipsis text-primary'>
                      Rulia Joberts
                    </p>
                    <p className='font-semibold text-ellipsis text-xs text-text-base-2'>
                      20 items
                    </p>
                  </div>
                </div>
              </td>
              <td className='px-4 py-3 text-sm text-primary' >1276.75</td>
              <td className='px-4 py-3 text-xs'>
                <span className='px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100'>
                  {" "}
                  Approved{" "}
                </span>
              </td>
              <td className='px-4 py-3 text-sm text-primary' >17:31</td>
            </tr>
            <tr className='hover:bg-card-assent-1 bg-card-1 text-text-base'>
              <td className='px-4 py-3'>
                <div className='flex items-center text-sm'>
                  <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                    <img
                      className='object-cover w-full h-full rounded-full'
                      src='https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                      alt=''
                      loading='lazy'
                    />
                    <div
                      className='absolute inset-0 rounded-full '
                      aria-hidden='true'
                    ></div>
                  </div>
                  <div className='min-h-[30px]'>
                    <p className='font-semibold text-ellipsis text-primary'>
                      Hitney Wouston
                    </p>
                    <p className='font-semibold text-ellipsis text-xs text-text-base-2'>
                      20 items
                    </p>
                  </div>
                </div>
              </td>
              <td className='px-4 py-3 text-sm text-primary'>863.45</td>
              <td className='px-4 py-3 text-xs'>
                <span className='px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700'>
                  {" "}
                  Denied{" "}
                </span>
              </td>
              <td className='px-4 py-3 text-sm text-primary' >11:21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderCard;
