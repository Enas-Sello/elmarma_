import React from 'react';

const LeaguesCard = (leagues: any) => {
  console.log(leagues);
  return (
    <>
      {leagues &&
        leagues.map((item: any) => (
          <>
            <div></div>
          </>
        ))}
    </>
  );
};

export default LeaguesCard;
