'use client';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { Button } from './ui/button';
import { IoCloseSharp } from 'react-icons/io5';

const navLinks = [
  {
    header: 'Arab',
    menu: [
      {
        link: '/tournaments',
        name: 'Saudi Pro League'
      },
      {
        link: '/tournaments',
        name: 'Moroccan League'
      },
      {
        link: '/tournaments',
        name: "King's Cup"
      },
      {
        link: '/tournaments',
        name: 'Tunisian Ligue Professionnelle 1'
      },
      {
        link: '/tournaments',
        name: 'Qatar Stars League'
      },
      {
        link: '/tournaments',
        name: 'UAE Pro League'
      }
    ]
  },
  {
    header: 'Local',
    menu: [
      {
        link: '/tournaments',
        name: 'Egyptian Premier League'
      },
      {
        link: '/tournaments',
        name: 'Professional League Cup'
      },
      {
        link: '/tournaments',
        name: 'Second Division League - A'
      }
    ]
  },
  {
    header: 'Continental',
    menu: [
      {
        link: '/tournaments',
        name: 'UEFA European Qualifiers'
      },
      {
        link: '/tournaments',
        name: 'CAF Confederation Cup'
      },
      {
        link: '/tournaments',
        name: 'CAF Champions League'
      },
      {
        link: '/tournaments',
        name: 'Champions League'
      },
      {
        link: '/tournaments',
        name: 'UEFA European Championship'
      },
      {
        link: '/tournaments',
        name: 'UEFA Europa league'
      },
      {
        link: '/tournaments',
        name: 'BAL'
      },
      {
        link: '/tournaments',
        name: 'The AFC'
      },
      {
        link: '/tournaments',
        name: 'UEFA Europa Conference League'
      },
      {
        link: '/tournaments',
        name: 'World Cup qualifiers'
      }
    ]
  },
  {
    header: 'European',
    menu: [
      {
        link: '/tournaments',
        name: 'Premier League'
      },
      {
        link: '/tournaments',
        name: 'FA cup'
      },
      {
        link: '/tournaments',
        name: 'La Liga'
      },
      {
        link: '/tournaments',
        name: 'Copa Del Ray'
      },
      {
        link: '/tournaments',
        name: 'Serie A'
      },
      {
        link: '/tournaments',
        name: 'Bundesliga'
      },
      {
        link: '/tournaments',
        name: 'Ligue 1'
      },
      {
        link: '/tournaments',
        name: 'Coppa Italia'
      },
      {
        link: '/tournaments',
        name: ' coupe de france'
      },
      {
        link: '/tournaments',
        name: 'DFB-Pokal'
      }
    ]
  }
];

const menuLinks = [
  { name: 'Matches', link: 'matches' },
  { name: 'News', link: 'news' },
  { name: 'Leagues', link: 'leagues' },
  { name: 'Elmarma media', link: 'media' },
  { name: 'Latest Transfers', link: 'transfers' }
];
export default function Sidebar({
  isOpen,
  toggleSidebar
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed  top-0 left-0 h-screen w-full z-50  bg-mainDark overflow-hidden  ${
        isOpen ? 'block' : 'hidden'
      }`}>
      <div className="flex items-center justify-between px-4 py-2">
        {isOpen ? (
          <IoCloseSharp
            onClick={toggleSidebar}
            className="text-white text-4xl"
          />
        ) : (
          <FaBars onClick={toggleSidebar} className="w-5 h-5 md:w-7 md:h-7 " />
        )}
      </div>
      <nav className="flex ">
        <ul className="flex  flex-col gap-8  mt-8  w-full  ">
          {menuLinks.map(item => (
            <Link key={item.link} onClick={toggleSidebar} href={item.link}>
              <li
                className={` text-nowrap px-6 py-3 rounded-md hover:bg-mainDark hover:bg-opacity-50`}>
                <p
                  className={` ${
                    item.name === 'Leagues' ? 'md:text-emerald-700 text-mainWhite' : ''
                  } font-medium text-lg text-white mb-3 text-center`}>
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
                  <Button className="mb-3" variant={'ghost'} key={i}>
                    <Link
                      onClick={toggleSidebar}
                      href={{
                        pathname: item.link,
                        query: {
                          search: item.name
                        }
                      }}
                      className="hover:bg-primary hover:bg-opacity-20 hover:text-mainDark p-2 rounded text-base lg:text-2xl font-normal lg:font-semibold text-mainGray ">
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
