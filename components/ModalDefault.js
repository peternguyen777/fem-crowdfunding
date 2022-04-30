import React, { useState } from "react";
import rewards from "./rewards";

const ModalDefault = (props) => {
  const [currentSelection, setCurrentSelection] = useState(null);

  const allRewards = [
    {
      id: 9999,
      name: "Pledge with no reward",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    ...rewards,
  ];

  const selectionValue = (event) => {
    setCurrentSelection(event.target.value);
  };

  return (
    <React.Fragment>
      <div className='absolute w-full z-40'>
        <div className='mt-[120px] z-40 bg-white mx-6 p-6 sm:mx-auto max-w-[730px] rounded-lg font-commissioner'>
          <div className='flex flex-row justify-between items-center'>
            <h3 className='font-bold text-lg '>Back this project</h3>
            <img
              src='/icon-close-modal.svg'
              alt=''
              className='h-[15px] w-[15px]'
              onClick={props.onClick}
            />
          </div>
          <p className='text-sm text-p-color font-normal mb-6'>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className='space-y-6' onChange={selectionValue}>
            {allRewards.map((item) => {
              return (
                <div
                  className={`p-6 border ${
                    currentSelection == item.id &&
                    "border-button-nonselect border-2"
                  } ${
                    item.remaining === 0 ? "opacity-50" : "opacity-100"
                  } rounded-lg`}
                  key={item.id}
                >
                  <div className='flex mb-6 justify-between items-start'>
                    <div className='flex flex-row items-center'>
                      <input
                        type='radio'
                        id={item.id}
                        name='pledge'
                        disabled={item.remaining == 0 ? true : false}
                        value={item.id}
                        className='inline-block ml-1.5 mr-6 w-3 h-3 appearance-none rounded-full ring-1 ring-offset-6 ring-gray-300 checked:bg-button-nonselect'
                      ></input>
                      <div className='inline-block sm:flex '>
                        <h4 className='text-sm font-bold sm:mr-4'>
                          {item.name}
                        </h4>
                        {item.pledge && (
                          <h5 className='text-button-nonselect font-medium text-sm'>
                            Pledge ${item.pledge} reward
                          </h5>
                        )}
                      </div>
                    </div>
                    {item.remaining >= 0 && (
                      <h1 className='font-bold hidden sm:inline-block'>
                        {item.remaining}
                        <span className='font-normal text-p-color'> left</span>
                      </h1>
                    )}
                  </div>
                  <p className='text-sm text-p-color font-normal'>
                    {item.description}
                  </p>
                  <div>
                    {item.remaining >= 0 && (
                      <h1 className='font-bold mt-6 sm:hidden'>
                        {item.remaining}
                        <span className='font-normal text-p-color'> left</span>
                      </h1>
                    )}
                    {currentSelection == item.id && (
                      <>
                        <hr className='mx-0 my-6' />
                        <div className='sm:flex sm:items-center sm:justify-between'>
                          <p className='text-sm text-p-color font-normal mb-6 text-center sm:mb-0'>
                            Enter your pledge
                          </p>
                          <form
                            action=''
                            className='flex justify-between items-center sm:justify-end sm:space-x-4'
                          >
                            <label
                              htmlFor='pledge'
                              className='absolute font-bold text-sm text-gray-400 translate-x-6 sm:-translate-x-[200px]'
                            >
                              $
                            </label>
                            <input
                              name='pledge'
                              type='number'
                              placeholder={`${item.pledge || 0} `}
                              className='w-[100px] h-[48px] pl-10 pr-4 rounded-full border outline-gray-300 font-bold text-sm appearance-none'
                            />
                            <button className='w-[115px] h-[48px] bg-button-nonselect cursor-pointer hover:bg-button-select rounded-full text-white font-bold text-sm'>
                              Continue
                            </button>
                          </form>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className='absolute w-full h-full bg-black opacity-50 z-30'
        onClick={props.onClick}
      />
    </React.Fragment>
  );
};

export default ModalDefault;
