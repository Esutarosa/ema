import type { FC } from 'react';
import AnimateItems from '@/components/AnimateItems';

const GridSidebar: FC = () => {
  return (
    <AnimateItems className='flex flex-col gap-3'>
      <p className='py-4'>
        Started in October 2019, the two-member music unit consists of vocalist EMA and composer Misumi. Both members have careers as singers and Vocaloid producers.
      </p>
      <p className='py-4'>
        Their first song, &quot;CULT,&quot; gained significant attention from their collaboration and exceeded 1 million views within three weeks of its release. Their second song, &quot;STIGMA,&quot; also quickly surpassed 1 million views, and they have continued to release songs with great passion.
      </p>
      <p className='py-4'>
        Their YouTube channel has over 100,000 subscribers, making them a notable presence. The release of their 1st album &quot;SUMMIT&quot; on May 20, 2020, and the announcement of their first solo live performance on July 31 have been decided.
      </p>
    </AnimateItems>
  );
}

export default GridSidebar;
