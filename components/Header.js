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
      <div className='absolute z-20 flex w-full items-center justify-between px-6 pt-8 sm:pt-[50px] md:px-[166px]'>
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
              className='h-[15px] w-[15px] sm:hidden'
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
          <nav className='hidden space-x-[34px] font-commissioner text-[13px] font-medium text-white sm:inline-block'>
            <Link href='/'>
              <a className='hover:underline'>About</a>
            </Link>
            <Link href='/'>
              <a className='hover:underline'>Discover</a>
            </Link>
            <Link href='/'>
              <a className='hover:underline'>Get Started</a>
            </Link>
          </nav>
        </div>
      </div>
      {mobileMenu && (
        <div className='absolute top-[88px] w-full sm:hidden'>
          <MobileMenu />
        </div>
      )}

      {mobileMenu && (
        <div
          className='absolute z-10 h-[667px] w-full bg-gradient-to-b from-black to-transparent opacity-60 sm:hidden'
          onClick={menuOffClickHandler}
        />
      )}
      <div className='absolute h-[128px] w-full bg-gradient-to-b from-black to-transparent opacity-50' />
      <img
        src='/image-hero-mobile.jpg'
        alt=''
        className='h-[300px] w-full object-cover sm:hidden'
      />
      <img
        src='/image-hero-desktop.jpg'
        alt=''
        className='hidden h-[400px] w-full object-cover sm:inline-block'
      />
    </header>
  );
};

export default Header;
