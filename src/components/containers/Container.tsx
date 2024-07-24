import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/helpers/cn';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(
      'container',
      className
    )}>
      {children}
    </div>
  );
}

export default Container;