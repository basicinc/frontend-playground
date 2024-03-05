import styles from '@/components/ui/Divider/index.module.css';

import type { DividerSpacing } from '@/components/ui/Divider/type';
import type { FC } from 'react';

type Props = {
  verticalSpacing?: DividerSpacing;
  horizontalSpacing?: DividerSpacing;
};

export const Divider: FC<Props> = ({ verticalSpacing, horizontalSpacing }) => {
  return (
    <hr
      className={styles.divider}
      aria-hidden
      data-vertical-spacing={verticalSpacing}
      data-horizontal-spacing={horizontalSpacing}
    />
  );
};
