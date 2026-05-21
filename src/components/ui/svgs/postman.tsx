import type { SVGProps } from "react";

const Postman = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="transparent" />
    <g fillRule="evenodd">
      <path d="M3 6.5L12 3l9 3.5v7L12 21 3 13.5v-7z" fill="#FF6C37" />
      <path d="M9 9l6 3-6 3V9z" fill="#FFF" opacity="0.95" />
    </g>
  </svg>
);

export { Postman };
