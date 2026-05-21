import type { SVGProps } from "react";

const Linux = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#000" />
    <g transform="translate(3,4)" fill="#FFF">
      <ellipse cx="9" cy="8" rx="6" ry="5" />
      <path d="M6 6c0 1 1 1 3 1s3 0 3-1-1-2-3-2S6 5 6 6z" fill="#000" />
      <path d="M8.5 9.5c.5.7 1.6.7 2.1 0 .6-.7.1-1.6-.8-1.6-.9 0-1.5.9-.9 1.6z" />
    </g>
  </svg>
);

export { Linux };
