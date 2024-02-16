import type { SVGProps } from 'react';
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 25 28' {...props}>
    <path
      fill={props.color}
      fillRule='evenodd'
      d='M12.016 13.797a6.673 6.673 0 1 1 0-13.346 6.673 6.673 0 0 1 0 13.346m12.011 12.011a1.335 1.335 0 0 1-2.67 0v-2.669a4.004 4.004 0 0 0-4.004-4.004H6.676a4.004 4.004 0 0 0-4.004 4.004v2.669a1.335 1.335 0 0 1-2.67 0v-2.669a6.673 6.673 0 0 1 6.673-6.673h10.677a6.673 6.673 0 0 1 6.673 6.673v2.669zM16.02 7.123a4.004 4.004 0 1 1-8.009 0 4.004 4.004 0 0 1 8.009 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUser;
