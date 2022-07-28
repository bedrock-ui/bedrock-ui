import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Link } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsLink() {
  return (
    <ComponentDocumentation name="Link">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsLink;
