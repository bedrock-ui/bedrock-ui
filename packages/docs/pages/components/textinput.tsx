import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { TextInput } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsTextInput() {
  return (
    <ComponentDocumentation name="TextInput">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsTextInput;
