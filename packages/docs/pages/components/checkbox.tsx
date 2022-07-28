import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Checkbox } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsCheckbox() {
  return (
    <ComponentDocumentation name="Checkbox">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsCheckbox;
