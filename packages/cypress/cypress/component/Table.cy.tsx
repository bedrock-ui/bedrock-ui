import '@bedrock-ui/core/css/bedrock-ui.css';

import { Table } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Table', () => {
  it('default', () => {
    cy.mount(<Table></Table>);

    getElement('.table', ({ css }) => {
      testCss(css, {
        width: `${document.body.clientWidth}px`,
        'border-collapse': 'collapse',
        'table-layout': 'auto',
        'line-height': '24px',
        'font-size': '16px',
      });
    });
  });

  it('fixed', () => {
    cy.mount(<Table fixed></Table>);

    getElement('.table', ({ css }) => {
      testCss(css, {
        width: `${document.body.clientWidth}px`,
        'border-collapse': 'collapse',
        'table-layout': 'fixed',
        'line-height': '24px',
        'font-size': '16px',
      });
    });
  });
});
