'use client';
// import Cart from "./Cart"
// import Links from "./Links"
// import Search from "./Search"

import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import LanguageChanger from './LanguageChanger';

const NaveBar = () => {
  return (
    <div className="flex items-center justify-between p-5 border-b-2 h-20">
      <div className=" w-20 h-20  lg:w-32 lg:h-32">
        <Image
          alt="logo"
          src={logo}
          className=" object-contain w-full h-full"
        />
      </div>
      {/* <Links /> */}
      <div className=" flex items-center  gap-5 lg:gap-10">
        {/* <Search /> */}

        <LanguageChanger />
      </div>
    </div>
  );
};

export default NaveBar;
