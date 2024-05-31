// 'use client';
import CalenderCarousel from '@/components/CalenderCarousel';
import Header from '@/components/Header';
// import { CalendarForm } from '@/components/CalendarForm';
import LeaguesMatches from '@/components/LeaguesMatches';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import Trending from '@/components/shared/Trending';
// import SwipeComponents from '@/components/shared/SwipeComponents';
import logotest from '@/public/assets/logotest.png';
import SerieA from '@/public/assets/SerieA.png';

const Matches = async ({
  params: { locale }
}: {
  params: { locale: string };
}) => {
  const matches = [
    { team: { name: 'La Liga', logo: logotest }, match: [{}, {}] },
    { team: { name: 'Serie A', logo: SerieA }, match: [{}, {}] }
  ];
  return (
    <main className="p-10">
      <MainLayout>
        <div className=" flex flex-col gap-6">
          {/* <div className="flex justify-between">
          <h3 className="font-bold text-4xl ">{t('all matches')}</h3>
          <CalendarForm />
        </div> */}
          <Header />
          <div className="p-10">
            <CalenderCarousel />
          </div>
        </div>
        {matches.map(item => (
          <>
            <SharedLine
              header={item.team.name}
              LineColor="bg-primary"
              logo={item.team.logo}
            />
            <LeaguesMatches locale={locale} data={item.match} />
          </>
        ))}
        <Trending />
      </MainLayout>
    </main>
  );
};

export default Matches;
