import React from "react";

const Header = () => {
  return (
    <header className='absolute top-0 w-full'>
      <div className='absolute w-full pt-8 px-6 sm:pt-[50px] lg:px-[166px] flex justify-between items-start z-20'>
        <img
          src='/logo.svg'
          alt=''
          className='h-[20px] w-[128px] text-white '
        />
        <div>
          <img
            src='/icon-hamburger.svg'
            alt=''
            className='h-[15px] w-[16px] text-white sm:hidden'
          />
          <div className='space-x-[34px] hidden sm:inline-block text-white text-[13px] font-commissioner font-medium '>
            <a href='/'>About</a>
            <a href='/'>Discover</a>
            <a href='/'>Get Started</a>
          </div>
        </div>
      </div>
      <div className='absolute h-[128px] w-full bg-gradient-to-b from-black to-transparent opacity-50' />

      <img
        src='/image-hero-mobile.jpg'
        alt=''
        className='object-cover h-[300px] w-full sm:hidden'
      />
      <img
        src='/image-hero-desktop.jpg'
        alt=''
        className='object-cover h-[400px] w-full hidden sm:inline-block'
      />
    </header>
  );
};

export default Header;
