import { SVGProps } from 'react';

export function MantineLogo({ 
  size = 30, 
  style,
  ...props 
}: SVGProps<SVGSVGElement> & { 
  size?: number 
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      style={{
        ...style,
        fill: 'currentColor'
      }}
      {...props}
    >
      <path d="M250 50 L450 250 L250 450 L50 250 Z" fill="#228BE6" />
      <path d="M250 50 L150 150 L250 250 L350 150 Z" fill="#4DABF7" />
      <path d="M250 250 L150 350 L250 450 L350 350 Z" fill="#74C0FC" />
    </svg>
  );
}