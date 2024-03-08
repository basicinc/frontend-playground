import { forwardRef, useId } from 'react';

import styles from '@/components/ui/TextArea/index.module.css';

import type { ComponentProps } from 'react';

type Props = {
  label: string;
  errorMessage?: string;
} & ComponentProps<'textarea'>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ label, errorMessage, ...textAreaProps }, ref) => {
  const isError = !!errorMessage;
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={styles.textArea}>
      <label htmlFor={id}>
        {label}

        {textAreaProps.required && <span className={styles.required}>必須</span>}
      </label>
      <textarea
        {...textAreaProps}
        className={isError ? styles.error : undefined}
        ref={ref}
        id={id}
        aria-invalid={isError}
        aria-errormessage={errorId}
      />

      {isError && (
        <span className={styles.errorText} id={errorId}>
          {errorMessage}
        </span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';
