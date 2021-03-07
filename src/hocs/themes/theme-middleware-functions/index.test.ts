import themeConfig from '../theme.config';
import { mapButtonTheme } from '.';

describe('src/hocs/themes/theme-middleware-functions', () => {
    describe('mapButtonTheme', () => {
        test('Render with props is empty', () => {
            const result = mapButtonTheme(themeConfig, {});
            expect(result).toStrictEqual({
                background: themeConfig.button.secondary.background,
                color: themeConfig.button.secondary.color,
                hoverBg: themeConfig.button.secondary.hover.background,
            });
        });

        test('Render with props primary is true', () => {
            const result = mapButtonTheme(themeConfig, { primary: true });
            expect(result).toStrictEqual({
                background: themeConfig.button.primary.background,
                color: themeConfig.button.primary.color,
                hoverBg: themeConfig.button.primary.hover.background,
            });
        });
    });
});
