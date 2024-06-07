'use client';

import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import React from 'react';

const Page = ({ searchParams }: { searchParams: { search: string } }) => {
  const data = searchParams.search;

  return (
    <main className=" p-10 ">
      <MainLayout>
        {
          <Card
            video={data === 'videos' && true}
            footer
            bgColor="bg-mainDark"
            data={[{}, {}, {}, {}, {}]}
          />
        }
      </MainLayout>
    </main>
  );
};

export default Page;
