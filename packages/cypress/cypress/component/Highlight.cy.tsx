import '@bedrock-ui/core/css/bedrock-ui.css';

import { Highlight } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Highlight', () => {
  it('default', () => {
    // TODO : Make sure the error on Highlight type disappear
    // We need to take off the children proprety.
    cy.mount(<Highlight highlight={['test']}>This is just a test !</Highlight>);

    getElement('.highlight', ({ css }) => {
      testCss(css, {
        display: 'inline-flex',
        'white-space': 'pre-wrap',
      });
    });

    getElement('mark', (a) => {
      testCss(a.css, {
        'background-color': '#FFE082',
      });
    });
  });
});
