import { ThemeProvider } from '@emotion/react';
import { useToggleTheme } from 'lib/useToggleTheme';
import React from 'react';

export type ThemeSelections = 'light' | 'dark';

type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
    buttonBright: string;
    background: string;
    text: string;
    grayed: string;
    delete: string;
  };
  font: {
    button: string;
    body: string;
    headline: string;
    title: string;
  };
};

type AllThemeType = {
  light: ThemeType;
  dark: ThemeType;
};

export const THEME: AllThemeType = {
  light: {
    colors: {
      primary: '#245F71',
      secondary: '#5BA3B3',
      buttonBright: '#E1F5F6',
      background: '#FFFFFF',
      text: '#0F3E51',
      grayed: '#BCBCBC',
      delete: '#FB3232',
    },
    font: {
      button: '0.6875rem',
      body: '0.75rem',
      headline: '1rem',
      title: '1.5rem',
    },
  },
  dark: {
    colors: {
      primary: '#245F71',
      secondary: '#5BA3B3',
      buttonBright: '#E1F5F6',
      background: '#000000',
      text: '#0F3E51',
      grayed: '#BCBCBC',
      delete: '#FB3232',
    },
    font: {
      button: '0.6875rem',
      body: '0.75rem',
      headline: '1rem',
      title: '1.5rem',
    },
  },
};

interface Props {
  children: React.ReactNode;
}

const ThemeContainer: React.FC<Props> = ({ children }) => {
  const [type] = useToggleTheme();

  return <ThemeProvider theme={THEME[type]}>{children}</ThemeProvider>;
};

export default ThemeContainer;
