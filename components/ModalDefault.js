import React, { useEffect } from "react";

const ModalDefault = (props) => {
  const allRewards = [
    {
      id: 9999,
      name: "Pledge with no reward",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    ...props.rewards,
  ];

  console.log(allRewards);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className='absolute z-40 w-full'>
        <div className='z-40 mx-6 mt-[120px] max-w-[730px] rounded-lg bg-white p-6 font-commissioner sm:mx-auto'>
          <div className='flex flex-row items-center justify-between'>
            <h3 className='text-lg font-bold '>Back this project</h3>
            <img
              src='/icon-close-modal.svg'
              alt=''
              className='h-[15px] w-[15px] cursor-pointer '
              onClick={props.onClick}
            />
          </div>
          <p className='mb-6 text-sm font-normal text-p-color'>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className='space-y-6'>
            {allRewards.map((item) => {
              return (
                <div
                  className={`border p-6 ${
                    props.indexSelection == item.id &&
                    "border-2 border-button-nonselect"
                  } ${
                    item.remaining === 0 ? "opacity-50" : "opacity-100"
                  } rounded-lg`}
                  key={item.id}
                >
                  <div className='mb-6 flex items-start justify-between'>
                    <div className='flex flex-row items-center'>
                      <input
                        type='radio'
                        id={item.id}
                        name='pledge'
                        disabled={item.remaining == 0 ? true : false}
                        checked={item.id == props.indexSelection ? true : false}
                        value={item.id}
                        onChange={props.modalSelection}
                        className='ml-1.5 mr-6 inline-block h-3 w-3 appearance-none rounded-full ring-1 ring-gray-300 ring-offset-6 checked:bg-button-nonselect'
                      ></input>
                      <div className='inline-block sm:flex '>
                        <h4 className='text-sm font-bold sm:mr-4'>
                          {item.name}
                        </h4>
                        {item.pledge && (
                          <h5 className='text-sm font-medium text-button-nonselect'>
                            Pledge ${item.pledge} reward
                          </h5>
                        )}
                      </div>
                    </div>
                    {item.remaining >= 0 && (
                      <h1 className='hidden font-bold sm:inline-block'>
                        {item.remaining}
                        <span className='font-normal text-p-color'> left</span>
                      </h1>
                    )}
                  </div>
                  <p className='text-sm font-normal text-p-color'>
                    {item.description}
                  </p>
                  <div>
                    {item.remaining >= 0 && (
                      <h1 className='mt-6 font-bold sm:hidden'>
                        {item.remaining}
                        <span className='font-normal text-p-color'> left</span>
                      </h1>
                    )}
                    {props.indexSelection == item.id && (
                      <>
                        <hr className='mx-0 my-6' />
                        <div className='sm:flex sm:items-center sm:justify-between'>
                          <p className='mb-6 text-center text-sm font-normal text-p-color sm:mb-0'>
                            Enter your pledge
                          </p>
                          <form
                            className='flex items-center justify-between sm:justify-end sm:space-x-4'
                            onSubmit={props.submitPledge}
                            id={item.id}
                          >
                            <label
                              htmlFor='pledge'
                              className='absolute translate-x-6 text-sm font-bold text-gray-400 sm:-translate-x-[200px]'
                            >
                              $
                            </label>
                            <input
                              name='pledge'
                              type='number'
                              placeholder={`${item.pledge || 0} `}
                              onChange={props.enterPledge}
                              className='h-[48px] w-[100px] appearance-none rounded-full border pl-10 pr-4 text-sm font-bold outline-gray-300'
                            />
                            <button className='h-[48px] w-[115px] cursor-pointer rounded-full bg-button-nonselect text-sm font-bold text-white hover:bg-button-select'>
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
        className='absolute z-30 h-full w-full bg-black opacity-50'
        onClick={props.onClick}
      />
    </React.Fragment>
  );
};

export default ModalDefault;
