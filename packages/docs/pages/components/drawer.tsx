import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Drawer } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsDrawer() {
  return (
    <ComponentDocumentation name="Drawer">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsDrawer;
