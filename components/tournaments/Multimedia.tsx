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
          <Card data={[{}, {}, {}]} video />
          <SharedLine header="Photos and albums" LineColor="bg-[#3D185C]" />
          <Card data={[{}, {}, {}]} />
          <Advertisements img={addN1} link={'/'} />
        </div>
      </main>
    </MainLayout>
  );
};

export default Multimedia;
