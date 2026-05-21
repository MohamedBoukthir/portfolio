import type { SVGProps } from "react";

const Intellij = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#000" />
    <g transform="translate(3,3)" fill="#FFF">
      <rect x="0" y="0" width="18" height="18" rx="2" fill="#111" />
      <text x="9" y="13" textAnchor="middle" fontSize="8" fontFamily="Arial, Helvetica, sans-serif" fill="#61DAFB">IJ</text>
    </g>
  </svg>
);

export { Intellij };
