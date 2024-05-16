import React from 'react';
import test1 from '@/public/assets/test1.png';
import Image from 'next/image';

const Card = ({ type }: any) => {
  return (
    <div
      className={`${
        type === 'test'
          ? ' bg-[#E20613] w-full h-full rounded-md flex flex-col shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 '
          : type === 'test2'
          ? 'bg-[#3D185C] w-full h-full rounded-md flex flex-col shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100'
          : ' w-full h-full text-mainDark rounded-md flex flex-col shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 '
      }`}>
      <Image
        priority={true}
        alt="logo"
        src={test1}
        placeholder="empty"
        className="object-cover"
      />
      <p className=" p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas assumenda
        modi voluptate hic magnam adipisci.
      </p>
    </div>
  );
};

export default Card;
