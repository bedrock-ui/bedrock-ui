import '@bedrock-ui/core/css/bedrock-ui.css';

import { Text } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Text', () => {
  describe('color', () => {
    it('default', () => {
      cy.mount(<Text>Text</Text>);

      getElement('.text', ({ css }) => {
        testCss(css, {
          color: '#212121',
        });
      });
    });

    it('primary', () => {
      cy.mount(<Text color="primary">Text</Text>);

      getElement('.text', ({ css }) => {
        testCss(css, {
          color: '#1E88E5',
        });
      });
    });

    it('white', () => {
      cy.mount(<Text color="white">Text</Text>);

      getElement('.text', ({ css }) => {
        testCss(css, {
          color: '#FFFFFF',
        });
      });
    });
  });
});
