'use client';

import LanguageChanger from './LanguageChanger';
import Links from './Links';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Search from './Search';
import ThemeSwitch from './ThemeSwitch';

const NaveBar = () => {
  return (
    <div className=" flex items-center  h-[4.5rem] bg-mainDark text-white font-medium">
      <MobileMenu />
      <div className="flex items-center w-full justify-around gap-5">
        <div className="w-8 h-8 md:w-16 md:h-16">
          <Logo />
        </div>
        <Search />
        <Links />
        <div className="flex items-center  gap-2 md:gap-8">
          <ThemeSwitch />
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
