import React from 'react';
import MainLayout from './MainLayout';
import SharedLine from './SharedLine';
import Card from './Card';

const Trending = ({ data }: any) => {
  console.log(data);
  return (
    <MainLayout>
      <SharedLine header="Trending News" tail="more" link="/news" icon />
      {
        // data &&
        <Card footer data={[{}, {}, {}, {}, {}, {}].slice(0, 6)} />
      }
    </MainLayout>
  );
};

export default Trending;
