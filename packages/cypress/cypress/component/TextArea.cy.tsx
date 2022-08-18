import '@bedrock-ui/core/css/bedrock-ui.css';

import { Textarea } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Textarea', () => {
  it('default', () => {
    cy.mount(<Textarea />);

    getElement('.textarea', ({ css }) => {
      testCss(css, {
        'border-color': '#BDBDBD',
        'border-radius': '4px',
        'border-style': 'solid',
        'border-width': '1px',
        'box-sizing': 'border-box',
        'font-size': '16px',
        'line-height': '24px',
        'padding-top': '7px',
        'padding-bottom': '7px',
        'padding-left': '16px',
        'padding-right': '16px',
        'outline-style': 'none',
        width: `${document.body.clientWidth}px`,
      });
    });
  });

  it('default-focused', () => {
    cy.mount(<Textarea />);
    cy.get('.textarea').first().focus();

    getElement('.textarea', ({ css }) => {
      testCss(css, {
        'border-color': '#1E88E5',
        'border-radius': '4px',
        'border-style': 'solid',
        'border-width': '1px',
        'box-sizing': 'border-box',
        'font-size': '16px',
        'line-height': '24px',
        'padding-top': '7px',
        'padding-bottom': '7px',
        'padding-left': '16px',
        'padding-right': '16px',
        'outline-style': 'none',
        width: `${document.body.clientWidth}px`,
      });
    });
  });

  it('error', () => {
    cy.mount(<Textarea error />);
    cy.get('.textarea').first().focus();

    getElement('.textarea', ({ css }) => {
      testCss(css, {
        'border-color': '#E53935',
        'border-radius': '4px',
        'border-style': 'solid',
        'border-width': '1px',
        'box-sizing': 'border-box',
        'font-size': '16px',
        'line-height': '24px',
        'padding-top': '7px',
        'padding-bottom': '7px',
        'padding-left': '16px',
        'padding-right': '16px',
        'outline-style': 'none',
        width: `${document.body.clientWidth}px`,
      });
    });
  });

  it('success', () => {
    cy.mount(<Textarea success />);
    cy.get('.textarea').first().focus();

    getElement('.textarea', ({ css }) => {
      testCss(css, {
        'border-color': '#43A047',
        'border-radius': '4px',
        'border-style': 'solid',
        'border-width': '1px',
        'box-sizing': 'border-box',
        'font-size': '16px',
        'line-height': '24px',
        'padding-top': '7px',
        'padding-bottom': '7px',
        'padding-left': '16px',
        'padding-right': '16px',
        'outline-style': 'none',
        width: `${document.body.clientWidth}px`,
      });
    });
  });
});
