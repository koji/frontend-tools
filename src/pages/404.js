import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { PageSEO } from '../components/PageSEO';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <PageSEO title="404: Not Found" />
      <div>
        <Image alt="Not Found" src="/images/404.png" height={400} width={714} />
      </div>
    </div>
  );
}
