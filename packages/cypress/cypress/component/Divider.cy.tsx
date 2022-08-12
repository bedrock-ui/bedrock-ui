import '@bedrock-ui/core/css/bedrock-ui.css';

import { Divider } from '@bedrock-ui/core';
import { getElement, testCss } from 'utils';

describe('Divider', () => {    
    it("default", () => {
        cy.mount(<Divider />);

        getElement(".divider", ({css}) => {
            testCss(css, {
                "width": `${document.body.clientWidth}px`,
            })
        })
    })

    it("dashed", () => {
        cy.mount(<Divider variant='dashed' />);

        getElement(".divider", ({css}) => {
            testCss(css, {
                "width": `${document.body.clientWidth}px`,
                "border-style": "dashed"
            })
        })
    })

    it("dotted", () => {
        cy.mount(<Divider variant="dotted"/>);

        getElement(".divider", ({css}) => {
            testCss(css, {
                "width": `${document.body.clientWidth}px`,
                "border-style": "dotted"
            })
        })
    })

});