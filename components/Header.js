import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuOnClickHandler = () => {
    setMobileMenu(true);
  };

  const menuOffClickHandler = () => {
    setMobileMenu(false);
  };

  return (
    <header className='absolute top-0 w-full'>
      <div className='absolute w-full pt-8 px-6 sm:pt-[50px] lg:px-[166px] flex justify-between items-center z-20'>
        <img
          src='/logo.svg'
          alt=''
          className='h-[20px] w-[128px] text-white '
        />
        <div>
          {mobileMenu ? (
            <img
              src='/icon-close-menu.svg'
              alt=''
              className='w-[15px] h-[15px] sm:hidden'
              onClick={menuOffClickHandler}
            />
          ) : (
            <img
              src='/icon-hamburger.svg'
              alt=''
              className='h-[15px] w-[15px] text-white sm:hidden'
              onClick={menuOnClickHandler}
            />
          )}
          <nav className='space-x-[34px] hidden sm:inline-block text-white text-[13px] font-commissioner font-medium '>
            <Link href='/'>About</Link>
            <Link href='/'>Discover</Link>
            <Link href='/'>Get Started</Link>
          </nav>
        </div>
      </div>
      {mobileMenu && (
        <div className='absolute w-full top-[88px] sm:hidden'>
          <MobileMenu />
        </div>
      )}

      {mobileMenu && (
        <div
          className='absolute h-[667px] w-full bg-gradient-to-b from-black to-transparent opacity-60 z-10 sm:hidden'
          onClick={menuOffClickHandler}
        />
      )}
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
