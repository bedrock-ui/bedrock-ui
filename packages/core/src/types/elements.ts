import type {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  TableHTMLAttributes,
} from 'react';

export type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type Hr = DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;

export type Input = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type Li = DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export type Ul = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export type Table = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export type Header = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
