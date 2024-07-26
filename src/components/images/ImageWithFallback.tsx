'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC
} from 'react';

import Image, { ImageProps } from 'next/image';

import { useAppState } from '@/config/state/AppState';

import { cn } from '@/helpers/cn';

interface ImageWithFallbackProps extends ImageProps {
  blurCompatibilityLevel?: 'none' | 'low' | 'high';
  imgClassName?: string;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({
  className,
  priority,
  blurDataURL,
  blurCompatibilityLevel = 'low',
  imgClassName = 'object-cover h-full',
  ...props
}) => {
  const { shouldDebugImageFallbacks } = useAppState();

  const [wasCached, setWasCached] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [didError, setDidError] = useState<boolean>(false);

  const onLoad = useCallback(() => setIsLoading(false), []);
  const onError = useCallback(() => setDidError(true), []);

  const [hideFallback, setHideFallback] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timeout = setTimeout(
      () => setWasCached(imgRef.current?.complete ?? false),
      100,
    );
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading && !didError) {
      const timeout = setTimeout(() => {
        setHideFallback(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, didError]);

  const getBlurClass = () => {
    switch (blurCompatibilityLevel) {
      case 'high':
        return 'blur-[6px] scale-[1.05]';
      case 'low':
        return 'blur-[4px] scale-[1.01]';
    }
  };

  const showFallback =
    !wasCached &&
    !hideFallback;

  return (
    <div
      className={cn(
        className,
        'flex relative',
      )}
    >
      {(showFallback || shouldDebugImageFallbacks) &&
        <div className={cn(
          'container',
          'absolute inset-0',
          'overflow-hidden',
          'transition-opacity duration-300 ease-in',
          !(isLoading || shouldDebugImageFallbacks) && blurDataURL && 'bg-background',
          (isLoading || shouldDebugImageFallbacks)
            ? 'opacity-100'
            : 'opacity-0',
        )}>
          {(blurDataURL)
            ? <Image {...{
              ...props,
              src: blurDataURL,
              className: cn(
                imgClassName,
                getBlurClass(),
              ),
            }} />
            : <div className={cn(
              'w-full h-full',
              'rounded-lg',
              'bg-background/70',
            )} />}
        </div>}
      <Image {...{
        ...props,
        ref: imgRef,
        priority,
        className: imgClassName,
        onLoad,
        onError,
        alt: 'Image',
      }} />
    </div>
  );
}

export default ImageWithFallback;