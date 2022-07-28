import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Grid } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsGrid() {
  return (
    <ComponentDocumentation name="Grid">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsGrid;
