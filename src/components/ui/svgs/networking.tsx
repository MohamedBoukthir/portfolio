import type { SVGProps } from "react";

const Networking = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="transparent" />
    <g fill="none" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="1.8" fill="#10B981" stroke="none" />
      <circle cx="6" cy="17" r="1.8" fill="#10B981" stroke="none" />
      <circle cx="18" cy="17" r="1.8" fill="#10B981" stroke="none" />
      <path d="M12 6.8v6.4M8.2 15.2L12 12M15.8 15.2L12 12" />
    </g>
  </svg>
);

export { Networking };
