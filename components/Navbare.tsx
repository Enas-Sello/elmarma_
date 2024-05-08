'use client';

import LanguageChanger from './LanguageChanger';
import Links from './Links';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Search from './Search';
import ThemeSwitch from './ThemeSwitch';

const NaveBar = () => {
  return (
    <div className="flex items-center justify-between  p-5 border-b-2 h-20">
      <div className="w-20 h-20 lg:w-32 lg:h-32">
        <Logo />
      </div>
      <Links />
      <div className="flex items-center  gap-2 md:gap-8">
        <Search />
        <ThemeSwitch />
        <LanguageChanger />
        <MobileMenu />
      </div>
    </div>
  );
};

export default NaveBar;
