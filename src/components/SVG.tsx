import type { FC } from 'react';

interface SVGProps {
  icon: string;
  size?: number;
  className?: string;
  viewBox?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeLinejoin?: 'bevel' | 'miter' | 'round';
  pathFill?: string;
}

const SVG: FC<SVGProps> = ({
  icon,
  size = 24,
  className,
  viewBox = '0 0 24 24',
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  pathFill = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path
        d={icon}
        fill={pathFill}
        fillRule='evenodd'
        clipPath='evenodd'
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </svg>
  );
}

export default SVG;