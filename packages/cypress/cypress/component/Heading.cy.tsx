import '@bedrock-ui/core/css/bedrock-ui.css';

import { Heading } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Heading', () => {
  describe('level', () => {
    it('1', () => {
      cy.mount(<Heading level={1}>Heading</Heading>);

      getElement('.heading', ({ css }) => {
        testCss(css, {
          'font-size': '40px',
          'line-height': '44px',
        });
      });
    });

    it('2', () => {
      cy.mount(<Heading level={2}>Heading</Heading>);

      getElement('.heading', ({ css }) => {
        testCss(css, {
          'font-size': '36px',
          'line-height': '40px',
        });
      });
    });

    it('3', () => {
      cy.mount(<Heading level={3}>Heading</Heading>);

      getElement('.heading', ({ css }) => {
        testCss(css, {
          'font-size': '32px',
          'line-height': '36px',
        });
      });
    });

    it('4', () => {
      cy.mount(<Heading level={4}>Heading</Heading>);

      getElement('.heading', ({ css }) => {
        testCss(css, {
          'font-size': '28px',
          'line-height': '32px',
        });
      });
    });

    it('5', () => {
      cy.mount(<Heading level={5}>Heading</Heading>);

      getElement('.heading', ({ css }) => {
        testCss(css, {
          'font-size': '24px',
          'line-height': '28px',
        });
      });
    });

    it('6', () => {
      cy.mount(<Heading level={6}>Heading</Heading>);

      getElement('.heading', ({ css }) => {
        testCss(css, {
          'font-size': '20px',
          'line-height': '24px',
        });
      });
    });
  });

  describe('color', () => {
    it('primary', () => {
      cy.mount(
        <Heading color="primary" level={1}>
          Heading
        </Heading>
      );

      getElement('.heading', ({ css }) => {
        testCss(css, {
          color: '#1E88E5',
        });
      });
    });

    it('white', () => {
      cy.mount(
        <Heading color="white" level={1}>
          Heading
        </Heading>
      );

      getElement('.heading', ({ css }) => {
        testCss(css, {
          color: '#FFFFFF',
        });
      });
    });
  });
});
