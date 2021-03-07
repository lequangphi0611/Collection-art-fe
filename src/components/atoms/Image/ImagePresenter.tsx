import styled from 'styled-components';
import { BaseStyledImageProps, ImagePresenterProps } from './types';

const StyledImage = styled.img<BaseStyledImageProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;

export const ImagePresenter: React.FC<ImagePresenterProps> = StyledImage;
