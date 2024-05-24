import MainLayout from '@/components/shared/MainLayout';
import Table from '@/components/shared/Table';

const Transfers = async ({
  params: { locale }
}: {
  params: { locale: string };
}) => {
  console.log('locale', locale);
  return (
    <MainLayout>
      <main>
        <Table />
      </main>
    </MainLayout>
  );
};

export default Transfers;
