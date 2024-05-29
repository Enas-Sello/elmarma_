'use client';
import CalenderCarousel from '@/components/CalenderCarousel';
// import { CalendarForm } from '@/components/CalendarForm';
import LeaguesMatches from '@/components/LeaguesMatches';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import Trending from '@/components/shared/Trending';
// import SwipeComponents from '@/components/shared/SwipeComponents';
import logotest from '@/public/assets/logotest.png';
import SerieA from '@/public/assets/SerieA.png';
import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';

const Matches = () => {
  const { t } = useTranslation();
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
          <div className="flex justify-between items-center">
            <p>{t('Matches on Tuesday, May 7, 2024')}</p>
            <p>
              14 {t('matches')} / 7 {t('tournaments')}
            </p>
          </div>
          <Separator className=" border  border-mainGray" />
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
            <LeaguesMatches data={item.match} />
          </>
        ))}
      <Trending/>
      </MainLayout>
    </main>
  );
};

export default Matches;
