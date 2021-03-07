import styled, { css } from 'styled-components';
import {
  applyThemeMiddleWare,
  ButtonArgs,
  ButtonThemeResult,
  mapButtonTheme,
} from '../../../hocs/themes';
import { ButtonProps } from './types';

const StyledButton = styled.button<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ButtonThemeResult
>`
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

const StyledButtonWithTheme = applyThemeMiddleWare<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ButtonThemeResult,
  ButtonArgs
>(mapButtonTheme, StyledButton);

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
