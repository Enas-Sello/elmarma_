'use client';
import Link from 'next/link';
import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [nav, setNave] = useState(false);
  const clickHandler = () => {
    setNave(!nav);
  };

  const menuLinks = [
    'Matches',
    'News',
    'Leagues',
    'Elmarma Media',
    'Latest Transfers'
  ];
  return (
    <>
      <div className="z-20 bg-primary h-full p-2 w-14 flex justify-center items-center" onClick={clickHandler}>
        {!nav ? <FaBars size={26} color='white'  /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute z-10 bg-[#18003ebf] bg-opacity-70 font-bold top-0 left-0 w-full  h-screen flex flex-col justify-center items-center cursor-pointer	'
        }>
        {menuLinks.map((link: string) => (
          <li key={link} className=" py-6 text-4xl">
            <Link onClick={clickHandler} href="/">
              {link}
            </Link>
          </li>
        ))}

        {/* <div className="flex gap-3 items-center justify-center">
          <li>
            <AiFillGithub
              onClick={() => window.open(PrfileLinks.Github, '_blank')}
              className="w-6 h-6"
            />
          </li>
          <li>
            <AiOutlineLinkedin
              onClick={() => window.open(PrfileLinks.Linkedin, '_blank')}
              className="w-6 h-6"
            />
          </li>
        </div> */}

        {/* <Button /> */}
      </ul>
    </>
  );
};

export default MobileMenu;
