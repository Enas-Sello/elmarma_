import React from 'react';
import Logo from './Logo';
import Links from './Links';

const Footer = () => {
  return (
    <>
      <div className="bg-mainDark text-white font-medium rounded p-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-20 h-20 md:w-32 md:h-32">
            <Logo />
          </div>
          <Links />
        </div>
      </div>
    </>
  );
};

export default Footer;
