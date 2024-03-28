import { type FC, type ReactNode } from 'react';

import { Button } from '@/components/ui/Button';
import styles from '@/components/ui/Dialog/index.module.css';
import { IconButton } from '@/components/ui/IconButton';
import { Image } from '@/components/ui/Image';
import { TextLink } from '@/components/ui/TextLink';

type Header = {
  title: string;
  description: string;
};

type Footer = {
  contents: FooterContent[];
};
type FooterContent =
  | {
      type: 'button';
      label: string;
      onClick: () => void;
    }
  | {
      type: 'link';
      label: string;
      href: string;
    };

type Props = {
  isOpen: boolean;
  onClose: () => void;
  thumbnailSrc?: string;
  header: Header;
  body: ReactNode;
  footer: Footer;
};

export const Dialog: FC<Props> = ({ isOpen, onClose, thumbnailSrc, header, body, footer }) => {
  return (
    <dialog className={styles.dialog} open={isOpen}>
      <div className={styles.wrapper}>
        <span className={styles.close}>
          <IconButton ariaLabel='閉じる' iconName='close-circle' size={24} colorType='dark-trans' onClick={onClose} />
        </span>

        {thumbnailSrc && (
          <div className={styles.thumbnail}>
            <Image src={thumbnailSrc} width={320} height={180} />
          </div>
        )}

        <div className={styles.contents}>
          <div className={styles.header}>
            <h2>{header.title}</h2>
            <p className={styles.description}>{header.description}</p>
          </div>

          <div>{body}</div>

          <div className={styles.footer}>
            {footer.contents.map((content, index) => {
              switch (content.type) {
                case 'link':
                  return <TextLink key={index} label={content.label} href={content.href} />;
                case 'button':
                  return <Button key={index} label={content.label} onClick={content.onClick} theme='primary' />;
              }
            })}
          </div>
        </div>
      </div>
    </dialog>
  );
};
