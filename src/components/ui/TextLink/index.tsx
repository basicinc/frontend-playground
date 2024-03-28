import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/TextLink/index.module.css';

import type { IconName } from '@/components/ui/Icon/type';
import type { FC } from 'react';

type Props = {
  label: string;
  /** internal: 内部遷移, external: 外部遷移 */
  type?: 'internal' | 'external';
  href: string;
  icon?: {
    name: IconName;
    //** TODO: 検討中 */
    // size?: number;
    position?: 'left' | 'right';
  };
};

const LabelWrapper: FC<{ children: string; icon?: Props['icon'] }> = ({ children, icon }) => {
  if (icon === undefined) return <>{children}</>;

  const position = icon.position || 'left';

  if (position === 'left')
    return (
      <>
        {/* TODO: アイコンサイズ調整 */}
        {icon && <Icon name={icon.name} colorType='main' size={16} />}
        {children}
      </>
    );
  else
    return (
      <>
        {children}
        {/* TODO: アイコンサイズ調整 */}
        {icon && <Icon name={icon.name} colorType='main' size={16} />}
      </>
    );
};

export const TextLink: FC<Props> = ({ label, type = 'internal', href, icon }) => {
  switch (type) {
    // MEMO: ライブラリを使用する場合独自のanchor componentが提供されている場合があるため、用意している
    case 'internal':
      return (
        <a className={styles.textLink} href={href}>
          <LabelWrapper icon={icon}>{label}</LabelWrapper>
        </a>
      );
    case 'external':
      return (
        <a className={styles.textLink} href={href} target='_blank' rel='noopener noreferrer'>
          <LabelWrapper icon={icon}>{label}</LabelWrapper>
        </a>
      );
  }
};
