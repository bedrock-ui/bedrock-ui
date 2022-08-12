import '@bedrock-ui/core/css/bedrock-ui.css';

import { TextInput } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('TextInput', () => {
  describe('default', () => {
    it('default-behavior', () => {
      cy.mount(<TextInput />);

      getElement('.text-input', ({ css }) => {
        testCss(css, {
          'border-style': 'solid',
          'box-sizing': 'border-box',
          'border-width': '1px',
          width: `${document.body.clientWidth}px`,
          'border-color': '#BDBDBD',
          'font-size': '16px',
          'line-height': '24px',
        });
      });
    });

    it('focus', () => {
      cy.mount(<TextInput />);
      cy.get('.text-input').first().focus();

      getElement('.text-input', ({ css }) => {
        testCss(css, {
          'border-width': '1px',
          'border-color': '#1E88E5',
          'padding-left': '16px',
          'padding-right': '16px',
          'box-shadow': 'rgb(227, 242, 253) 0px 0px 0px 4px', // Converted Hex value to RGB.
        });
      });
    });

    // TODO : Hover testing but might need external library.
  });

  describe('error', () => {
    it('default-behavior', () => {
      cy.mount(<TextInput error />);

      getElement('.text-input', ({ css }) => {
        testCss(css, {
          'border-style': 'solid',
          'box-sizing': 'border-box',
          'border-width': '1px',
          width: `${document.body.clientWidth}px`,
          'border-color': '#E53935',
          'font-size': '16px',
          'line-height': '24px',
        });
      });
    });

    it('focus', () => {
      cy.mount(<TextInput error />);
      cy.get('.text-input').first().focus();

      getElement('.text-input', ({ css }) => {
        testCss(css, {
          'border-width': '1px',
          'border-color': '#E53935',
          'padding-left': '16px',
          'padding-right': '16px',
          'box-shadow': 'rgb(255, 235, 238) 0px 0px 0px 4px', // Converted Hex value to RGB.
        });
      });
    });
  });

  describe('success', () => {
    it('default-behavior', () => {
      cy.mount(<TextInput success />);

      getElement('.text-input', ({ css }) => {
        testCss(css, {
          'border-style': 'solid',
          'box-sizing': 'border-box',
          'border-width': '1px',
          width: `${document.body.clientWidth}px`,
          'border-color': '#43A047',
          'font-size': '16px',
          'line-height': '24px',
        });
      });
    });

    it('focus', () => {
      cy.mount(<TextInput success />);
      cy.get('.text-input').first().focus();

      getElement('.text-input', ({ css }) => {
        testCss(css, {
          'border-width': '1px',
          'border-color': '#43A047',
          'padding-left': '16px',
          'padding-right': '16px',
          'box-shadow': 'rgb(232, 245, 233) 0px 0px 0px 4px', // Converted Hex value to RGB.
        });
      });
    });
  });
});
