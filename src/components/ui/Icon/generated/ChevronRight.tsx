import type { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 14 25' {...props}>
    <path
      fill={props.color}
      fillRule='evenodd'
      d='m.612 3.158 10.6 10.601v-1.817L.613 22.543a1.284 1.284 0 1 0 1.817 1.817l10.6-10.601a1.284 1.284 0 0 0 0-1.817L2.43 1.341A1.284 1.284 0 1 0 .612 3.158'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChevronRight;
