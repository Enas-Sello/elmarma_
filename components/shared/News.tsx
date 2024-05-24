import React from 'react';
import MainLayout from './MainLayout';
import SharedLine from './SharedLine';
import Card from './Card';

const News = ({ data }: any) => {
  console.log(data);

  return (
    <MainLayout>
      <SharedLine header="Latest News" tail="more" link="/news" icon />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          // data &&
          <Card footer data={[{}, {}, {}, {}, {}].slice(0, 4)} />
        }
      </div>
    </MainLayout>
  );
};

export default News;
