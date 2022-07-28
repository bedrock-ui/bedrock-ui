import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Textarea } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsTextarea() {
  return (
    <ComponentDocumentation name="Textarea">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsTextarea;
