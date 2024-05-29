'use client';
import Advertisements from '@/components/Advertisements';
import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import News from '@/components/shared/News';
import SharedLine from '@/components/shared/SharedLine';
import SwipeComponent from '@/components/shared/SwipeComponent';
import addN2 from '@/public/assets/add(2).png';

const Media = () => {
  return (
    <main className=" p-10 ">
      <MainLayout>
        <SwipeComponent />
        <AllTeamsCarousel />
        <SharedLine header="Videos" />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            // media &&
            <Card
              video
              footer
              bgColor="bg-mainDark"
              data={[{}, {}, {}, {}, {}]}
            />
          }
        </div>{' '}
        <SharedLine header="Photos and albums" />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            // media &&
            <Card footer bgColor="bg-mainDark" data={[{}, {}, {}, {}, {}]} />
          }
        </div>{' '}
        <Advertisements img={addN2} link={'/'} />
        <News />
      </MainLayout>
    </main>
  );
};

export default Media;
