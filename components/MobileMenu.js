import React from "react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className='absolute z-20 w-full'>
      <nav className='top-[88px] z-20 mx-6 flex flex-col rounded-lg border border-gray-200 bg-white py-6 font-commissioner text-lg font-medium leading-[22px]'>
        <Link href='/'>
          <a className='px-5'>About</a>
        </Link>
        <hr className='my-6' />
        <Link href='/'>
          <a className='px-5 '>Discover</a>
        </Link>
        <hr className='my-6' />
        <Link href='/'>
          <a className='px-5'>Get Started</a>
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
