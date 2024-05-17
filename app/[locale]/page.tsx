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
    endpoint: 'posts?type=parent-post',
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
          <div className=" grid grid-cols-3 gap-4">
            {news && <Card data={news} />}
          </div>
        </MainLayout>
      </MainLayout>
    </main>
  );
};
export default Home;
