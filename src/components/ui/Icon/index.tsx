import { CheckboxActive, CheckboxInactive, IndeterminateActive } from '@/components/ui/Icon/generated';
import SvgChevronRight from '@/components/ui/Icon/generated/ChevronRight';
import SvgTrash from '@/components/ui/Icon/generated/Trash';
import SvgUser from '@/components/ui/Icon/generated/User';
import styles from '@/components/ui/Icon/index.module.css';

import type { IconColorType, IconName } from '@/components/ui/Icon/type';
import type { FC, SVGProps } from 'react';

type Props = {
  name: IconName;
  size: number;
  colorType?: IconColorType;
};

export const Icon: FC<Props> = ({ name, size, colorType = 'dark' }) => {
  const iconProps: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    className: styles.icon,
    'aria-hidden': true,
    ['data-type' as string]: colorType,
  };

  switch (name) {
    case 'user':
      return <SvgUser {...iconProps} />;
    case 'trash':
      return <SvgTrash {...iconProps} />;
    case 'chevron-right':
      return <SvgChevronRight {...iconProps} />;
    case 'checkbox-active':
      return <CheckboxActive {...iconProps} />;
    case 'checkbox-inactive':
      return <CheckboxInactive {...iconProps} />;
    case 'indeterminate-active':
      return <IndeterminateActive {...iconProps} />;
  }
};
