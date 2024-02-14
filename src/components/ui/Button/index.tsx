import { forwardRef } from 'react';

import styles from '@/components/ui/Button/index.module.css';

type Props = {
  label: string;
  onClick?: () => void;
};

export const Button = forwardRef<HTMLButtonElement, Props>(({ label, onClick }, ref) => {
  return (
    <button className={styles.buttonContainer} ref={ref} type='button' onClick={onClick}>
      {label}
    </button>
  );
});

Button.displayName = 'Button';
