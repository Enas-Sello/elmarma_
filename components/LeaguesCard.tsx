import { Link } from 'lucide-react';
import React from 'react';

const LeaguesCard = ({ leagues }: any) => {
  console.log(leagues);
  return (
    <>
      {leagues &&
        leagues?.map((item: any, i: React.Key) => (
          <Link href="" key={i}></Link>
        ))}
    </>
  );
};

export default LeaguesCard;
