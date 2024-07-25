import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/helpers/cn';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(
      'container px-3 py-14 md:py-20',
      className
    )} {...props}>
      {children}
    </div>
  );
}

export default Container;