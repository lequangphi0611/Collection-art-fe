import themeConfig from '../theme.config';
import get from 'lodash/get';

export type ButtonThemeResult = {
    background: string;
    color: string;
    hoverBg: string;
}

export type ButtonArgs = {
    primary?: boolean,
}

export const mapButtonTheme = (theme: typeof themeConfig, { primary }: ButtonArgs): ButtonThemeResult => {
    const btnType = primary ? 'primary' : 'secondary';
    return {
        background: get(theme, ['button', btnType, 'background']),
        color: get(theme, ['button', btnType, 'color']),
        hoverBg: get(theme, ['button', btnType, 'hover', 'background']),
    };
}