import { forwardRef, useId } from 'react';

import styles from '@/components/ui/Checkbox/index.module.css';
import { Icon } from '@/components/ui/Icon';

import type { ComponentProps, FC } from 'react';

type Props = {
  label: string;
  indeterminate?: boolean;
  isError?: boolean;
} & ComponentProps<'input'>;

type State = 'indeterminate' | 'unchecked' | 'checked';

const CheckIcon: FC<{ state: State }> = ({ state }) => {
  switch (state) {
    case 'indeterminate':
      return <Icon name='indeterminate-active' size={24} colorType='dark' />;
    case 'unchecked':
      return <Icon name='checkbox-inactive' size={24} colorType='dark' />;
    case 'checked':
      return <Icon name='checkbox-active' size={24} colorType='main' />;
  }
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ label, indeterminate, isError, ...inputProps }, ref) => {
  const id = useId();
  const state: State = indeterminate ? 'indeterminate' : inputProps.checked ? 'checked' : 'unchecked';

  return (
    <label className={styles.checkbox}>
      {/* TODO: sizeの扱い */}
      <CheckIcon state={state} />

      <input {...inputProps} ref={ref} type='checkbox' aria-labelledby={id} aria-invalid={isError} />
      <span id={id} className={styles.label}>
        {label}
      </span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
