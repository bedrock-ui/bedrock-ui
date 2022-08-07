import responsiveValues from './responsiveValues';

describe('responsiveValues', () => {
  test('returns value with true match desktop', () => {
    const result = responsiveValues(
      { mobile: false, tablet: false, desktop: true },
      { mobile: 0, tablet: 1, desktop: 2 }
    );

    expect(result).toEqual(2);
  });

  test('returns value with true match tablet', () => {
    const result = responsiveValues(
      { mobile: false, tablet: true, desktop: false },
      { mobile: 0, tablet: 1, desktop: 2 }
    );

    expect(result).toEqual(1);
  });

  test('returns value with true match mobile', () => {
    const result = responsiveValues(
      { mobile: true, tablet: false, desktop: false },
      { mobile: 0, tablet: 1, desktop: 2 }
    );

    expect(result).toEqual(0);
  });

  test('returns undefined when no match', () => {
    const result = responsiveValues(
      { mobile: true, tablet: false, desktop: false },
      { mobileTypo: 0, tablet: 1, desktop: 2 }
    );

    expect(result).toEqual(undefined);
  });
});
