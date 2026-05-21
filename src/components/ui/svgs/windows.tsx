import type { SVGProps } from "react";

const Windows = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0078D6" />
    <g transform="translate(3,4)" fill="#FFF">
      <rect x="0" y="0" width="7.5" height="6" rx="1" />
      <rect x="8" y="0" width="7.5" height="6" rx="1" />
      <rect x="0" y="7" width="7.5" height="6" rx="1" />
      <rect x="8" y="7" width="7.5" height="6" rx="1" />
    </g>
  </svg>
);

export { Windows };
