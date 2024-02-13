import { forwardRef } from 'react';

type Props = {
  label: string;
};

export const Button = forwardRef<HTMLButtonElement, Props>(({ label }, ref) => {
  return (
    <button ref={ref} type='button'>
      {label}
    </button>
  );
});

Button.displayName = 'Button';
