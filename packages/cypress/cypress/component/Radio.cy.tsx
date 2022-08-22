import '@bedrock-ui/core/css/bedrock-ui.css';

import { Radio } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Radio', () => {
  describe('default', () => {
    it('default-unchecked', () => {
      cy.mount(<Radio onChange={(checked) => checked}></Radio>);

      cy.get('.radio.checked').should('not.exist');

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          appearance: 'none',
          margin: '0px',
        });
      });

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          display: 'inline-flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          height: '24px',
        });
      });

      getElement('.radio', ({ css }) => {
        testCss(css, {
          'border-color': '#BDBDBD',
          'border-radius': '16px',
          'border-style': 'solid',
          'border-width': '1px',
          'box-sizing': 'border-box',
          cursor: 'pointer',
          display: 'flex',
          height: '20px',
          width: '20px',
        });
      });
    });

    it('default-checked', () => {
      cy.mount(<Radio checked={true} onChange={(checked) => checked}></Radio>);

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          appearance: 'none',
          margin: '0px',
        });
      });

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          display: 'inline-flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          height: '24px',
        });
      });

      getElement('.radio', ({ css }) => {
        testCss(css, {
          'border-radius': '16px',
          'border-style': 'solid',
          'box-sizing': 'border-box',
          cursor: 'pointer',
          display: 'flex',
          height: '20px',
          width: '20px',
        });
      });

      getElement('.radio.checked', ({ css }) => {
        testCss(css, {
          'border-color': '#1E88E5',
          'border-width': '7px',
        });
      });
    });

    it('default-focus', () => {
      cy.mount(<Radio onChange={(checked) => checked}></Radio>);
      cy.get('.radio.checked').should('not.exist');

      cy.get('.radio').first().focus();

      getElement('.radio', ({ css }) => {
        testCss(css, {
          'box-shadow': 'rgb(227, 242, 253) 0px 0px 0px 4px',
          'border-color': '#1E88E5',
          'border-width': '1px',
        });
      });
    });
  });

  describe('error', () => {
    it('error-unchecked', () => {
      cy.mount(<Radio error onChange={(checked) => checked}></Radio>);

      cy.get('.radio.checked').should('not.exist');

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          appearance: 'none',
          margin: '0px',
        });
      });

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          display: 'inline-flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          height: '24px',
        });
      });

      getElement('.radio', ({ css }) => {
        testCss(css, {
          'border-color': '#E53935',
          'border-radius': '16px',
          'border-style': 'solid',
          'border-width': '1px',
          'box-sizing': 'border-box',
          cursor: 'pointer',
          display: 'flex',
          height: '20px',
          width: '20px',
        });
      });
    });

    it('error-checked', () => {
      cy.mount(<Radio error checked={true} onChange={(checked) => checked}></Radio>);

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          appearance: 'none',
          margin: '0px',
        });
      });

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          display: 'inline-flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          height: '24px',
        });
      });

      getElement('.radio', ({ css }) => {
        testCss(css, {
          'border-radius': '16px',
          'border-style': 'solid',
          'box-sizing': 'border-box',
          cursor: 'pointer',
          display: 'flex',
          height: '20px',
          width: '20px',
        });
      });

      getElement('.radio.error.checked', ({ css }) => {
        testCss(css, {
          'border-color': '#E53935',
          'border-width': '7px',
        });
      });
    });

    it('error-focus', () => {
      cy.mount(<Radio error onChange={(checked) => checked}></Radio>);
      cy.get('.radio.checked').should('not.exist');

      cy.get('.radio').first().focus();

      getElement('.radio.error', ({ css }) => {
        testCss(css, {
          'box-shadow': 'rgb(255, 235, 238) 0px 0px 0px 4px',
          'border-color': '#E53935',
          'border-width': '1px',
        });
      });
    });
  });

  describe('success', () => {
    it('success-unchecked', () => {
      cy.mount(<Radio success onChange={(checked) => checked}></Radio>);

      cy.get('.radio.checked').should('not.exist');

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          appearance: 'none',
          margin: '0px',
        });
      });

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          display: 'inline-flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          height: '24px',
        });
      });

      getElement('.radio', ({ css }) => {
        testCss(css, {
          'border-color': '#43A047',
          'border-radius': '16px',
          'border-style': 'solid',
          'border-width': '1px',
          'box-sizing': 'border-box',
          cursor: 'pointer',
          display: 'flex',
          height: '20px',
          width: '20px',
        });
      });
    });

    it('success-checked', () => {
      cy.mount(<Radio success checked={true} onChange={(checked) => checked}></Radio>);

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          appearance: 'none',
          margin: '0px',
        });
      });

      getElement('.radio-container', ({ css }) => {
        testCss(css, {
          display: 'inline-flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          height: '24px',
        });
      });

      getElement('.radio', ({ css }) => {
        testCss(css, {
          'border-radius': '16px',
          'border-style': 'solid',
          'box-sizing': 'border-box',
          cursor: 'pointer',
          display: 'flex',
          height: '20px',
          width: '20px',
        });
      });

      getElement('.radio.success.checked', ({ css }) => {
        testCss(css, {
          'border-color': '#43A047',
          'border-width': '7px',
        });
      });
    });

    it('success-focus', () => {
      cy.mount(<Radio success onChange={(checked) => checked}></Radio>);
      cy.get('.radio.checked').should('not.exist');

      cy.get('.radio').first().focus();

      getElement('.radio.success', ({ css }) => {
        testCss(css, {
          'box-shadow': 'rgb(232, 245, 233) 0px 0px 0px 4px',
          'border-color': '#43A047',
          'border-width': '1px',
        });
      });
    });
  });
});
