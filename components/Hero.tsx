'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
const fetchFunctionalityData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // Replace with your correct API endpoint
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

const Hero = () => {
  const { t } = useTranslation();
  const { data } = useQuery({
    queryKey: ['func'],
    queryFn: fetchFunctionalityData
  });
  console.log(data);
  return (
    <div>
      <h1>{t('header')}</h1>
      <Link href="/about">{t('page2')}</Link>
    </div>
  );
};

export default Hero;
