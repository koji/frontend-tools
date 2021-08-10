import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import * as ga from '../lib/ga';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      GainNode.pageViewed(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
