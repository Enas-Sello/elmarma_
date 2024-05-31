'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@/components/shared/MainLayout';
import SwipeComponent from '@/components/shared/SwipeComponent';
import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Advertisements from '@/components/Advertisements';
import Ad from '@/public/assets/Ad.png';
import transfer from '@/public/assets/transfers.png';
import SharedLine from '@/components/shared/SharedLine';
import Manchester from '@/public/assets/Manchester.png';
import logotest from '@/public/assets/logotest.png';
import SerieA from '@/public/assets/SerieA.png';
import AstonVilla from '@/public/assets/AstonVilla.png';
import LeaguesMatches from '@/components/LeaguesMatches';
import News from '@/components/shared/News';

type rankingType = {
  rank: string;
  team: { img: any; name: string };
  w: string;
  l: string;
  d: string;
  points: string;
};

const ranking: rankingType[] = [
  {
    rank: '1',
    team: { img: Manchester, name: 'Manchester City' },
    w: '2',
    d: '1',
    l: '5',
    points: '50%'
  }
];
const matches = [
  { team: { name: 'La Liga', logo: logotest }, match: [{}, {}] },
  { team: { name: 'Serie A', logo: SerieA }, match: [{}, {}] }
];
const Tournaments = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [data, setData] = useState('');
  console.log(data);
  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      setData(dataParam);
    }
  }, [searchParams]);

  return (
    <MainLayout>
      <main className="p-10 flex flex-col gap-8">
        <SwipeComponent />
        navebare
        <AllTeamsCarousel />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Link href={'/'} className="w-full h-full relative">
              <Image
                priority={true}
                alt="transfer"
                src={transfer}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />
              <p className=" absolute bottom-0 w-full bg-mainDark bg-opacity-75  text-center text-lg font-bold text-white ">
                {t("Sport: Nunez's agent offers him to Barcelona")}
              </p>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href={'/'} className=" h-64  relative">
                <Image
                  priority={true}
                  alt="transfer"
                  src={transfer}
                  placeholder="empty"
                  className=" object-cover w-full h-full"
                />
                <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
                  {t("Sport: Nunez's agent offers him to Barcelona")}
                </p>
              </Link>
              <Link href={'/'} className=" h-64  relative">
                <Image
                  priority={true}
                  alt="transfer"
                  src={transfer}
                  placeholder="empty"
                  className=" object-cover w-full h-full"
                />
                <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
                  {t("Sport: Nunez's agent offers him to Barcelona")}
                </p>
              </Link>
              <Link href={'/'} className=" h-64  relative">
                <Image
                  priority={true}
                  alt="transfer"
                  src={transfer}
                  placeholder="empty"
                  className=" object-cover w-full h-full"
                />
                <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
                  {t("Sport: Nunez's agent offers him to Barcelona")}
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3 items-center flex-1">
              <SharedLine
                header=" Premier League standings"
                LineColor="bg-[#3D185C]"
              />
              <div className="container mx-auto mt-4">
                <table className="table-auto w-full border border-collapse font-bold ">
                  <thead>
                    <tr className="bg-mainDark  text-lg text-white lg:text-2xl font-normal p-2 rounded lg:font-bold text-center mb-4">
                      <th className="px-4 py-2">{t('Points')}</th>
                      <th className="px-4 py-2">{t('D')}</th>
                      <th className="px-4 py-2">{t('L')}</th>
                      <th className="px-4 py-2">{t('W')}</th>
                      <th className="px-4 py-2 text-center">{t('Team')}</th>
                      <th className="px-4 py-2">{t('Ranking')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranking.map(rank => (
                      <tr key={rank.rank} className="border-b text-center">
                        <td className="px-4 py-2">{t(rank.rank)}</td>
                        <td className="px-4 py-2">{t(rank.points)}</td>
                        <td className="px-4 py-2">{t(rank.d)}</td>
                        <td className="px-4 py-2">{t(rank.l)}</td>
                        <td className="px-4 py-2">{t(rank.w)}</td>
                        <td className="px-4 py-2 flex justify-center items-center gap-2">
                          {t(rank.team.name)}
                          <Image
                            priority={true}
                            className="h-8 w-8"
                            src={rank.team.img}
                            alt={rank.team.name}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Advertisements link={'/'} img={Ad} />
          </div>
          <SharedLine header="Matches" LineColor="bg-[#3D185C]" />
          {matches.map(item => (
            <>
              <LeaguesMatches data={item.match} />
            </>
          ))}
          <SharedLine
            header="statistics"
            tail="All statistics"
            link="/"
            LineColor="bg-[#3D185C]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#3D185C] text-white p-5 w-[320px] md:w-auto rounded flex flex-col gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 font-semibold ">
              <p className="text-4xl">{t('Matches')}</p>
              <p className="text-5xl text-end">337</p>
            </div>
            <div className="bg-[#3D185C] text-white p-5 w-[320px] md:w-auto rounded flex flex-col gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 font-semibold ">
              <p className="text-4xl">{t('Goals scored')}</p>
              <p className="text-5xl text-end">337</p>
            </div>
            {/*  */}
            <div className="bg-[#3D185C] text-white p-5 w-[320px] md:w-auto rounded flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 font-semibold ">
              <p className="text-4xl">{t('Assists')}</p>
              <div className="flex items-center justify-between gap-3">
                <p className="text-7xl">12</p>
                <div className="flex  items-center gap-1">
                  <p className="text-sm font-normal w-[85px]">
                    {t('Ollie Watkins')}
                  </p>
                  <div className="flex items-center">
                    <div className="w-5 h-5">
                      <Image
                        priority={true}
                        alt="AstonVilla"
                        src={AstonVilla}
                        placeholder="empty"
                        className=" object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-mainWhite"></span>
                  </div>
                </div>
                <div className="w-20 h-20">
                  <Image
                    priority={true}
                    alt="AstonVilla"
                    src={AstonVilla}
                    placeholder="empty"
                    className=" object-cover w-full h-full"
                  />
                </div>{' '}
              </div>
            </div>
            <div className="bg-[#3D185C] text-white p-5 w-[320px] md:w-auto rounded flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 font-semibold ">
              <p className="text-4xl">{t('Assists')}</p>
              <div className="flex items-center justify-between gap-3">
                <p className="text-7xl">12</p>
                <div className="flex  items-center gap-1">
                  <p className="text-sm font-normal w-[85px]">
                    {t('Ollie Watkins')}
                  </p>
                  <div className="flex items-center">
                    <div className="w-5 h-5">
                      <Image
                        priority={true}
                        alt="AstonVilla"
                        src={AstonVilla}
                        placeholder="empty"
                        className=" object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-mainWhite"></span>
                  </div>
                </div>
                <div className="w-20 h-20">
                  <Image
                    priority={true}
                    alt="AstonVilla"
                    src={AstonVilla}
                    placeholder="empty"
                    className=" object-cover w-full h-full"
                  />
                </div>{' '}
              </div>
            </div>
            {/*  */}
          </div>
          <News />
        </div>
      </main>
    </MainLayout>
  );
};

export default Tournaments;
