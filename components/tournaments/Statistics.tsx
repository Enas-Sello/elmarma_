import React from 'react';
import MainLayout from '../shared/MainLayout';
import SharedLine from '../shared/SharedLine';
import SideData from '../shared/SideData';

const Statistics = () => {
  return (
    <MainLayout>
      <main className="p-10">
        <div className="grid grid-cols-5 gap-10 items-center">
          <div className="col-span-3 flex flex-col gap-5">
            <SharedLine header="Statistics" LineColor="bg-[#3D185C]" />
          </div>
          <SideData />
        </div>
      </main>
    </MainLayout>
  );
};

export default Statistics;
