import React from 'react'
import SharedLine from '../shared/SharedLine';
import SideData from '../shared/SideData';
import MainLayout from '../shared/MainLayout';

const TeamNews = () => {
  return (
    <MainLayout>
      <main className="p-10">
        <div className="grid grid-cols-5 gap-10 items-center">
          <div className="col-span-3 flex flex-col gap-5">
            <SharedLine header="news" LineColor="bg-[#3D185C]" />
          </div>
          <SideData />
        </div>
      </main>
    </MainLayout>
  );
};

export default TeamNews;