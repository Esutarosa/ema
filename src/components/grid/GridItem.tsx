import type { FC } from 'react';
import type { TDustcellImages } from '@/types/TDustcellImages';

import AnimateItems from '@/components/AnimateItems';
import { ImageWithFallback } from '@/components/images';

import Link from 'next/link';

import { cn } from '@/helpers/cn';

interface GridItemProps {
  items: TDustcellImages[];
  small?: boolean;
  animate?: boolean;
  canStart?: boolean;
  fast?: boolean;
  animateOnFirstLoadOnly?: boolean;
  staggerOnFirstLoadOnly?: boolean;
  onAnimationComplete?: () => void;
}

const GridItem: FC<GridItemProps> = ({
  items,
  small,
  animate = true,
  canStart,
  fast,
  animateOnFirstLoadOnly,
  staggerOnFirstLoadOnly = true,
  onAnimationComplete,
}) => {
  const isHighDensity = items.length > 40;

  return (
    <AnimateItems
      className={cn(
        'grid gap-0.5 sm:gap-1',
        small
          ? 'grid-cols-3 xs:grid-cols-6'
          : isHighDensity
            ? 'grid-cols-2 xs:grid-cols-4 lg:grid-cols-6'
            : 'grid-cols-2 sm:grid-cols-4',
        'items-center',
      )}
      type={animate ? undefined : 'none'}
      canStart={canStart}
      duration={fast ? 0.3 : undefined}
      staggerDelay={0.075}
      distanceOffset={40}
      animateOnFirstLoadOnly={animateOnFirstLoadOnly}
      staggerOnFirstLoadOnly={staggerOnFirstLoadOnly}
      onAnimationComplete={onAnimationComplete}
      items={items.map((item, index) => (
        <Link href={item.href || ''} key={index} target='_blank'>
          {item.src ? (
            <ImageWithFallback
              src={item.src}
              alt={item.alt || 'DUSTCELL COVER'}
              width={600}
              height={400}
              blurDataURL='/images/blur.png'
              blurCompatibilityLevel='high'
              imgClassName='w-[600px] object-cover rounded-sm shadow-lg'
              priority
            />
          ) : (
            <>{item.alt || 'DUSTCELL COVER'}</>
          )}
        </Link>
      ))}
      itemKeys={items.map((item, index) => index.toString())}
    />
  );
}

export default GridItem;