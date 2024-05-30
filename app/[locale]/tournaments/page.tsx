'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Tournaments = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState('');

  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      setData(dataParam);
    }
  }, [searchParams]);

    return <p>Data from query parameter: {data}</p>;
};

export default Tournaments;
