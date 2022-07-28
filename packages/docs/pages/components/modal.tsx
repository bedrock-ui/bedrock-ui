import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Modal } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsModal() {
  return (
    <ComponentDocumentation name="Modal">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsModal;
