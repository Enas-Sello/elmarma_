'use client';
import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import BackButton from '../about/BackButton';
import useFetchData from '@/utils/hooks/useFetchData';

const TodoPage = () => {
  const { data, isLoading, isError, error } = useFetchData({
    queryKey: ['todo'],
    queryRout: 'todos/4'
  });
  return (
    <>
      {isLoading && <p>looding</p>}
      {isError && <p>{error?.message}</p>}
      {data && <div>herdo {data.title}</div>}
      <BackButton />
    </>
  );
};

export default TodoPage;
