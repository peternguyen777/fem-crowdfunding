import React, { useState } from "react";

const CrowdFundProject = (props) => {
  const [bookmarked, setBookmarked] = useState(false);

  const bookmarkClickHandler = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <React.Fragment>
      <div className='mx-6 mt-[244px] rounded-lg border border-gray-200 bg-white px-6 pt-[52px] pb-10 text-center sm:mx-auto sm:mt-[308px] sm:max-w-[730px]'>
        <h2 className='mb-4 text-xl font-bold'>
          Mastercraft Bamboo Monitor Riser
        </h2>
        <p className='mb-6 text-sm font-normal text-p-color'>
          A beautifully handcrafted monitor stand to reduce neck and eye strain
        </p>
        <div className='flex items-center justify-between'>
          {/* Back this project */}
          <button
            onClick={props.onClick}
            className='h-14 rounded-full bg-button-nonselect px-[42px] text-base font-medium text-white hover:bg-button-select'
          >
            Back this project
          </button>
          <div className='flex items-center rounded-full bg-gray-100'>
            <svg
              width='56'
              height='56'
              xmlns='http://www.w3.org/2000/svg'
              className={`cursor-pointer ${
                bookmarked
                  ? "fill-[#2F2F2F] hover:fill-[#707070]"
                  : "fill-[#707070] hover:fill-[#2F2F2F]"
              } `}
              onClick={bookmarkClickHandler}
            >
              <g>
                <circle cx='28' cy='28' r='28' />
                <path fill='#B1B1B1' d='M23 19v18l5-5.058L33 37V19z' />
              </g>
            </svg>
            <div className='hidden pl-4 pr-6 text-base font-medium text-p-color sm:inline-block'>
              Bookmark
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-[244px] z-10 w-full  -translate-y-1/2 text-center sm:top-[308px]'>
        <img src='/logo-mastercraft.svg' alt='' className='mx-auto' />
      </div>
    </React.Fragment>
  );
};

export default CrowdFundProject;
