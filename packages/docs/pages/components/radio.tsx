import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Radio } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsRadio() {
  return (
    <ComponentDocumentation name="Radio">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsRadio;
