'use client';

import {
  useRef,
  type FC,
  type ReactNode,
  type PropsWithChildren
} from 'react';

import { Variant, motion } from 'framer-motion';

import { useAppState } from '@/config/state/AppState';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

export type AnimationType = 'none' | 'scale' | 'left' | 'right' | 'bottom';

export interface AnimationConfig {
  type?: AnimationType;
  duration?: number;
  staggerDelay?: number;
  scaleOffset?: number;
  distanceOffset?: number;
}

interface AnimateItemsProps extends AnimationConfig, PropsWithChildren {
  className?: string;
  classNameItem?: string;
  items?: ReactNode[];
  itemKeys?: string[];
  canStart?: boolean;
  animateFromAppState?: boolean;
  animateOnFirstLoadOnly?: boolean;
  staggerOnFirstLoadOnly?: boolean;
  onAnimationComplete?: () => void;
}

const AnimateItems: FC<AnimateItemsProps> = ({
  children,
  className,
  classNameItem,
  items,
  itemKeys,
  canStart = true,
  type = 'scale',
  duration = 0.6,
  staggerDelay = 0.1,
  scaleOffset = 0.9,
  distanceOffset = 20,
  animateFromAppState,
  animateOnFirstLoadOnly,
  staggerOnFirstLoadOnly,
  onAnimationComplete,
}) => {
  const {
    hasLoaded,
    nextPhotoAnimation,
    clearNextAnimation
  } = useAppState();

  const prefersReducedMotion = usePrefersReducedMotion();

  const hasLoadedInitial = useRef(hasLoaded).current;
  const nextPhotoAnimationInitial = useRef(nextPhotoAnimation).current;

  const shouldAnimate = type !== 'none' && !prefersReducedMotion && !(animateOnFirstLoadOnly && hasLoadedInitial);
  const shouldStagger = !(staggerOnFirstLoadOnly && hasLoadedInitial);

  const typeResolved = animateFromAppState ? nextPhotoAnimationInitial?.type ?? type : type;
  const durationResolved = animateFromAppState ? nextPhotoAnimationInitial?.duration ?? duration : duration;

  const getInitialVariant = (): Variant => {
    const baseVariant = { opacity: 0 };
    switch (typeResolved) {
      case 'left':
        return { ...baseVariant, x: distanceOffset };
      case 'right':
        return { ...baseVariant, x: -distanceOffset };
      case 'bottom':
        return { ...baseVariant, y: distanceOffset };
      default:
        return { ...baseVariant, y: distanceOffset, scale: scaleOffset };
    }
  };

  const commonVariants = {
    hidden: getInitialVariant(),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={className}
      initial={shouldAnimate ? 'hidden' : false}
      animate={canStart ? 'show' : 'hidden'}
      variants={shouldStagger ? {
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      } : undefined}
      onAnimationComplete={() => {
        if (animateFromAppState) clearNextAnimation?.();
        onAnimationComplete?.();
      }}>
      {items?.map((item, index) => (
        <motion.div
          key={itemKeys ? itemKeys[index] : index}
          className={classNameItem}
          variants={commonVariants}
          transition={{
            duration: durationResolved,
            ease: 'easeOut'
          }}>
          {item}
        </motion.div>
      ))}
      {children && (
        <motion.div
          className={classNameItem}
          variants={commonVariants}
          transition={{
            duration: durationResolved,
            ease: 'easeOut'
          }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimateItems;
