import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Highlight } from '@bedrock-ui/core';
`.trim();

function ComponentsHighlight() {
  return (
    <ComponentDocumentation name="Highlight">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsHighlight;
