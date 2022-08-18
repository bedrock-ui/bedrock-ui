import '@bedrock-ui/core/css/bedrock-ui.css';

import { Checkbox } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Checkbox', () => {
  it('default-notchecked', () => {
    cy.mount(
      <Checkbox
        checked={false}
        onChange={(checked) => {
          console.log(checked);
        }}
      />
    );

    getElement('.checkbox', ({ css }) => {
      testCss(css, {
        'border-style': 'solid',
        'box-sizing': 'border-box',
        cursor: 'pointer',
        'background-color': '#FFFFFF',
        height: '20px',
        width: '20px',
        'border-width': '1px',
        'border-radius': '4px',
        'border-color': '#BDBDBD',
      });
    });

    getElement('.checkbox-input', ({ css }) => {
      testCss(css, {
        appearance: 'none',
        margin: '0px',
      });
    });
  });

  it('default-checked', () => {
    cy.mount(
      <Checkbox
        checked={true}
        onChange={(checked) => {
          console.log(checked);
        }}
      />
    );

    getElement('.checkbox', ({ css }) => {
      testCss(css, {
        'border-color': '#1E88E5',
      });
    });

    getElement('.check-icon', ({ css }) => {
      testCss(css, {
        opacity: '1',
        fill: 'none',
        'stroke-width': '2px',
        'stroke-dasharray': '16px',
        'stroke-dashoffset': '0px',
        'background-color': '#1E88E5',
      });
    });
  });

  it('success-notchecked', () => {
    cy.mount(
      <Checkbox
        success
        checked={false}
        onChange={(checked) => {
          console.log(checked);
        }}
      />
    );

    getElement('.checkbox', ({ css }) => {
      testCss(css, {
        'border-style': 'solid',
        'box-sizing': 'border-box',
        cursor: 'pointer',
        'background-color': '#FFFFFF',
        height: '20px',
        width: '20px',
        'border-width': '1px',
        'border-radius': '4px',
        'border-color': '#43A047',
      });
    });

    getElement('.checkbox-input', ({ css }) => {
      testCss(css, {
        appearance: 'none',
        margin: '0px',
      });
    });
  });

  it('success-checked', () => {
    cy.mount(
      <Checkbox
        success
        checked={true}
        onChange={(checked) => {
          console.log(checked);
        }}
      />
    );

    getElement('.checkbox', ({ css }) => {
      testCss(css, {
        'border-color': '#43A047',
      });
    });

    getElement('.check-icon', ({ css }) => {
      testCss(css, {
        opacity: '1',
        fill: 'none',
        'stroke-width': '2px',
        'stroke-dasharray': '16px',
        'stroke-dashoffset': '0px',
        'background-color': '#43A047',
      });
    });
  });

  it('error-notchecked', () => {
    cy.mount(
      <Checkbox
        error
        checked={false}
        onChange={(checked) => {
          console.log(checked);
        }}
      />
    );

    getElement('.checkbox', ({ css }) => {
      testCss(css, {
        'border-style': 'solid',
        'box-sizing': 'border-box',
        cursor: 'pointer',
        'background-color': '#FFFFFF',
        height: '20px',
        width: '20px',
        'border-width': '1px',
        'border-radius': '4px',
        'border-color': '#E53935',
      });
    });

    getElement('.checkbox-input', ({ css }) => {
      testCss(css, {
        appearance: 'none',
        margin: '0px',
      });
    });
  });

  it('error-checked', () => {
    cy.mount(
      <Checkbox
        error
        checked={true}
        onChange={(checked) => {
          console.log(checked);
        }}
      />
    );

    getElement('.checkbox', ({ css }) => {
      testCss(css, {
        'border-color': '#E53935',
      });
    });

    getElement('.check-icon', ({ css }) => {
      testCss(css, {
        opacity: '1',
        fill: 'none',
        'stroke-width': '2px',
        'stroke-dasharray': '16px',
        'stroke-dashoffset': '0px',
        'background-color': '#E53935',
      });
    });
  });
});
