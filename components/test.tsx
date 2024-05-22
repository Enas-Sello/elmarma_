'use client';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { HiComputerDesktop } from 'react-icons/hi2';
import Image from 'next/image';
import team from '@/public/assets/teamtest.png';
const LeaguesMatches = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded justify-between h-fit  p-3 lg:px-10">
      <Link
        href={`matches/123`}
        className="flex justify-center items-center gap-5 md:gap-10 h-full">
        <Button variant={'outline'}>{t('Details')}</Button>
        <Separator className="  border border-mainGray border-opacity-85 lg:h-full w-full rotate-180 lg:rotate-0" />
      </Link>
      <div className="flex-1 flex flex-col gap-5 justify-center items-center p-2 ">
        <div className="flex justify-between items-center w-full px-3 lg:px-10">
          <div className="flex gap-3 items-center text-darkGray">
            <HiComputerDesktop />
            <p className="">{t('bein sport 2')}</p>
          </div>
          <p className="p-1 px-3 border border-mainGray  rounded">
            {t('start')}
          </p>
          <p className=" text-darkGray font-semibold  lg:text-lg ">
            {t('Week 36')}
          </p>
        </div>
        <div className="flex justify-center gap-4 items-center w-full px-3 lg:px-10">
          <div className="flex items-center text-mainDark">
            <p>name</p>
            <div className="w-10 h-10">
              <Image
                priority={true}
                alt="logo"
                src={team}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />
            </div>
          </div>
          <p>:</p>
          <p>test</p>
        </div>
        <div className="flex justify-between items-center w-full px-3 lg:px-10">
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </div>
  );
};

export default LeaguesMatches;
