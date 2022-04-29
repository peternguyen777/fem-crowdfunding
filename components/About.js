import React from "react";

const About = () => {
  const rewards = [
    {
      id: 0,
      name: "Bamboo Stand",
      pledge: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      remaining: 101,
    },
    {
      id: 1,
      name: "Black Edition Stand",
      pledge: 100,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      remaining: 64,
    },
    {
      id: 2,
      name: "Mahogany Special Edition",
      pledge: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included. ",
      remaining: 0,
    },
  ];

  return (
    <div className='bg-white border border-gray-200 mx-6 px-6 sm:mx-auto sm:max-w-[730px] rounded-lg mt-6 pt-8 pb-10 sm:pb-12 '>
      <div className='mb-9'>
        <h3 className='mb-6 font-bold text-lg'>About this project</h3>
        <p className='text-sm text-p-color font-normal+'>
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
              className={`border border-gray-200 rounded-lg p-6 mb-0 ${
                item.remaining === 0 ? "opacity-50" : "opacity-100"
              }`}
              key={item.id}
            >
              <div className='mb-6 sm:flex sm:flex-row sm:justify-between sm:items-start'>
                <h4 className='text-sm font-bold mb-2 sm:mb-0'>{item.name}</h4>
                <h5 className='text-button-nonselect font-medium text-sm'>
                  Pledge ${item.pledge} or more
                </h5>
              </div>
              <p className='text-sm text-p-color font-normal mb-6'>
                {item.description}
              </p>
              <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                <h1 className='font-bold text-3xl mb-6 sm:mb-0'>
                  {item.remaining}{" "}
                  <span className='text-sm font-normal text-p-color align-middle'>
                    left
                  </span>
                </h1>
                <button
                  className={`bg-button-nonselect ${
                    item.remaining > 0 && "hover:bg-button-select"
                  } px-8 h-12 rounded-full text-base text-white font-medium`}
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
