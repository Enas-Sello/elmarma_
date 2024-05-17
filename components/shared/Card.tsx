'use client';
import test1 from '@/public/assets/test1.png';
import Image from 'next/image';
import { Key } from 'react';
import { Badge } from '../ui/badge';
// import { useTranslation } from 'react-i18next';

const Card = ({
  data,
  bgColor,
  badge,
  header,
  footer
}: {
  data: any;
  bgColor?: string;
  badge?: boolean;
  header?: boolean;
  footer?: boolean;
}) => {
  // const { t } = useTranslation();
  console.log(bgColor, badge);
  return (
    <>
      {data?.map((item: any, i: Key | null | undefined) => (
        <div
          key={i}
          className={`w-[260px]  rounded flex flex-col 
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100
             font-semibold  ${
               bgColor
                 ? `${bgColor} text-mainWhite`
                 : 'text-mainDark shadow-2xl'
             }`}>
          <div className="relative">
            <Image
              priority={true}
              alt="logo"
              src={test1}
              placeholder="empty"
              className="object-cover h-40"
              width={260}
              height={200}
            />
            {badge && (
              <div className="absolute top-2 left-2">
                <Badge>new</Badge>
              </div>
            )}
          </div>
          <div className='p-3 flex flex-col gap-3'>
            {header && <p className='text-primary'>Lorem ipsum dolor sit amet.</p>}
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              assumenda modi voluptate hic magnam adipisci.
            </p>
            {footer && <p className=' text-mainGray text-sm font-normal text-end mt-2'>{Date.now().toLocaleString()}</p>}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
