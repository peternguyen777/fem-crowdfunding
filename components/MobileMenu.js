import React from "react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className='absolute w-full z-20'>
      <nav className='mx-6 py-6 top-[88px] border border-gray-200 rounded-lg bg-white z-20 text-lg leading-[22px] flex flex-col font-commissioner font-medium'>
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
