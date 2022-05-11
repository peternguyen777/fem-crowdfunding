import React from "react";
import rewards from "./rewards";

const About = (props) => {
  return (
    <div className='mx-6 mt-6 rounded-lg border border-gray-200 bg-white px-6 pt-8 pb-10 sm:mx-auto sm:max-w-[730px] sm:pb-12 '>
      <div className='mb-9'>
        <h3 className='mb-6 text-lg font-bold'>About this project</h3>
        <p className='font-normal+ text-sm text-p-color'>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand. <br />
          <br />
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <div className='space-y-6'>
        {rewards.map((item) => {
          return (
            <div
              className={`mb-0 rounded-lg border border-gray-200 p-6 ${
                item.remaining === 0 ? "opacity-50" : "opacity-100"
              }`}
              key={item.id}
            >
              <div className='mb-6 sm:flex sm:flex-row sm:items-start sm:justify-between'>
                <h4 className='mb-2 text-sm font-bold sm:mb-0'>{item.name}</h4>
                <h5 className='text-sm font-medium text-button-nonselect'>
                  Pledge ${item.pledge} or more
                </h5>
              </div>
              <p className='mb-6 text-sm font-normal text-p-color'>
                {item.description}
              </p>
              <div className='sm:flex sm:flex-row sm:items-center sm:justify-between'>
                <h1 className='mb-6 text-3xl font-bold sm:mb-0'>
                  {item.remaining}{" "}
                  <span className='align-middle text-sm font-normal text-p-color'>
                    left
                  </span>
                </h1>
                <button
                  className={`bg-button-nonselect ${
                    item.remaining > 0 && "hover:bg-button-select"
                  } h-12 rounded-full px-8 text-base font-medium text-white`}
                  onClick={props.onClick}
                  disabled={item.remaining === 0 ? true : false}
                  value={item.id}
                >
                  {item.remaining === 0 ? "Out of Stock" : "Select Reward"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
