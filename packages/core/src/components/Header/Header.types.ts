import type { Header } from '@pkg/types/elements';

export interface Props extends Header {
  flat?: boolean;
  position?: 'fixed' | 'sticky';
}
