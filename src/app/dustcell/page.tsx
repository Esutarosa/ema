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
            <div className='sticky top-14 space-y-4 mt-[-4px]'>
              <GridSidebar />
            </div>
          }
        />
      </Container>
    </Section>
  );
}

export default DustcellPage;