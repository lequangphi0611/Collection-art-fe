import { ReactNode } from 'react';
import { ButtonArgs, ButtonThemeResult } from '../../../hocs/themes';

export type ButtonProps = ButtonArgs & {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    disabled?: boolean;
}

export type BaseStyledButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export type StyledButtonProps = BaseStyledButtonProps & ButtonThemeResult;
