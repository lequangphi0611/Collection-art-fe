import styled, { css } from 'styled-components';
import { applyThemeMiddleWare, mapButtonTheme } from '../../../hocs/themes';
import { ButtonProps, StyledButtonProps } from './types';

const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  border: none;
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 5px;
  line-height: 25px;
  color: ${({ color }) => color};
  transition: background ease 0.5s;
  background: ${({ background }) => background};
  ${({ disabled, hoverBg }) => (disabled
      ? 'opacity: 0.8;'
      : css`
          cursor: pointer;
          &:hover {
            background: ${hoverBg};
          }
        `)};
`;

const StyledButtonWithTheme = applyThemeMiddleWare(
  mapButtonTheme,
  StyledButton,
);

export const ButtonPresenter: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary,
  disabled,
}) => (
  <StyledButtonWithTheme
    disabled={disabled}
    primary={primary}
    onClick={onClick}
  >
    {children}
  </StyledButtonWithTheme>
);
