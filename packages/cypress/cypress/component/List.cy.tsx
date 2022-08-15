import '@bedrock-ui/core/css/bedrock-ui.css';

import { List } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('List', () => {
  it('default', () => {
    cy.mount(
      <List>
        <List.Item>Test Item 1</List.Item>
        <List.Item>Test Item 2</List.Item>
      </List>
    );

    getElement('.list', ({ css }) => {
      testCss(css, {
        margin: '0px',
        padding: '0px',
        'list-style-position': 'inside',
      });
    });
  });
});
