import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

import type { Props } from './CodeHighlight.types';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const CUSTOM_STYLE = {
  fontSize: '16px',
};

function CodeHighlight({ children }: Props) {
  return (
    <SyntaxHighlighter customStyle={CUSTOM_STYLE} language="tsx" style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeHighlight;
