import type { SVGProps } from "react";

const Vscode = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#006ACC" />
    <g transform="translate(3.5,3.5)" fill="#FFF">
      <path d="M2 2L10 6L2 10V2Z" opacity="0.95" />
      <path d="M12 2l6 4-6 4V2z" opacity="0.95" />
      <rect x="4" y="12" width="8" height="2" rx="0.5" />
    </g>
  </svg>
);

export { Vscode };
