interface Options {
  prefix?: string;
}

function breakpoints<T>(value: T, options?: Options) {
  const { prefix = '' } = options || {};

  if (typeof value !== 'object') {
    return `${prefix}${value}`;
  }

  return Object.entries(value)
    .map((current) => `${prefix}${current.reverse().join('-')}`)
    .join(' ');
}

export default breakpoints;
