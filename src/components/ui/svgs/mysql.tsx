import type { SVGProps } from "react";

const Mysql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#00758F" />
    <g transform="translate(4,5)" fill="#FFF">
      <ellipse cx="8" cy="4" rx="8" ry="3" opacity="0.95" />
      <path d="M0 4v3c0 2 4 3.5 8 3.5s8-1.5 8-3.5V4" opacity="0.95" />
      <path d="M2 10c2 1 5 1.8 6 1.8s4-.8 6-1.8" stroke="#FFF" strokeWidth="0.6" fill="none" />
    </g>
  </svg>
);

export { Mysql };
