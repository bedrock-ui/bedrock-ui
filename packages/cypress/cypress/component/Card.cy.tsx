import '@bedrock-ui/core/css/bedrock-ui.css';

import { Card, Text } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Card', () => {
  it('default', () => {
    cy.mount(
      <Card>
        <Text>Card</Text>
      </Card>
    );

    getElement('.card', ({ css }) => {
      testCss(css, {
        'background-color': '#FFFFFF',
        'border-radius': '4px',
        'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        'font-size': '16px',
        height: '24px',
        padding: '20px',
      });
    });
  });

  it('noPadding', () => {
    cy.mount(
      <Card noPadding>
        <Text>Card</Text>
      </Card>
    );

    getElement('.card', ({ css }) => {
      testCss(css, {
        'background-color': '#FFFFFF',
        'border-radius': '4px',
        'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        'font-size': '16px',
        height: '24px',
        padding: '0px',
      });
    });
  });
});
