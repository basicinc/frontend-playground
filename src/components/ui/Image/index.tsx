import type { ComponentProps, FC } from 'react';

type Props = { src: string; width: number; height: number } & ComponentProps<'img'>;

/** 画像を取り扱うコンポーネント */
export const Image: FC<Props> = ({ src, width, height, ...imgProps }) => {
  return (
    <img {...imgProps} alt={imgProps.alt === undefined ? '' : imgProps.alt} src={src} width={width} height={height} />
  );
};
