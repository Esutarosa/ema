import type { FC } from 'react';

import { Container, Section } from '@/components/layouts';
import { Grid, GridSidebar } from '@/components/grid';
import { getDustcellImages } from '@/config/actions/dustcell-image';

const DustcellPage: FC = async () => {
  const items = await getDustcellImages();

  return (
    <Section>
      <Container>
        <Grid
          items={items}
          sidebar={
            <div className='sticky top-36 space-y-4 mt-[-4px]'>
              <GridSidebar />
            </div>
          }
          header={
            <h1 className='text-4xl'>
              Collection of all albums
            </h1>
          }
        />
      </Container>
    </Section>
  );
}

export default DustcellPage;