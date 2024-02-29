import { forwardRef } from 'react';

import styles from '@/components/ui/Toggle/index.module.css';

import type { ChangeEvent } from 'react';

type Props = {
  label: string;
  name: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const Toggle = forwardRef<HTMLInputElement, Props>(({ label, name, checked, onChange, disabled }, ref) => {
  return (
    <label className={styles.toggle}>
      <div className={styles.switch}>
        <input ref={ref} type='checkbox' name={name} checked={checked} onChange={onChange} disabled={disabled} />
        <div className={styles.circle} />
        <div className={styles.base} />
      </div>

      <span className={styles.label}>{label}</span>
    </label>
  );
});

Toggle.displayName = 'Toggle';
