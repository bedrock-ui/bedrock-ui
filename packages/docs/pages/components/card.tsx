import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Card } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsCard() {
  return (
    <ComponentDocumentation name="Card">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsCard;
