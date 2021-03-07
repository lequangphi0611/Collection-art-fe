import assign from 'lodash/assign';
import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeMiddleWareFuncton } from './types';

export const applyThemeMiddleWare = <P extends {}, R extends {}, F extends {}>(
  middleWareFunc: ThemeMiddleWareFuncton<F, R>,
  Component: React.ComponentType<P & R>
): React.ComponentType<P & F> => (props: P & F) => {
  const themeValue = useContext(ThemeContext);
  const propsCombined = useMemo(
    () => assign({}, props, middleWareFunc(themeValue, props)),
    [themeValue, props]
  );

  return <Component {...propsCombined} />;
};
