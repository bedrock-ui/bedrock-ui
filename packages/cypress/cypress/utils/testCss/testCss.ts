import { toHex } from '../toHex';

function testCss(cssObject: CSSStyleDeclaration, object: Record<string, string>) {
  Object.keys(object).forEach((property) => {
    let value = object[property];
    let propertyValue = cssObject.getPropertyValue(property);

    if (value.startsWith('#')) {
      propertyValue = toHex(propertyValue);
    }

    expect(propertyValue).to.eq(value);
  });
}

export default testCss;
