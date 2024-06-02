import Advertisements from '../Advertisements';
import Manchester from '@/public/assets/Manchester.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import addN1 from '@/public/assets/add(1).png';
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
const SideData = () => {
  const { t } = useTranslation();

  return (
    <div className="col-span-2 flex flex-col gap-5">
      {/*  */}
      {/*  */}
      <Advertisements img={addN1} link={'/'} />
      <div>
        <table className=" table-auto w-full border border-collapse font-bold ">
          <thead>
            <tr className="bg-[#3D185C]  text-lg text-white lg:text-2xl font-normal p-2 rounded lg:font-bold text-center mb-4">
              <th className="px-4 py-2">{t('NO.')}</th>
              <th className="px-4 py-2">{t('Name')}</th>
              <th className="px-4 py-2">{t('Position')}</th>
              <th className="px-4 py-2">{t('Nationality')}</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map(rank => (
              <tr key={rank.rank} className="border-b text-center">
                <td className="px-4 py-2">{t(rank.rank)}</td>
                <td className="px-4 py-2 flex justify-center items-center gap-2">
                  {t(rank.team.name)}
                  <Image
                    priority={true}
                    className="h-8 w-8"
                    src={rank.team.img}
                    alt={rank.team.name}
                  />
                </td>
                <td className="px-4 py-2">{t(rank.points)}</td>
                <td className="px-4 py-2">{t(rank.d)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideData;
