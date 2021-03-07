import React, { ComponentType } from 'react';
import { ThemeProvider } from 'styled-components';
import config from './theme.config';

export const setupThemeContext = <P extends object>(
  Component: ComponentType<P>
): React.ComponentType<P> => (props: P) => {
  return (
    <ThemeProvider theme={config}>
      <Component {...props} />
    </ThemeProvider>
  );
};
