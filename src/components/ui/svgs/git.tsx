import type { SVGProps } from "react";

const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="transparent" />
    <g fill="none" fillRule="evenodd">
      <path d="M5.5 11.5l3.6 1.9v2.1a1.6 1.6 0 1 0 1.6 1.6v-5.6L9.2 9.3a1.6 1.6 0 1 0-1.7 2.2z" fill="#F34F29" />
      <circle cx="5.5" cy="11.5" r="1.7" fill="#F34F29" />
      <circle cx="12.5" cy="6.5" r="1.7" fill="#F34F29" />
      <circle cx="16.5" cy="14.5" r="1.7" fill="#F34F29" />
    </g>
  </svg>
);

export { Git };
