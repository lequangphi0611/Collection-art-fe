import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export type BaseStyledImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export type ImagePresenterProps = BaseStyledImageProps;

export type ImageProps = {
    src: string;
    width?: string | number;
    height?: string | number;
    defaultImg?: string;
};
