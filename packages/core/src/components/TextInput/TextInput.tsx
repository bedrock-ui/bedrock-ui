import React from 'react';
import clsx from 'clsx';

import type { Props } from './TextInput.types';

function TextInput({ className, error = false, success = false, ...props }: Props) {
  return <input {...props} className={clsx('text-input', className, { error, success })} />;
}

export default TextInput;
