import '@bedrock-ui/core/css/bedrock-ui.css';
import 'assets/css/app.css';

import { Layout } from 'components/Layout';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
