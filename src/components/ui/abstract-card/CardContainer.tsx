'use client';

import {
  useRef,
  useState,
  type FC,
  type MouseEvent,
  type PropsWithChildren
} from 'react';

import { MouseEnterContext } from '@/components/ui/abstract-card';

import { cn } from '@/helpers/cn';

interface CardContainerProps extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
}

const CardContainer: FC<CardContainerProps> = ({
  children,
  className,
  containerClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);

    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          'flex items-center justify-center',
          containerClassName
        )}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'flex items-center justify-center relative transition-all duration-200 ease-linear',
            className
          )}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export default CardContainer;