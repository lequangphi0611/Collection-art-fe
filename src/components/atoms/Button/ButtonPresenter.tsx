import get from 'lodash/get';
import React from 'react';
import styled, { css } from 'styled-components';
import {
  applyThemeMiddleWare,
  mapButtonTheme,
  ButtonThemeResult,
  ButtonArgs,
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
  padding: 0.8rem;
  font-size: 16px;
  border-radius: 5px;
  border-color: rgb(26, 26, 26);
  color: ${({ color }) => color};
  transition: background ease 2s;
  background: ${({ background }) => background};
  ${({ disabled, hoverBg }) =>
    disabled
      ? 'opacity: 0.8;'
      : css`
          cursor: pointer;
          &:hover {
            background: ${hoverBg};
          }
        `};
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
}) => {
  return (
    <StyledButtonWithTheme
      disabled={disabled}
      primary={primary}
      onClick={onClick}
    >
      {children}
    </StyledButtonWithTheme>
  );
};
