import '../styles.css';

import Loading from '@components/Shared/Loading';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { lazy, Suspense } from 'react';

const Providers = lazy(() => import('@components/Common/Providers'));

const lato2 = localFont({
  src: [
    {
      path: '../../public/fonts/Lato-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Lato-Medium.woff',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/fonts/Lato-Bold.woff',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--lenster-font',
  fallback: ['sans-serif'],
  preload: true,
  display: 'swap'
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Providers>
        <style jsx global>{`
          body {
            font-family: ${lato2.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Providers>
    </Suspense>
  );
};

export default App;
