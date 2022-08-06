import '@bedrock-ui/core/css/bedrock-ui.css';

import { Button } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Button', () => {
  it('default', () => {
    cy.mount(<Button>Button</Button>);

    getElement('.button', ({ css }) => {
      console.log(css);

      testCss(css, {
        'background-color': '#1E88E5',
        'border-radius': '4px',
        color: '#FFFFFF',
        'font-size': '16px',
        height: '40px',
        'line-height': '24px',
        padding: '8px 16px',
      });
    });
  });
});
