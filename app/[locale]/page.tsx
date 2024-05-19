'use client';
import Spinner from '@/components/Spinner';
import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import { useFetch } from '@/lib/hooks/useQuery';
import Image from 'next/image';
import addN1 from '@/public/assets/add(1).png';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';
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
        <section>slider</section>
        <Hero />
        {/* advertisement */}
        <section>
          <Link href={'/'} className="w-full h-full relative ">
            <div className="absolute top-2 right-2">
              <Badge variant={'secondary'}>{`>`}</Badge>
            </div>
            <Image
              src={addN1}
              priority={true}
              alt="addN1"
              placeholder="blur"
              className=" object-cover w-full h-full"
            />
          </Link>
        </section>
        {/* trending */}
        <MainLayout>
          <SharedLine header="Trending News" tail="more" link="/news" icon />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              // news &&
              <Card footer data={[{}, {}, {}, {}, {}].slice(0, 4)} />
            }
          </div>
        </MainLayout>
        {/* news */}
        <MainLayout>
          <SharedLine header="Latest News" tail="more" link="/news" icon />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              // news &&
              <Card footer data={[{}, {}, {}, {}, {}].slice(0, 4)} />
            }
          </div>
        </MainLayout>
        <div> slide الفرق </div>
        {/* Photos and Videos */}
        <MainLayout>
          <SharedLine
            header="Photos and Videos"
            tail="more"
            link="/media"
            icon
          />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              // news &&
              <Card footer data={[{}, {}, {}, {}, {}].slice(0, 4)} />
            }
          </div>
        </MainLayout>
      </MainLayout>
    </main>
  );
};
export default Home;
