'use client';
import Advertisements from '@/components/Advertisements';
import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import SwipeComponents from '@/components/shared/SwipeComponents';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import addN2 from '@/public/assets/add(2).png';

const News = () => {
  const { t } = useTranslation();

  return (
    <main className="p-10">
      <MainLayout>
        <SwipeComponents />
        <SharedLine header="news" />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            // news &&
            <Card footer bgColor="bg-mainDark" data={[{}, {}, {}, {}, {}]} />
          }
        </div>
        <div className="flex justify-center items-center ">
          <Button size={'lg'} variant={'destructive'}>
            {' '}
            {t(' see more')}
          </Button>
        </div>
        <Advertisements img={addN2} link={'/'} />
      </MainLayout>
    </main>
  );
};

export default News;
