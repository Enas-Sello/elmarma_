import React from 'react';
import MainLayout from '../shared/MainLayout';
import SharedLine from '../shared/SharedLine';
import Card from '../shared/Card';
import addN1 from '@/public/assets/add(1).png';
import Advertisements from '../Advertisements';

const Multimedia = () => {
  return (
    <MainLayout>
      <main className="p-10">
        <div className="flex flex-col gap-10">
          <SharedLine header="Videos" LineColor="bg-[#3D185C]" />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Card data={[{}, {}, {}]} video />
          </div>
          <SharedLine header="Photos and albums" LineColor="bg-[#3D185C]" />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Card data={[{}, {}, {}]} />
          </div>
          <Advertisements img={addN1} link={'/'} />
          
        </div>
      </main>
    </MainLayout>
  );
};

export default Multimedia;
