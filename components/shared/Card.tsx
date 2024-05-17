'use client';
import test1 from '@/public/assets/test1.png';
import Image from 'next/image';
import { Key } from 'react';
// import { useTranslation } from 'react-i18next';

const Card = ({
  data,
  bgColor,
  badge
}: {
  data: any;
  bgColor?: string;
  badge?: string;
}) => {
  // const { t } = useTranslation();
  console.log(bgColor,badge)
  return (
    <>
      {data?.map((item: any, i: Key | null | undefined) => (
        <div
          key={i}
          className={`${' w-full h-full text-mainDark rounded-md flex flex-col shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 '}`}>
          <Image
            priority={true}
            alt="logo"
            src={test1}
            placeholder="empty"
            className="object-cover"
          />
          <p className=" p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            assumenda modi voluptate hic magnam adipisci.
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
