import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className='absolute top-0 w-full'>
      <div className='absolute w-full pt-8 px-6 sm:pt-[50px] lg:px-[166px] flex justify-between items-ce z-20'>
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
          <nav className='space-x-[34px] hidden sm:inline-block text-white text-[13px] font-commissioner font-medium '>
            <Link href='/'>About</Link>
            <Link href='/'>Discover</Link>
            <Link href='/'>Get Started</Link>
          </nav>
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
