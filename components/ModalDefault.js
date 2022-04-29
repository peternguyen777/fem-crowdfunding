import React from "react";
import rewards from "./rewards";

const ModalDefault = (props) => {
  const allRewards = [
    {
      id: 9999,
      name: "Pledge with no reward",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    ...rewards,
  ];

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
          <div className='space-y-6'>
            {allRewards.map((item) => {
              return (
                <div className='p-6 pb-8 border rounded-lg' key={item.id}>
                  <div className='flex flex-row items-center mb-6'>
                    <input
                      type='radio'
                      id={item.id}
                      name={item.name}
                      name='Pledge Amount'
                      className='inline-block ml-1.5 mr-6 w-3 h-3 appearance-none rounded-full ring-1 ring-offset-6 ring-gray-300 checked:bg-button-nonselect'
                    ></input>
                    <div className='inline-block '>
                      <h4 className='text-sm font-bold'>{item.name}</h4>
                      {item.pledge && (
                        <h5 className='text-button-nonselect font-medium text-sm'>
                          Pledge ${item.pledge} reward
                        </h5>
                      )}
                    </div>
                  </div>
                  <p className='text-sm text-p-color font-normal mb-6'>
                    {item.description}
                  </p>
                  {item.remaining >= 0 && (
                    <div>
                      <h1 className='font-bold mb-6'>
                        {item.remaining}
                        <span className='font-normal text-p-color'> left</span>
                      </h1>
                      <hr className='mx-0' />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className='absolute w-full h-screen bg-black opacity-50 z-30'
        onClick={props.onClick}
      />
    </React.Fragment>
  );
};

export default ModalDefault;
