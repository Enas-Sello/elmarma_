import LeaguesMatches from '@/components/LeaguesMatches';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import SwipeComponents from '@/components/shared/SwipeComponents';
import logotest from '@/public/assets/logotest.png';

const Matches = async () => {
  const matches = [
    { team: { name: 'La Liga', logo: logotest }, match: [{}, {}] }
  ];
  return (
    <main className="p-10">
      <MainLayout>
        <SwipeComponents />
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
      </MainLayout>
    </main>
  );
};

export default Matches;
