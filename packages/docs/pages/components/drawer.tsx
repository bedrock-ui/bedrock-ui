import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Drawer } from '@bedrock-ui/core';
`.trim();

function ComponentsDrawer() {
  return (
    <DocSection name="Drawer">
      <CodeHighlight>{CODE}</CodeHighlight>
    </DocSection>
  );
}

export default ComponentsDrawer;
