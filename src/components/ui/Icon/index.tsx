import SvgChevronRight from '@/components/ui/Icon/generated/ChevronRight';
import SvgTrash from '@/components/ui/Icon/generated/Trash';
import SvgUser from '@/components/ui/Icon/generated/User';

import type { IconName } from '@/components/ui/Icon/type';
import type { FC, SVGProps } from 'react';

type Props = {
  name: IconName;
  size: number;
  color?: string;
};

export const Icon: FC<Props> = ({ name, size, color = '#000' }) => {
  const iconProps: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    color,
  };

  switch (name) {
    case 'user':
      return <SvgUser {...iconProps} />;
    case 'trash':
      return <SvgTrash {...iconProps} />;
    case 'chevron-right':
      return <SvgChevronRight {...iconProps} />;
  }
};
