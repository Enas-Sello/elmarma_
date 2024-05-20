import Image from 'next/image';
import Link from 'next/link';
import leagues1 from '@/public/assets/leagues1.png';
import React from 'react';
const LeaguesCard = ({ leagues }: any) => {
  return (
    <>
      {leagues &&
        leagues?.map((item: any, i: React.Key) => (
          <Link href="" key={i}>
            <div className="flex flex-col justify-center items-center max-w-56 xl:max-w-72 border border-mainDark border-opacity-20 rounded p-2 shadow-2xl">
              <Image
                src={leagues1}
                alt="leagues"
                className=" object-cover"
                priority={true}
              />
              <p className='font-semibold'>test</p>
            </div>
          </Link>
        ))}
    </>
  );
};

export default LeaguesCard;
