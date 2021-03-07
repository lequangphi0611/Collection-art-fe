import themeConfig from './theme.config';

export type ThemeMiddleWareFuncton<P extends object, R extends {}> = (theme: typeof themeConfig, props: P) => R;