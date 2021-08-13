import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageSEO } from '../components/PageSEO';
import React from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className='not-found'>
      <PageSEO title='404: Not Found' />
      <div>
        <Image alt='Not Found' src='/images/404.png' height={400} width={714} />
      </div>
    </div>
  );
};

export default NotFound;
