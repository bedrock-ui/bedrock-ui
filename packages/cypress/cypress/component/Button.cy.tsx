import '@bedrock-ui/core/css/bedrock-ui.css';

import { Button } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Button', () => {
  it('contained', () => {
    cy.mount(<Button>Button</Button>);

    getElement('.button', ({ css }) => {
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

  it('outlined', () => {
    cy.mount(<Button variant="outlined">Button</Button>);

    getElement('.button', ({ css }) => {
      testCss(css, {
        'background-color': '#FFFFFF',
        'border-radius': '4px',
        color: '#1E88E5',
        'font-size': '16px',
        height: '40px',
        'line-height': '24px',
        padding: '8px 16px',
      });
    });
  });

  it('text', () => {
    cy.mount(<Button variant="text">Button</Button>);

    getElement('.button', ({ css }) => {
      testCss(css, {
        'background-color': '#00000000',
        'border-radius': '4px',
        color: '#1E88E5',
        'font-size': '16px',
        height: '40px',
        'line-height': '24px',
        padding: '8px 16px',
      });
    });
  });
});
