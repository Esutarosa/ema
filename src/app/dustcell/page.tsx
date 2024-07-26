import type { FC } from 'react';

import { Container, Section } from '@/components/layouts';
import { Grid, GridItems, GridSidebar } from '@/components/grid';


const items: GridItems[] = [
  {
    src: '/images/hero/1.jpg',
    href: '/page1',
    alt: 'Sample Image 1',
  },
  {
    src: '/images/hero/4.jpg',
    href: '/page2',
    alt: 'Sample Image 2',
  },
  {
    src: '/images/hero/7.jpg',
    href: '/page3',
    alt: 'Sample Image 3',
  },
  {
    src: '/images/hero/1.jpg',
    href: '/page1',
    alt: 'Sample Image 1',
  },
  {
    src: '/images/hero/4.jpg',
    href: '/page2',
    alt: 'Sample Image 2',
  },
  {
    src: '/images/hero/7.jpg',
    href: '/page3',
    alt: 'Sample Image 3',
  },
  {
    src: '/images/hero/1.jpg',
    href: '/page1',
    alt: 'Sample Image 1',
  },
  {
    src: '/images/hero/4.jpg',
    href: '/page2',
    alt: 'Sample Image 2',
  },
  {
    src: '/images/hero/7.jpg',
    href: '/page3',
    alt: 'Sample Image 3',
  },
];

const DustcellPage: FC = () => {
  return (
    <Section>
      <Container>
        <Grid
          sidebar={
            <div className='sticky top-14 space-y-4 mt-[-4px]'>
              <GridSidebar />
            </div>
          }
          items={items}
        />
      </Container>
    </Section>
  );
}

export default DustcellPage;