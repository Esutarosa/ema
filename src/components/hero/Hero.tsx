import type { FC } from 'react';

import { Section, Container } from '@/components/layouts';
import { heroImageData, heroSliderConfig } from '@/components/hero/HeroData';

import InfiniteMovingCards from '@/components/InfiniteMovingCards';

import { cn } from '@/helpers/cn';

const Hero: FC = () => {
  return (
    <Section>
      <div className='h-screen 3xl:h-[40em] flex flex-col items-center justify-center antialiased relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%)]'>
        {heroSliderConfig.map((config, index) => (
          <InfiniteMovingCards
            key={index}
            pauseOnHover={false}
            direction={config.direction}
            speed={config.speed}
            images={heroImageData.slice(config.startIndex, config.startIndex + config.count)}
            className={cn(
              '-rotate-[12.5deg] overflow-visible shadow-md'
            )}
          />
        ))}
      </div>
      <Container>
        Content
      </Container>
    </Section>
  );
}

export default Hero;