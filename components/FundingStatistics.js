import React from "react";

const FundingStatistics = () => {
  //make responsive later
  const statistics = {
    funding: 59914,
    total: 100000,
    backers: 5000,
    daysLeft: 56,
  };

  const percentage = (statistics.funding * 100) / statistics.total;

  return (
    <div className='bg-white border border-gray-200 text-center mx-6 px-6 sm:mx-auto sm:max-w-[730px] rounded-lg mt-6 pt-8 pb-10 sm:flex sm:flex-col'>
      <div className='sm:grid grid-cols-3'>
        <div className='sm:border-r'>
          <h1 className='font-bold text-3xl mb-2'>
            ${statistics.funding.toLocaleString()}
          </h1>
          <p className='text-sm text-p-color font-normal'>
            of ${statistics.total.toLocaleString()} backed
          </p>
        </div>
        <hr className='w-[80px] mx-auto my-6 sm:hidden' />
        <div className='sm:border-r'>
          <h1 className='font-bold text-3xl mb-2'>
            {statistics.backers.toLocaleString()}
          </h1>
          <p className='text-sm text-p-color font-normal'>total backers</p>
        </div>
        <hr className='w-[80px] mx-auto my-6 sm:hidden' />
        <div>
          <h1 className='font-bold text-3xl mb-2'>{statistics.daysLeft}</h1>
          <p className='text-sm text-p-color font-normal'>days left</p>
        </div>
      </div>
      <div className='mt-8 h-3 bg-slate-200 rounded-full'>
        <div
          className='h-3 rounded-full bg-button-nonselect'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FundingStatistics;
