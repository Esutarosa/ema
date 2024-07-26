import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/helpers/cn';

interface CardBodyProps extends PropsWithChildren {
  className?: string;
}

const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return (
    <div className={cn(
      '[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
      className
    )}>
      {children}
    </div>
  );
}

export default CardBody;