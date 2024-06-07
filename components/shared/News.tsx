import React from 'react';
import MainLayout from './MainLayout';
import SharedLine from './SharedLine';
import Card from './Card';

const News = ({ data }: any) => {
  console.log(data);

  return (
    <MainLayout>
      <SharedLine header="Latest News" tail="more" link="/news" icon />
        {
          // data &&
          <Card footer data={[{}, {}, {}, {}, {}].slice(0, 4)} />
        }
    </MainLayout>
  );
};

export default News;
