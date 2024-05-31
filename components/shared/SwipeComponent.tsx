'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import CarouselItems from '@/components/CarouselItems';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const SwipeComponent = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <div className="p-10 ">
      <div className="flex justify-center items-center">
        <div className="flex justify-between w-full items-center">
          <div className=" flex justify-center items-center align-middle w-full ">
            <Button className="bg-white rounded-none shadow-inner rounded-s-md text-sm font-bold">
              {t('Tomorrow')}
            </Button>
            <Button className="bg-white rounded-none shadow-inner text-sm font-bold">
              {t('Today')}
            </Button>
            <Button className="bg-white rounded-none shadow-inner rounded-e-md text-sm font-bold">
              {t('Yesterday')}
            </Button>
          </div>
          <div className="text-sm w-[200px] md:w-[180px] text-center md:font-semibold hover:bg-primary/90 bg-primary rounded-t-md flex gap-4 items-center p-2 px-4 text-mainWhite -mb-1">
            <Link href={'/matches'}>{t('all matches')}</Link>
            {currentLocale === 'en' ? (
              <IoIosArrowForward />
            ) : (
              <IoIosArrowBack />
            )}
          </div>
        </div>
      </div>
      <Carousel className="">
        <CarouselContent className="">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-0">
            <CarouselItems />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-0">
            <CarouselItems />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-0">
            <CarouselItems />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-0">
            <CarouselItems />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SwipeComponent;
