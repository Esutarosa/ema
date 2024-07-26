'use client';

import type { FC } from 'react';
import type { TDustcellImages } from '@/types/TDustcellImages';

import { GridItem, GridSite } from '@/components/grid';

import AnimateItems from '@/components/AnimateItems';

import { cn } from '@/helpers/cn';

interface GridProps {
  items?: TDustcellImages[];
  header?: JSX.Element;
  sidebar?: JSX.Element;
}

const Grid: FC<GridProps> = ({
  items,
  header,
  sidebar,
}) => {
  return (
    <GridSite
      contentMain={
        <div className={cn(
          header && 'space-y-8 mt-4',
        )}>
          {header && (
            <AnimateItems
              type='bottom'
              items={[header]}
              animateOnFirstLoadOnly
            />
          )}
          <div className='space-y-0.5 sm:space-y-1'>
            {items && (
              <GridItem items={items} />
            )}
          </div>
        </div>
      }
      contentSide={sidebar}
      sideHiddenOnMobile
    />
  );
}

export default Grid;