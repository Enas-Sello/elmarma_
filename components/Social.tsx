'use client';
import { useFetch } from '@/lib/hooks/useQuery';
import React from 'react';
import Spiner from './Spiner';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Social = () => {
  const { t } = useTranslation();

  const { data, isError, isLoading, isFetching, error } = useFetch<any>({
    queryKey: [`social`],
    endpoint: 'setting'
  });

  const socilaMedia = [
    {
      icon: <FaYoutube size={24} className=" hover:" />,
      link: data?.skype_link
    },
    {
      icon: <FaLinkedin size={24} className=" hover:" />,
      link: data?.linkedin_link
    },
    {
      icon: <FaInstagram size={24} className=" hover:" />,
      link: data?.inst_link
    },
    {
      icon: <FaFacebook size={24} className=" hover:" />,
      link: data?.fb_link
    },
    {
      icon: <FaTwitter size={24} className=" hover:" />,
      link: data?.tw_link
    }
  ];

  {
    isLoading || (isFetching && <Spiner />);
  }
  {
    isError && <p>{error?.message}</p>;
  }
  return (
    <>
      {data && (
        <div className="flex justify-between items-center w-full">
          <div className=" flex gap-2">
            <Link className="link" href={''}>
              {t('Policies')}
            </Link>
            <Link className="link" href={data?.whatsapp_link}>
              {t('Call us')}
            </Link>
          </div>
          <div className="flex  gap-2 lg:gap-10">
            {socilaMedia?.map((item, i) => (
              <Link key={i} className="link " href={item.link}>
                {item.icon}
              </Link>
            ))}
          </div>
          <div className=" flex gap-2">
            <p className="text-mainGray">{t('All rights reserved © 2024')}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Social;
