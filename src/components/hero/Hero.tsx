import type { FC } from 'react';

import { Section } from '@/components/layouts';

import { HeroContent, HeroModal, HeroSlider } from '@/components/hero'

const Hero: FC = () => {
  return (
    <Section>
      <div className='relative h-screen 3xl:h-[50em] antialiased'>
        <HeroSlider />
        <HeroContent />
        <HeroModal />
      </div>
    </Section>
  );
}

export default Hero;