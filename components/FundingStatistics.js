import React from "react";

const FundingStatistics = (props) => {
  let percentage = (props.statistics.funding * 100) / props.statistics.total;

  if (percentage > 100) {
    percentage = 100;
  }

  return (
    <div className='mx-6 mt-6 rounded-lg border border-gray-200 bg-white px-6 pt-8 pb-10 text-center sm:mx-auto sm:flex sm:max-w-[730px] sm:flex-col'>
      <div className='grid-cols-3 sm:grid'>
        <div className='sm:border-r'>
          <h1 className='mb-2 text-3xl font-bold'>
            ${props.statistics.funding.toLocaleString()}
          </h1>
          <p className='text-sm font-normal text-p-color'>
            of ${props.statistics.total.toLocaleString()} backed
          </p>
        </div>
        <hr className='mx-auto my-6 w-[80px] sm:hidden' />
        <div className='sm:border-r'>
          <h1 className='mb-2 text-3xl font-bold'>
            {props.statistics.backers.toLocaleString()}
          </h1>
          <p className='text-sm font-normal text-p-color'>total backers</p>
        </div>
        <hr className='mx-auto my-6 w-[80px] sm:hidden' />
        <div>
          <h1 className='mb-2 text-3xl font-bold'>
            {props.statistics.daysLeft}
          </h1>
          <p className='text-sm font-normal text-p-color'>days left</p>
        </div>
      </div>
      <div className='mt-8 h-3 rounded-full bg-slate-200'>
        <div
          className='h-3 rounded-full bg-button-nonselect'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FundingStatistics;
