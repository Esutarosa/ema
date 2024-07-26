import type { FC } from 'react';

import { ImageProps, ImageWithFallback } from '.';

interface ImageDefaultProps extends ImageProps { }

const ImageDefault: FC<ImageDefaultProps> = ({
  aspectRatio,
  blurCompatibilityMode,
  ...rest
}) => {
  return (
    <ImageWithFallback {...{
      ...rest,
      blurCompatibilityLevel: blurCompatibilityMode ? 'high' : 'none',
      width: 50,
      height: Math.round(50 / aspectRatio),
    }} />
  );
}

export default ImageDefault;