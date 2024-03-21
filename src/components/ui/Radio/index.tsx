import { forwardRef, memo, useId } from 'react';

import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/Radio/index.module.css';

import type { IconProps } from '@/components/ui/Icon';
import type { ComponentProps, FC } from 'react';

type Props = {
  label: string;
  isError?: boolean;
} & ComponentProps<'input'>;

type State = 'unchecked' | 'checked';

/* TODO: 使用アイコンの定義 */
const ICON_PROPS: { [key in State]: Omit<IconProps, 'size'> } = {
  unchecked: { name: 'radio-button-fill', colorType: 'main' },
  checked: { name: 'radio-button-checked-fill', colorType: 'main' },
};

const RadioIcon: FC<{ state: State }> = ({ state }) => {
  const iconProps = { ...ICON_PROPS[state], size: 24 };

  return <Icon {...iconProps} />;
};

const _Radio = forwardRef<HTMLInputElement, Props>(({ label, isError, ...inputProps }, ref) => {
  const id = useId();
  const state: State = inputProps.checked ? 'checked' : 'unchecked';

  return (
    <label className={styles.radio}>
      {/* TODO: sizeの扱い */}
      <RadioIcon state={state} />

      <input {...inputProps} ref={ref} type='radio' aria-labelledby={id} aria-invalid={isError} />
      <span id={id} className={styles.label}>
        {label}
      </span>
    </label>
  );
});

_Radio.displayName = '_Radio';

export const Radio = memo(_Radio);
