'use client';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const navLinks = [
  {
    header: 'Arab',
    menu: [
      {
        link: '/tournaments',
        name: 'Saudi Pro League'
      }
    ]
  },
  {
    header: 'Local',
    menu: [
      {
        link: '/tournaments',
        name: 'Egyptian Premier League'
      }
    ]
  },
  {
    header: 'Continental',
    menu: [
      {
        link: '/tournaments',
        name: 'UEFA European Qualifiers'
      }
    ]
  },
  {
    header: 'European',
    menu: [
      {
        link: '/tournaments',
        name: 'Premier League'
      }
    ]
  }
];

const menuLinks = [
  { name: 'Matches', link: 'matches' },
  { name: 'News', link: 'news' },
  { name: 'Leagues', link: 'leagues' },
  { name: 'Elmarma Media', link: 'media' },
  { name: 'Latest Transfers', link: 'transfers' }
];
export default function Sidebar({
  isOpen,
  toggleSidebar
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
}) {
  const router = useRouter();
  const { t } = useTranslation();

  const navigate = (pathname: string | URL, teamName: string) => {
    if (typeof window !== 'undefined') {
      const url = new URL(pathname, window.location.origin);
      console.log('tournaments', url);
      url.searchParams.append('data', teamName);
      console.log('tournaments22', url);
      router.push(url.toString());
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full z-50  bg-primary overflow-auto transition duration-300 ease-in-out ${
        isOpen ? 'block' : 'hidden'
      }`}>
      <div className="flex items-center justify-between px-4 py-2">
        <FaBars className="w-5 h-5 md:w-7 md:h-7 " />
        <button onClick={toggleSidebar} className="text-white text-4xl">
          &times;
        </button>
      </div>
      <nav className="flex ">
        <ul className="flex flex-col gap-8  mt-8 w-full  sm:w-fit">
          {menuLinks.map(item => (
            <Link key={item.link} onClick={toggleSidebar} href={item.link}>
              <li className="px-6 py-3  rounded-md hover:bg-mainDark hover:bg-opacity-50">
                <p className="font-medium text-lg text-white mb-3">
                  {t(item.name)}
                </p>
                <Separator className="border  border-mainWhite border-opacity-45" />
              </li>
            </Link>
          ))}
        </ul>
        <ul className="hidden sm:grid grid-cols-4 w-aut gap-5 p-10 bg-mainWhite ">
          {navLinks.map((link, i) => (
            <div key={i}>
              <div className="text-mainDark  text-lg col-span-1">
                <h3 className="font-semibold text-base lg:text-2xl pb-3 border-b-2  mb-3">
                  {t(link.header)}
                </h3>
                {link.menu.map((item, i) => (
                  <Button
                    onClick={() => navigate(item.link, item.name)}
                    variant={'ghost'}
                    key={i}>
                    <Link
                      onClick={toggleSidebar}
                      href={item.link}
                      className="hover:bg-primary hover:bg-opacity-20 hover:text-mainDark p-2 rounded text-base lg:text-2xl font-normal lg:font-semibold text-mainGray mb-3">
                      {t(item.name)}
                    </Link>
                  </Button>
                ))}
              </div>
              <Separator className="border  border-mainWhite border-opacity-45" />
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
}
