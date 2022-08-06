import '@bedrock-ui/core/css/bedrock-ui.css';

import { Button } from '@bedrock-ui/core';

describe('Button', () => {
  it('default', () => {
    cy.mount(<Button>Button</Button>);
  });
});
