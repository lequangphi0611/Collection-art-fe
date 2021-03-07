import { ReactNode } from 'react';
import { ButtonArgs } from '../../../hocs/themes';

export type ButtonProps = ButtonArgs & {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    disabled?: boolean;
}
