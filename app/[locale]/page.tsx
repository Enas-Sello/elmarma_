'use client';
import Spinner from '@/components/Spinner';
import MainLayout from '@/components/shared/MainLayout';
import { useFetch } from '@/lib/hooks/useQuery';
import Hero from '@/components/Hero';
import Advertisements from '@/components/Advertisements';
import addN1 from '@/public/assets/add(1).png';

import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import SwipeComponent from '@/components/shared/SwipeComponent';
import Trending from '@/components/shared/Trending';
import News from './news/page';
import Media from '@/components/Media';

const Home = () => {
  // news
  const {
    data: news,
    isError: isNewsError,
    isLoading: isNewLoading,
    error: newsError
  } = useFetch<any>({
    endpoint: 'match-videos',
    queryKey: ['news']
  });
  // const { data2 } = useFetch<any>({
  //   endpoint: 'posts?type=parent-post',
  //   queryKey: ['news']
  // });
  console.log('data1', news && news);
  {
    isNewsError && <p>{newsError?.message}</p>;
  }
  {
    isNewLoading && <Spinner />;
  }

  return (
    <main className=" p-10 ">
      <MainLayout>
        <SwipeComponent />
        <Hero />
        <Advertisements img={addN1} link={'/'} />
        {/* trending */}
        <Trending />
        {/* news */}
        <News />
        {/* Photos and Videos */}
        <Media />
        <AllTeamsCarousel />
      </MainLayout>
    </main>
  );
};
export default Home;
