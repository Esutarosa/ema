import type { FC } from 'react';

import SVG from '@/components/SVG';

import { cn } from '@/helpers/cn';

interface SpinnerProps {
  size?: number;
  color?: 'text' | 'dim' | 'primary';
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({
  size = 12,
  color = 'light',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex',
        color === 'primary' && 'text-primary',
        color === 'dim' && 'text-foreground/50',
        color === 'text' && 'text-foreground',
        className
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      <SVG
        size={size}
        viewBox={`0 0 ${size} ${size}`}
        stroke='currentColor'
        strokeWidth={12 / size * 2}
        pathFill='none'
        icon='M11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11'
        className='animate-loader-pulse'
      />
    </span>
  );
}

export default Spinner;