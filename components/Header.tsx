'use client';
import { useTranslation } from 'react-i18next';
import { Separator } from '@radix-ui/react-separator';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-between items-center w-full text-nowrap text-sm md:text-lg">
        <p>{t('Matches on Tuesday, May 7, 2024')}</p>
        <p>
          14 {t('matches')} / 7 {t('tournaments')}
        </p>
      </div>
      <Separator className=" border  border-mainGray" /> 
    </>
  );
};

export default Header;
