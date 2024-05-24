import React from 'react';
import team from '@/public/assets/teamtest.png';
import Image from 'next/image';
import { Button } from './ui/button';
const CarouselItems = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 bg-mainDark text-mainWhite border">
      <p className="font-semibold text-lg">team name</p>
      <div className="flex gap-2 lg:gap-4 justify-between items-center">
        <div className="w-11 h-11">
          <Image
            src={team}
            priority={true}
            alt="team"
            placeholder="blur"
            className=" object-cover w-full h-full "
          />
        </div>
        <p className="font-semibold text-lg"> 2 </p>
        <Button className="bg-orange-400 rounded-3xl " size={'sm'}> play Now</Button>
        <p className="font-semibold text-lg"> 2 </p>
        <div className="w-11 h-11">
          <Image
            src={team}
            priority={true}
            alt="team"
            placeholder="blur"
            className=" object-cover w-full h-full "
          />
        </div>
      </div>
      <p className="font-bold text-xs ">
        22:00 GMT+ <span className=" text-orange-400">01:25:00</span>
      </p>
    </div>
  );
};

export default CarouselItems;
