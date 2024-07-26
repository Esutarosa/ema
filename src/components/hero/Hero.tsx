import type { FC } from 'react';

import { Section } from '@/components/layouts';

import { HeroContent, HeroSlider } from '@/components/hero'

const Hero: FC = () => {
  return (
    <Section>
      <div className='relative h-screen md:h-[40em] lg:h-[50em] antialiased'>
        <HeroSlider />
        <HeroContent />
      </div>
    </Section>
  );
}

export default Hero;