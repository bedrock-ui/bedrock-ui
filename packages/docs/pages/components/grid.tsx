import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Grid } from '@bedrock-ui/core';
`.trim();

function ComponentsGrid() {
  return (
    <DocSection name="Grid">
      <CodeHighlight>{CODE}</CodeHighlight>
    </DocSection>
  );
}

export default ComponentsGrid;
