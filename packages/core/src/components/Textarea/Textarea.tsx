import React from 'react';
import clsx from 'clsx';

import type { Props } from './Textarea.types';

function Textarea({ className, error = false, success = false, ...props }: Props) {
  return <textarea {...props} className={clsx('textarea', { error, success }, className)} />;
}

export default Textarea;
