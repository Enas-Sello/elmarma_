import LeaguesCard from '@/components/LeaguesCard';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import SwipeComponents from '@/components/shared/SwipeComponents';

const Leagues = async () => {
  const Local = [{}, {}, {}, {}];
  return (
    <main className="p-10">
      <MainLayout>
        <SwipeComponents />
        <>
          <SharedLine header="Local" />
          <div className="grid grid-cols-3 gap-4">
            <LeaguesCard leagues={Local} />
          </div>
        </>
        <>
          <SharedLine header="Continental" />
          <div className="grid grid-cols-3 gap-4">
            <LeaguesCard leagues={Local} />
          </div>
        </>
        <>
          <SharedLine header="European" />
          <div className="grid grid-cols-3 gap-4">
            <LeaguesCard leagues={Local} />
          </div>
        </>
        <>
          <SharedLine header="Arab" />
          <div className="grid grid-cols-3 gap-4">
            <LeaguesCard leagues={Local} />
          </div>
        </>
      </MainLayout>
    </main>
  );
};

export default Leagues;
