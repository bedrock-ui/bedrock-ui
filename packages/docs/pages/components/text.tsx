import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Text } from '@bedrock-ui/core';
`.trim();

function ComponentsText() {
  return (
    <ComponentDocumentation name="Text">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsText;
