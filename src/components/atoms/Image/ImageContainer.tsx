import { useCallback, useEffect, useState } from 'react';
import { ImagePresenter } from './ImagePresenter';
import { ImageProps } from './types';

const imgDefault = import('../../../assets/images/default-img.jpg');

export const ImageContainer: React.FC<ImageProps> = ({
  src,
  defaultImg: defaultImgProps,
  ...rest
}) => {
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

  return (
    <ImagePresenter {...rest} src={imageSrc} onError={handleOnError} />
  );
};
