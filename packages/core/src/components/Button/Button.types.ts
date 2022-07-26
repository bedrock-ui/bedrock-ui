export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  square?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
}
