import { useId, type FC, useCallback } from 'react';

import styles from '@/components/groups/RadioGroup/index.module.css';
import { Radio } from '@/components/ui/Radio';

import type { ChangeEvent } from 'react';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  label: string;
  name: string;
  description?: string;
  value?: string | undefined;
  options: Option[];
  required?: boolean;
  errorMessage?: string;
  direction?: 'column' | 'row';
  onChange: (value: string) => void;
};

export const RadioGroup: FC<Props> = ({
  label,
  name,
  description,
  value,
  options,
  required,
  errorMessage,
  direction = 'column',
  onChange,
}) => {
  const id = useId();
  const isError = !!errorMessage;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange(newValue);
    },
    [onChange],
  );

  return (
    <fieldset className={styles.radioGroup} aria-describedby={id}>
      <legend>
        {label}

        {/* TODO: バッジのコンポーネント化 */}
        {required && <span className={styles.required}>必須</span>}
      </legend>

      {!!description && <p className={styles.description}>{description}</p>}

      <div role='radio-group' className={styles.group} data-direction={direction}>
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
            required={required}
            checked={value === option.value}
            aria-describedby={id}
            onChange={handleChange}
          />
        ))}
      </div>

      {isError && (
        <p className={styles.errorText} id={id}>
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
};
