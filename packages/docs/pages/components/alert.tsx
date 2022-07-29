import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Alert } from '@bedrock-ui/core';
`.trim();

function ComponentsAlert() {
  return (
    <ComponentDocumentation name="Alert">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsAlert;
