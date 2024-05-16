import Card from '@/components/Card';

async function Home() {
  return (
    <main className="grid grid-cols-4 gap-5 p-20 justify-center items-center 
     bg-mainWhite">
      <Card type="test" />
      <Card type="test2" />
      <Card />
    </main>
  );
}

export default Home;
