import type { FC } from 'react';

import { Section, Container } from '@/components/layouts';

import { HeroAvatars, HeroContent, HeroSlider } from '@/components/hero'

import { cn } from '@/helpers/cn';

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