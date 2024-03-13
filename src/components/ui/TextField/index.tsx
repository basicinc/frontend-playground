import { forwardRef, useId } from 'react';

import styles from '@/components/ui/TextField/index.module.css';

import type { ComponentProps } from 'react';

type Props = {
  label: string;
  errorMessage?: string;
} & ComponentProps<'input'>;

export const TextField = forwardRef<HTMLInputElement, Props>(({ label, errorMessage, ...inputProps }, ref) => {
  const isError = !!errorMessage;
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={styles.textField}>
      <label htmlFor={id}>
        {label}

        {inputProps.required && <span className={styles.required}>必須</span>}
      </label>
      <input {...inputProps} ref={ref} id={id} aria-invalid={isError} aria-errormessage={errorId} />

      {isError && (
        <span className={styles.errorText} id={errorId}>
          {errorMessage}
        </span>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';
