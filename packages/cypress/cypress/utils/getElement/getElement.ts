interface CallbackOptions {
  css: CSSStyleDeclaration;
  element: HTMLElement;
}

type Callback = (callbackOptions: CallbackOptions) => void;

function getElement(selector: string, callback: Callback) {
  cy.get(selector).then((elements) => {
    const element = elements[0];

    const browser = element.ownerDocument.defaultView;
    const css = browser.getComputedStyle(element);

    callback({ css, element });
  });
}

export default getElement;
