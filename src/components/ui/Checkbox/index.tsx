import { forwardRef, memo, useId } from 'react';

import styles from '@/components/ui/Checkbox/index.module.css';
import { Icon } from '@/components/ui/Icon';

import type { IconProps } from '@/components/ui/Icon';
import type { ComponentProps, FC } from 'react';

type Props = {
  label: string;
  indeterminate?: boolean;
  isError?: boolean;
} & ComponentProps<'input'>;

type State = 'indeterminate' | 'unchecked' | 'checked';

const ICON_PROPS: { [key in State]: Omit<IconProps, 'size'> } = {
  indeterminate: { name: 'indeterminate-active', colorType: 'dark' },
  unchecked: { name: 'checkbox-inactive', colorType: 'dark' },
  checked: { name: 'checkbox-active', colorType: 'main' },
};

const CheckIcon: FC<{ state: State }> = ({ state }) => {
  const iconProps = { ...ICON_PROPS[state], size: 24 };

  return <Icon {...iconProps} />;
};

const _Checkbox = forwardRef<HTMLInputElement, Props>(({ label, indeterminate, isError, ...inputProps }, ref) => {
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

_Checkbox.displayName = '_Checkbox';

export const Checkbox = memo(_Checkbox);
