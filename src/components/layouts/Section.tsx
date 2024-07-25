import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/helpers/cn';

interface SectionProps extends PropsWithChildren {
  className?: string;
  variant?: 'grid' | 'flex';
  relative?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  className,
  variant = 'flex',
  relative = false,
  ...props
}) => {
  return (
    <section className={cn(
      'w-full',
      variant === 'grid'
        ? 'grid grid-cols-12 gap-3'
        : 'flex flex-col gap-3',
      relative && 'relative z-10',
      className
    )} {...props}>
      {children}
    </section>
  );
}

export default Section;