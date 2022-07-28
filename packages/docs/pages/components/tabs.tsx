import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Tabs } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsTabs() {
  return (
    <ComponentDocumentation name="Tabs">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsTabs;
