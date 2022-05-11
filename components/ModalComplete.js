import React from "react";

const ModalComplete = (props) => {
  return (
    <React.Fragment>
      <div className='absolute z-40 w-full'>
        <div className='z-40 mx-6 mt-[120px] rounded-lg bg-white p-12 text-center font-commissioner sm:mx-auto sm:mx-auto sm:w-[540px]'>
          <img
            src='/icon-check.svg'
            alt=''
            className='mx-auto mb-12 h-[90px] w-[90px]'
          />
          <h3 className='mb-4 text-lg font-bold'>Thankyou for your support!</h3>
          <p className='mb-12 text-sm font-normal leading-[24px] text-p-color sm:text-base sm:leading-[30px]'>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            className='h-[48px] w-[107px] cursor-pointer rounded-full bg-button-nonselect text-sm font-bold text-white hover:bg-button-select'
            onClick={props.onClick}
          >
            Got it!
          </button>
        </div>
      </div>

      <div
        className='absolute z-30 h-full w-full bg-black opacity-50'
        onClick={props.onClick}
      />
    </React.Fragment>
  );
};

export default ModalComplete;
