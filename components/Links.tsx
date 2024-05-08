"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Links = () => {
  const NavLinks = [
    'Matches',
    'News',
    'Leagues',
    'Elmarma Media',
    'Latest Transfers'
  ];
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex  gap-2 lg:gap-10">
      {NavLinks.map((link: string) => (
        <Link key={link} className="link" href={'/'}>
          {t(link)}
        </Link>
      ))}
    </div>
  );
};

export default Links;
