import type { FC } from 'react';

import { Container, Section } from '@/components/layouts';

import { Social } from '@/components/social';

const SocialPage: FC = () => {
  return (
    <Section>
      <Container>
        <Social />
      </Container>
    </Section>
  );
}

export default SocialPage;