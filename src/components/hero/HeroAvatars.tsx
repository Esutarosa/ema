'use client';

import {
  useState,
  type FC
} from 'react';

import {
  CardBody,
  CardContainer,
  CardItem
} from '@/components/ui/abstract-card';
import { Image } from "@nextui-org/image";

import { cn } from '@/helpers/cn';

const avatars = [
  '/images/avatars/twitter.jpg',
  '/images/avatars/youtube.jpg',
];

interface HeroAvatarsProps {
  className?: string;
}

const HeroAvatars: FC<HeroAvatarsProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleAvatarChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  };

  return (
    <CardContainer containerClassName={cn(className)}>
      <CardBody className='relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] bg-background border border-muted rounded-xl p-6'>
        <CardItem
          className='w-full cursor-pointer shadow'
          onClick={handleAvatarChange}
          translateZ='70'
          rotateZ='3'
        >
          <Image
            src={avatars[currentIndex]}
            alt='Avatar'
            width={215}
            height={215}
            className='w-full object-cover rounded-xl group-hover/card:shadow-xl pointer-events-none select-none'
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default HeroAvatars;