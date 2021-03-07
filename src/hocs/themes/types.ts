import themeConfig from './theme.config';

export type ThemeMiddleWareFuncton<P extends Record<string, unknown>, R extends Record<string, unknown>> = (theme: typeof themeConfig, props: P) => R;
