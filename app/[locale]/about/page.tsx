'use client';
import { useTranslation } from 'react-i18next';

function About({ params: { locale } }: { params: { locale: string } }) {
  console.log('locale', locale);
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('home')}</h1>
    </main>
  );
}

export default About;
