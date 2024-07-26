'use client';

import {
  useRef,
  type FC,
  type PropsWithChildren
} from 'react';

import { cn } from '@/helpers/cn';

interface PanelProps extends PropsWithChildren {
  className?: string;
  hasActiveOnHover?: boolean;
}

const Panel: FC<PanelProps> = ({
  children,
  className,
  hasActiveOnHover
}) => {
  const outerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={outerRef} className={cn(
      'relative overflow-hidden rounded-xl p-4 shadow-xl flex items-center justify-center',
      'bg-background border border-foreground transition-all',
      hasActiveOnHover
        ? 'hover:bg-none hover:!border-primary'
        : '',
      className
    )}>
      {children}
    </div>
  );
}

export default Panel;