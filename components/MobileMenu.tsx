'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@radix-ui/react-separator';

const MobileMenu = () => {
  const { t } = useTranslation();
  const navLinks = [
    { name: 'Matches', link: 'matches' },
    { name: 'News', link: 'news' },
    { name: 'Leagues', link: 'leagues' },
    { name: 'Elmarma Media', link: 'media' },
    { name: 'Latest Transfers', link: 'transfers' }
  ];

  const menuLinks = [
    'Matches',
    'News',
    'Leagues',
    'Elmarma Media',
    'Latest Transfers',
    'Latest Transfers',
    'Latest Transfers',
    'Leagues'
  ];
  
  return (
    <Sheet>
      <SheetTrigger className=" align-middle bg-primary h-full w-10  md:w-[3.7rem] flex justify-center items-center">
        <FaBars className="w-5 h-5 md:w-7 md:h-7 " />
      </SheetTrigger>
      <SheetContent className="flex bg-primary ">
        <div className="flex flex-col gap-5 mt-10">
          {menuLinks.map((link: string) => (
            <>
              <div className="link  text-lg text-white">
                <Link href="/">{t(link)}</Link>
              </div>
              <Separator className="border  border-mainWhite border-opacity-45" />
            </>
          ))}
        </div>
        {/*  */}
        <div className="flex-1 flex flex-col gap-5  bg-mainWhite">
          {navLinks.map(link => (
            <>
              <div className="link  text-lg ">
                <Link href={link.link}>{t(link.name)}</Link>
              </div>
              <Separator className="border  border-mainWhite border-opacity-45" />
            </>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
