interface Options {
  prefix?: string;
}

function breakpoints<T>(value: T, options?: Options): string {
  const { prefix = '' } = options || {};

  if (typeof value !== 'object' && value !== undefined && value !== null) {
    return `${prefix}${value}`;
  }

  if (typeof value === 'object' && value) {
    return Object.entries(value)
      .map((current) => `${prefix}${current.reverse().join('-')}`)
      .join(' ');
  }

  return '';
}

export default breakpoints;
