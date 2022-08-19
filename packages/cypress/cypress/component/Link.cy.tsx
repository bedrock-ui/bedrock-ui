import '@bedrock-ui/core/css/bedrock-ui.css';

import { Link } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Link', () => {
  it('default', () => {
    cy.mount(<Link href="#">test</Link>);

    getElement('.link', ({ css }) => {
      testCss(css, {
        cursor: 'pointer',
        display: 'inline',
        'font-size': '16px',
        'line-height': '24px',
        color: '#1E88E5',
      });
    });
  });

  it('hover', () => {
    cy.mount(<Link>test</Link>);
    cy.get('.link').first().trigger('mouseover');

    getElement('.link', ({ css }) => {
      testCss(css, {
        cursor: 'pointer',
        display: 'inline',
        'font-size': '16px',
        'line-height': '24px',
        color: '#1E88E5',
        'text-decoration-color': '#1E88E5',
        'text-decoration-style': 'solid',
      });
    });
  });
});
