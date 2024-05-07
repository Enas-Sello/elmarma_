'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
 
  return (
    <div>
      <h1>{t('header')}</h1>
      <Link href="/todos">{t('page2')}</Link>
    </div>
  );
};

export default Hero;
