import Advertisements from '@/components/Advertisements';
import MainLayout from '@/components/shared/MainLayout';
import SwipeComponents from '@/components/shared/SwipeComponents';
import addN2 from '@/public/assets/add(2).png';

const Media = async () => {
  return (
    <main className=" p-10 ">
      <MainLayout>
        <section>slider</section>
        {/* <SwipeComponents /> */}
        <Advertisements img={addN2} link={'/'} />
      </MainLayout>
    </main>
  );
};

export default Media;
