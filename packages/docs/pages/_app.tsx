import 'assets/sass/bedrock-ui.scss';

import Head from 'next/head';
import { BreakpointsProvider } from '@bedrock-ui/breakpoints';
import { Layout } from 'components/Layout';

import type { AppProps } from 'next/app';

const BREAKPOINTS = {
  mobile: 0,
  tablet: 600,
  desktop: 1024,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bedrock UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BreakpointsProvider breakpoints={BREAKPOINTS}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BreakpointsProvider>
    </>
  );
}

export default App;
