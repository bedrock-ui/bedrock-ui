import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import type { Props } from './CodeHighlight.types';

const CUSTOM_STYLE = {
  fontSize: '16px',
};

function CodeHighlight({ children }: Props) {
  return (
    <SyntaxHighlighter customStyle={CUSTOM_STYLE} language="typescript" style={tomorrowNight}>
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeHighlight;
