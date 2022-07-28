import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import xcode from 'react-syntax-highlighter/dist/cjs/styles/hljs/xcode';

import type { Props } from './CodeHighlight.types';

SyntaxHighlighter.registerLanguage('typescript', typescript);

const CUSTOM_STYLE = {
  fontSize: '16px',
};

function CodeHighlight({ children }: Props) {
  return (
    <SyntaxHighlighter customStyle={CUSTOM_STYLE} language="typescript" style={xcode}>
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeHighlight;
