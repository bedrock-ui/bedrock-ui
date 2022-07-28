import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Button } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsButton() {
  return (
    <ComponentDocumentation name="Button">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsButton;
