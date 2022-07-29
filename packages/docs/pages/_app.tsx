import '@bedrock-ui/core/css/bedrock-ui.css';
import 'assets/css/app.css';

import dynamic from 'next/dynamic';
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
    <BreakpointsProvider breakpoints={BREAKPOINTS}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BreakpointsProvider>
  );
}

export default App;
