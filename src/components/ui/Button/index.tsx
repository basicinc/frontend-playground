import { clsx } from 'clsx';
import { forwardRef } from 'react';

import styles from '@/components/ui/Button/index.module.css';
import { Icon } from '@/components/ui/Icon';

import type { IconName } from '@/components/ui/Icon/type';
import type { ComponentProps } from 'react';

type Props = {
  theme: 'primary' | 'primaryOutlined' | 'secondary' | 'secondaryOutlined' | 'paid' | 'danger' | 'dangerOutline';
  label: string;
  iconName?: IconName;
  fullWidth?: boolean;
} & ComponentProps<'button'>;

const THEME_CLASSES: { [key in Props['theme']]: string } = {
  primary: styles.primary,
  primaryOutlined: styles.primaryOutlined,
  secondary: styles.secondary,
  secondaryOutlined: styles.secondaryOutlined,
  paid: styles.paid,
  danger: styles.danger,
  dangerOutline: styles.dangerOutlined,
} as const;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ theme = 'primary', label, iconName, fullWidth, ...buttonProps }, ref) => {
    return (
      <button
        {...buttonProps}
        className={clsx(styles.buttonContainer, THEME_CLASSES[theme], fullWidth ? styles.fullWidth : '')}
        ref={ref}
      >
        {/* TODO: sizeは文字サイズに合わせて要調整 */}
        {iconName !== undefined && <Icon name={iconName} size={16} />}

        {label}
      </button>
    );
  },
);

Button.displayName = 'Button';
