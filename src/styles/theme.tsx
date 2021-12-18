import { ThemeProvider } from '@emotion/react';
import { useToggleTheme } from 'lib/useToggleTheme';
import React from 'react';
import { ThemeSelections } from './models';
import { THEME } from './_base';

interface Props {
  children: React.ReactNode;
}

const ThemeContainer: React.FC<Props> = ({ children }) => {
  const [type] = useToggleTheme();
  const theme: ThemeSelections = type;

  return <ThemeProvider theme={THEME[theme]}>{children}</ThemeProvider>;
};

export default ThemeContainer;
