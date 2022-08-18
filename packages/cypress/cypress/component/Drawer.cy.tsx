import '@bedrock-ui/core/css/bedrock-ui.css';

import { Drawer } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Drawer', () => {
  it('default-closed', () => {
    cy.mount(<Drawer open={false}>Just some test</Drawer>);

    getElement('.drawer', ({ css }) => {
      testCss(css, {
        'background-color': '#FFFFFF',
        bottom: '0px',
        'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        display: 'none',
        height: `${window.innerHeight}px`,
        'max-height': `${window.innerHeight}px`,
        'overflow-y': 'scroll',
        position: 'fixed',
        top: '0px',
        width: '320px',
        'z-index': '1100',
      });
    });

    getElement('.drawer-overlay', ({ css }) => {
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

  it('default-left-open', () => {
    cy.mount(
      <Drawer open={true} position="left">
        Just some test!
      </Drawer>
    );

    getElement('.drawer', ({ css }) => {
      testCss(css, {
        'background-color': '#FFFFFF',
        bottom: '0px',
        'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        display: 'flex',
        height: `${window.innerHeight}px`,
        'max-height': `${window.innerHeight}px`,
        'overflow-y': 'scroll',
        position: 'fixed',
        top: '0px',
        width: '305px', // TODO: There seems to be a scrolling-bar need to investigate. (SHOULD BE 320PX)
        'z-index': '1100',
        'flex-direction': 'column',
        left: '0px',
      });
    });

    getElement('.drawer-overlay', ({ css }) => {
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

  it('default-right-open', () => {
    cy.mount(
      <Drawer open={true} position="right">
        Just some test!
      </Drawer>
    );

    getElement('.drawer', ({ css }) => {
      testCss(css, {
        'background-color': '#FFFFFF',
        bottom: '0px',
        'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        display: 'flex',
        height: `${window.innerHeight}px`,
        'max-height': `${window.innerHeight}px`,
        'overflow-y': 'scroll',
        position: 'fixed',
        top: '0px',
        width: '305px', // TODO: There seems to be a scrolling-bar need to investigate. (SHOULD BE 320PX)
        'z-index': '1100',
        'flex-direction': 'column',
        right: '0px',
      });
    });

    getElement('.drawer-overlay', ({ css }) => {
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
