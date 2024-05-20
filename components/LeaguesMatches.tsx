'use client';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const LeaguesMatches = () => {
  const { t } = useTranslation();
  return (
    <div className="flex bg-white shadow-lg rounded justify-between h-52 p-3 px-10">
      <div className="flex-1 flex flex-col gap-5 justify-center items-center p-5 ">
        <div className="flex justify-between items-center w-full px-10">
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
        <div className="flex justify-between items-center w-full px-10">
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
        <div className="flex justify-between items-center w-full px-10">
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
      <Link
        href={`matches/123`}
        className="flex justify-center items-center gap-10 h-full">
        <Separator className=" border border-mainGray border-opacity-85 h-full" />
        <Button variant={'outline'}>{t('Details')}</Button>
      </Link>
    </div>
  );
};

export default LeaguesMatches;
