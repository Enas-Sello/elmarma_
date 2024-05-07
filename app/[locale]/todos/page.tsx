'use client';
import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import BackButton from '../about/BackButton';
import Link from 'next/link';
import { useFetch } from '@/utils/hooks/useQuery';

const TodoPage = () => {

  const { data, isError, isLoading, error } = useFetch<any>({
    endpoint: 'todos',
    queryKey: ['todos']
  });
  return (
    <>
      {isLoading && <p>looding</p>}
      {isError && <p>{error?.message}</p>}
      {data &&
        data.map((item: { id: React.Key; title: string }) => (
          <div key={item.id} className=" m-5">
            <Link href={`todos/${item.id}`}>{item.title}</Link>{' '}
          </div>
        ))}
      <BackButton />
    </>
  );
};

export default TodoPage;
