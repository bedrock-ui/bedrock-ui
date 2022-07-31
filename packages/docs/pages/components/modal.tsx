import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Modal } from '@bedrock-ui/core';
`.trim();

function ComponentsModal() {
  return (
    <DocSection name="Modal">
      <CodeHighlight>{CODE}</CodeHighlight>
    </DocSection>
  );
}

export default ComponentsModal;
