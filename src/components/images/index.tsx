export { default as ImageWithFallback } from './ImageWithFallback';
export { default as ImageDefault } from './ImageDefault';

export interface ImageProps {
  aspectRatio: number;
  blurCompatibilityMode?: boolean;
  className?: string;
  imgClassName?: string;
  src: string;
  alt: string;
  blurDataURL?: string;
  priority?: boolean;
}