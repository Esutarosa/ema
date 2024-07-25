import type { FC } from 'react';

import { Section, Container } from '@/components/layouts';

interface HeroProps { }

const Hero: FC<HeroProps> = ({ }) => {
  return (
    <Section>
      <Container>
        Hero
      </Container>
    </Section>
  );
}

export default Hero;