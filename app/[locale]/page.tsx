'use client';
import Spiner from '@/components/Spiner';
import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import { useFetch } from '@/lib/hooks/useQuery';

const Home = () => {
  // news
  const {
    data: news,
    isError: isNewsError,
    isLoading: isNewLoding,
    error: newsError
  } = useFetch<any>({
    endpoint: 'match-videos',
    queryKey: ['news']
  });
  // const { data2 } = useFetch<any>({
  //   endpoint: 'posts?type=parent-post',
  //   queryKey: ['news']
  // });
  // console.log('data1',news)
  {
    isNewsError && <p>{newsError?.message}</p>;
  }
  {
    isNewLoding && <Spiner />;
  }

  return (
    <main className="p-10">
      <MainLayout>
        <section>slider</section>
        <section>images not same witds</section>
        <section>static image </section>
        <MainLayout>
          <SharedLine header="Latest News" taill="more" link="/news" />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {news && <Card footer data={news.slice(0, 4)} />}
          </div>
        </MainLayout>
      </MainLayout>
    </main>
  );
};
export default Home;
