import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { List } from '@bedrock-ui/core';
`.trim();

function ComponentsList() {
  return (
    <ComponentDocumentation name="List">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsList;
