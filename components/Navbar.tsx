'use client';

import { useState } from 'react';
import LanguageChanger from './LanguageChanger';
import Links from './Links';
import Logo from './Logo';
import Sidebar from './MobileMenu';
import Search from './Search';
import ThemeSwitch from './ThemeSwitch';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className=" flex items-center  h-[4.5rem] bg-mainDark text-white font-medium">
      <div className=" align-middle bg-primary h-full w-[3.7rem] flex justify-center items-center">
        <FaBars onClick={toggleSidebar} className="w-5 h-5 md:w-7 md:h-7 " />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex items-center w-full justify-around gap-3 lg:gap-5">
        <Search />
        <div></div>
        <div className="w-16 h-16 mr-24 md:m-0">
          <Logo />
        </div>
        <div className="hidden md:block">
          <Links />
        </div>
        <div className="flex items-center  gap-2 lg:gap-8">
          <ThemeSwitch />
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
