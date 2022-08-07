import type { CSSProperties } from 'react';
import type { Spacing } from 'types/spacing';

const functions = {
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
} as const;

function m(value: number): CSSProperties {
  return {
    margin: `calc(var(--spacing) * ${value}px)`,
  };
}

function mx(value: number): CSSProperties {
  return {
    ...ml(value),
    ...mr(value),
  };
}

function my(value: number): CSSProperties {
  return {
    ...mt(value),
    ...mb(value),
  };
}

function mt(value: number): CSSProperties {
  return {
    marginTop: `calc(var(--spacing) * ${value}px)`,
  };
}

function mb(value: number): CSSProperties {
  return {
    marginBottom: `calc(var(--spacing) * ${value}px)`,
  };
}

function ml(value: number): CSSProperties {
  return {
    marginLeft: `calc(var(--spacing) * ${value}px)`,
  };
}

function mr(value: number): CSSProperties {
  return {
    marginRight: `calc(var(--spacing) * ${value}px)`,
  };
}

function p(value: number): CSSProperties {
  return {
    padding: `calc(var(--spacing) * ${value}px)`,
  };
}

function px(value: number): CSSProperties {
  return {
    ...pl(value),
    ...pr(value),
  };
}

function py(value: number): CSSProperties {
  return {
    ...pt(value),
    ...pb(value),
  };
}

function pt(value: number): CSSProperties {
  return {
    paddingTop: `calc(var(--spacing) * ${value}px)`,
  };
}

function pb(value: number): CSSProperties {
  return {
    paddingBottom: `calc(var(--spacing) * ${value}px)`,
  };
}

function pl(value: number): CSSProperties {
  return {
    paddingLeft: `calc(var(--spacing) * ${value}px)`,
  };
}

function pr(value: number): CSSProperties {
  return {
    paddingRight: `calc(var(--spacing) * ${value}px)`,
  };
}

function spacing(spacing: Spacing): CSSProperties {
  let styles: CSSProperties = {};

  for (const key in spacing) {
    const value = spacing[key as keyof Spacing];

    if (value !== undefined) {
      const fn = functions[key as keyof Spacing];

      styles = {
        ...fn(value),
      };
    }
  }

  return styles;
}

export default spacing;
