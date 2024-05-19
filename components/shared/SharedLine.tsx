'use client';

import { useTranslation } from 'react-i18next';
import fire from '@/public/assets/fire.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SharedLine = ({
  LineColor,
  header,
  tail,
  link,
  icon
}: {
  LineColor?: string | 'bg-mainDark';
  header: string;
  link?: string;
  tail?: string;
  icon?: boolean;
}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <div
      className={`flex justify-between items-center py-1 px-3 rounded text-mainWhite font-bold
       ${LineColor ? `${LineColor} ` : 'bg-mainDark '}`}>
      <div className="flex items-center justify-center gap-2">
        <p>{t(header)}</p>
        {icon && (
          <Image
            src={fire}
            alt="fire"
            width={25}
            height={25}
            priority={true}
            className=" object-contain"
          />
        )}
      </div>
      {tail && link && (
        <Link href={link} className="flex items-center justify-center gap-3">
          {t(tail)}
          {currentLocale === 'en' ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </Link>
      )}
    </div>
  );
};

export default SharedLine;
