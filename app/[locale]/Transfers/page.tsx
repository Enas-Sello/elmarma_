'use client';
import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import SwipeComponent from '@/components/shared/SwipeComponent';
import Table from '@/components/shared/Table';
import Image from 'next/image';
import logo from '@/public/assets/transfers.png';
import Card from '@/components/shared/Card';
import { useTranslation } from 'react-i18next';

const Transfers = () => {
  const { t } = useTranslation();
  return (
    <main className="p-10">
      <MainLayout>
        <SwipeComponent />
        <AllTeamsCarousel />
        <SharedLine header="Transfers News" tail="" link="/news" />
        <div className="flex flex-col gap-6">
          <div className="w-full h-full ">
            <Image
              priority={true}
              alt="transfer"
              src={logo}
              placeholder="empty"
              className=" object-cover w-full h-full"
            />{' '}
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              // transfers &&
              <Card footer bgColor="bg-mainDark" data={[{}, {}, {}, {}, {}]} />
            }
          </div>
        </div>

        <SharedLine header="Recent Transfers" tail="" link="/news" />

        <div className="p-5 bg-white shadow-2xl rounded flex flex-col gap-5">
          <div className="flex w-full justify-between">
            <p className="font-semibold">{t('All Transfers')}</p>
          </div>
          <Table />
        </div>
      </MainLayout>
    </main>
  );
};

export default Transfers;
