import styled from 'styled-components';
import { ParagraphProps } from './types';

type StyledProps = Pick<ParagraphProps, 'as'> & {
  'data-test': string;
};

const StyledParagraph = styled.p<StyledProps>``;

export const ParagraphPresenter: React.FC<ParagraphProps> = ({
  children,
  as,
}) => (
  <StyledParagraph as={as} data-test="component-paragraph">
    {children}
  </StyledParagraph>
);
