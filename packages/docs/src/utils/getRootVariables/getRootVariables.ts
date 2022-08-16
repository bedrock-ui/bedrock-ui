export interface VariablePair {
  variable: string;
  value: string;
}

function getRootVariables(): VariablePair[] {
  if (typeof window === 'undefined') {
    return [];
  }

  return Array.from(document.styleSheets)
    .filter((sheet) => sheet.href === null || sheet.href.startsWith(window.location.origin))
    .reduce((variables: string[], sheet: CSSStyleSheet) => {
      const cssRules = Array.from(sheet.cssRules) as CSSStyleRule[];

      const rootVariables = cssRules
        .filter((rules) => rules.selectorText === ':root')
        .reduce(
          (rules: string[], rule) => [
            ...rules,
            ...Array.from(rule.style).filter((style) => style.startsWith('--')),
          ],
          []
        );

      return [...variables, ...rootVariables];
    }, [])
    .map((variable) => ({
      variable,
      value: getComputedStyle(document.documentElement).getPropertyValue(variable).trim(),
    }));
}

export default getRootVariables;
