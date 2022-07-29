import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Divider } from '@bedrock-ui/core';
`.trim();

function ComponentsDivider() {
  return (
    <ComponentDocumentation name="Divider">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsDivider;
