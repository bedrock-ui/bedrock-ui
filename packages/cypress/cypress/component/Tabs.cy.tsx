import '@bedrock-ui/core/css/bedrock-ui.css';

import { Tabs } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Tabs', () => {
  it('default', () => {
    cy.mount(
      <Tabs>
        <Tabs.Tab active={true}>Tab 1</Tabs.Tab>

        <Tabs.Tab active={false}>Tab 2</Tabs.Tab>
      </Tabs>
    );

    getElement('.tabs', ({ css }) => {
      testCss(css, {
        'border-bottom-color': '#EEEEEE',
        'border-bottom-style': 'solid',
        'border-bottom-width': '2px',
        display: 'flex',
      });
    });

    // First element is active.
    getElement('.tab', ({ css }) => {
      testCss(css, {
        'border-bottom-color': '#1E88E5',
        'border-bottom-style': 'solid',
        'border-bottom-width': '2px',
        'box-sizing': 'border-box',
        cursor: 'pointer',
        display: 'flex',
        'font-size': '16px',
        height: '40px',
        'margin-bottom': '-2px',
        'line-height': '24px',
        'padding-top': '8px',
        'padding-bottom': '8px',
        'padding-left': '16px',
        'padding-right': '16px',
      });
    });

    getElement(
      '.tab',
      ({ css }) => {
        testCss(css, {
          'border-bottom-color': '#EEEEEE',
          'border-bottom-style': 'solid',
          'border-bottom-width': '2px',
          'box-sizing': 'border-box',
          cursor: 'pointer',
          display: 'flex',
          'font-size': '16px',
          height: '40px',
          'margin-bottom': '-2px',
          'line-height': '24px',
          'padding-top': '8px',
          'padding-bottom': '8px',
          'padding-left': '16px',
          'padding-right': '16px',
        });
      },
      1
    );
  });
});
