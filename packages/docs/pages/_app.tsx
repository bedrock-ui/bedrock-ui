import '@bedrock-ui/core/css/bedrock-ui.css';
import 'assets/css/app.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
