import React from "react";

const CrowdFundProject = (props) => {
  return (
    <React.Fragment>
      <div className='mt-[244px] sm:mt-[308px] border border-gray-200 bg-white rounded-lg mx-6 px-6 sm:mx-auto sm:max-w-[730px] pt-[52px] pb-10 text-center'>
        <h2 className='mb-4 text-xl font-bold'>
          Mastercraft Bamboo Monitor Riser
        </h2>
        <p className='mb-6 text-sm font-normal text-p-color'>
          A beautifully handcrafted monitor stand to reduce neck and eye strain
        </p>
        <div className='flex justify-between items-center'>
          {/* Back this project */}
          <button
            onClick={props.onClick}
            className='bg-button-nonselect hover:bg-button-select px-[42px] h-14 rounded-full text-base text-white font-medium'
          >
            Back this project
          </button>
          <div className='flex items-center bg-gray-100 rounded-full'>
            {/* <img src='/icon-bookmark.svg' alt='' /> */}
            <svg
              width='56'
              height='56'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-[#2F2F2F] hover:fill-[#707070] cursor-pointer'
            >
              <g>
                <circle cx='28' cy='28' r='28' />
                <path fill='#B1B1B1' d='M23 19v18l5-5.058L33 37V19z' />
              </g>
            </svg>
            <div className='hidden sm:inline-block pl-4 pr-6 text-p-color text-base font-medium'>
              Bookmark
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-[244px] sm:top-[308px] w-full  text-center -translate-y-1/2 z-10'>
        <img src='/logo-mastercraft.svg' alt='' className='mx-auto' />
      </div>
    </React.Fragment>
  );
};

export default CrowdFundProject;
