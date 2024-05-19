'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Links = () => {
  const navLinks = [
    { name: 'Matches', link: 'matches' },
    { name: 'News', link: 'news' },
    { name: 'Leagues', link: 'leagues' },
    { name: 'Elmarma Media', link: 'media' },
    { name: 'Latest Transfers', link: 'transfers' }
  ];

  const { t } = useTranslation();

  return (
    <div className="hidden md:flex  gap-2 lg:gap-10">
      {navLinks.map((item: any) => (
        <Link
          key={item.link}
          className="link sm:hidden md:block sm:text-sm sm:font-normal lg:text-lg "
          href={item.link}>
          {t(item.name)}
        </Link>
      ))}
    </div>
  );
};

export default Links;
