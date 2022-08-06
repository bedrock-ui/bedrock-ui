import '@bedrock-ui/core/css/bedrock-ui.css';

import { Alert, Text } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Alert', () => {
  describe('severity', () => {
    it('error', () => {
      cy.mount(
        <Alert severity="error">
          <Text>Alert</Text>
        </Alert>
      );

      getElement('.alert', ({ css }) => {
        testCss(css, {
          'background-color': '#FFEBEE',
          'border-radius': '4px',
          height: '24px',
          padding: '16px',
        });
      });
    });

    it('info', () => {
      cy.mount(
        <Alert severity="info">
          <Text>Alert</Text>
        </Alert>
      );

      getElement('.alert', ({ css }) => {
        testCss(css, {
          'background-color': '#E1F5FE',
          'border-radius': '4px',
          height: '24px',
          padding: '16px',
        });
      });
    });

    it('success', () => {
      cy.mount(
        <Alert severity="success">
          <Text>Alert</Text>
        </Alert>
      );

      getElement('.alert', ({ css }) => {
        testCss(css, {
          'background-color': '#E8F5E9',
          'border-radius': '4px',
          height: '24px',
          padding: '16px',
        });
      });
    });

    it('warning', () => {
      cy.mount(
        <Alert severity="warning">
          <Text>Alert</Text>
        </Alert>
      );

      getElement('.alert', ({ css }) => {
        testCss(css, {
          'background-color': '#FFF8E1',
          'border-radius': '4px',
          height: '24px',
          padding: '16px',
        });
      });
    });
  });
});
