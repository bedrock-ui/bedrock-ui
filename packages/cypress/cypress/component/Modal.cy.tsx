import '@bedrock-ui/core/css/bedrock-ui.css';

import { Modal } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Modal', () => {
  describe('default', () => {
    it('closed', () => {
      cy.mount(<Modal open={false}>Test</Modal>);

      getElement('.modal', ({ css }) => {
        testCss(css, {
          'background-color': '#FFFFFF',
          'border-radius': '4px',
          display: 'none',
          left: '0px',
          'margin-top': '64px',
          'margin-bottom': '64px',
          padding: '16px',
          position: 'fixed',
          right: '0px',
          top: '0px',
          'max-height': `${window.innerHeight - 128}px`,
          'overflow-y': 'auto',
          width: '400px',
          'z-index': '1100',
        });
      });

      getElement('.modal-overlay', ({ css }) => {
        testCss(css, {
          'background-color': '#000000',
          display: 'none',
          opacity: '0.75',
          position: 'fixed',
          height: `${window.innerHeight}px`,
          width: `${window.innerWidth}px`,
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          'z-index': '1000',
        });
      });
    });

    it('open', () => {
      cy.mount(<Modal open={true}>Test</Modal>);

      getElement('.modal', ({ css }) => {
        testCss(css, {
          'background-color': '#FFFFFF',
          'border-radius': '4px',
          display: 'flex',
          'flex-direction': 'column',
          left: '0px',
          'margin-top': '64px',
          'margin-bottom': '64px',
          padding: '16px',
          position: 'fixed',
          right: '0px',
          top: '0px',
          'max-height': `${window.innerHeight - 128}px`,
          'overflow-y': 'auto',
          width: '400px',
          'z-index': '1100',
        });

        getElement('.modal-overlay.open', ({ css }) => {
          testCss(css, {
            'background-color': '#000000',
            display: 'block',
            opacity: '0.75',
            position: 'fixed',
            height: `${window.innerHeight}px`,
            width: `${window.innerWidth}px`,
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            'z-index': '1000',
          });
        });
      });
    });
  });

  describe('nopadding', () => {
    it('closed', () => {
      cy.mount(
        <Modal noPadding open={false}>
          Test
        </Modal>
      );

      getElement('.modal.no-padding', ({ css }) => {
        testCss(css, {
          'background-color': '#FFFFFF',
          'border-radius': '4px',
          display: 'none',
          left: '0px',
          'margin-top': '64px',
          'margin-bottom': '64px',
          padding: '0px',
          position: 'fixed',
          right: '0px',
          top: '0px',
          'max-height': `${window.innerHeight - 128}px`,
          'overflow-y': 'auto',
          width: '400px',
          'z-index': '1100',
        });
      });

      getElement('.modal-overlay', ({ css }) => {
        testCss(css, {
          'background-color': '#000000',
          display: 'none',
          opacity: '0.75',
          position: 'fixed',
          height: `${window.innerHeight}px`,
          width: `${window.innerWidth}px`,
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          'z-index': '1000',
          padding: '0px',
        });
      });
    });

    it('open', () => {
      cy.mount(
        <Modal noPadding open={true}>
          Test
        </Modal>
      );

      getElement('.modal', ({ css }) => {
        testCss(css, {
          'background-color': '#FFFFFF',
          'border-radius': '4px',
          display: 'flex',
          'flex-direction': 'column',
          left: '0px',
          'margin-top': '64px',
          'margin-bottom': '64px',
          padding: '0px',
          position: 'fixed',
          right: '0px',
          top: '0px',
          'max-height': `${window.innerHeight - 128}px`,
          'overflow-y': 'auto',
          width: '400px',
          'z-index': '1100',
        });

        getElement('.modal-overlay.open', ({ css }) => {
          testCss(css, {
            'background-color': '#000000',
            display: 'block',
            opacity: '0.75',
            position: 'fixed',
            height: `${window.innerHeight}px`,
            width: `${window.innerWidth}px`,
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            'z-index': '1000',
          });
        });
      });
    });
  });
});
