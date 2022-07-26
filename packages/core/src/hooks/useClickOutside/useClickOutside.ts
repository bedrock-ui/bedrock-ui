import { useEffect } from 'react';

import type { MutableRefObject } from 'react';

function useClickOutside<T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  visible: boolean,
  onClickOutside: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (visible && ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside, ref, visible]);
}

export default useClickOutside;
