import { ComponentType } from 'react';
import { ThemeProvider } from 'styled-components';
import config from './theme.config';

export const setupThemeContext = <P extends Record<string, unknown>>(
  Component: ComponentType<P>,
): React.ComponentType<P> => (props: P) => (
  <ThemeProvider theme={config}>
    <Component {...props} />
  </ThemeProvider>
);
