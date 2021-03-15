import { useCallback, useEffect, useState } from 'react';
import { ImagePresenter } from './ImagePresenter';
import { ImageProps } from './types';

const imgDefault = import('../../../assets/images/default-img.jpg');

export const ImageContainer = ({
  src,
  defaultImg: defaultImgProps,
  ...rest
}: ImageProps): JSX.Element => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const handleOnError = useCallback(() => {
    if (defaultImgProps && imageSrc !== defaultImgProps) {
      setImageSrc(defaultImgProps);
      return;
    }

    imgDefault.then((defaultImg) => {
      setImageSrc(defaultImg.default);
    });
  }, [defaultImgProps, imageSrc]);

  return <ImagePresenter {...rest} src={imageSrc} onError={handleOnError} />;
};
