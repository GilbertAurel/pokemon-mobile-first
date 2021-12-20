import { AllThemeType, FontType } from './models';

const FONTS: FontType = {
  body: '0.75rem',
  headline: '1rem',
  title: '1.5rem',
};

export const THEME: AllThemeType = {
  light: {
    colors: {
      primary: '#245F71',
      secondary: '#5BA3B3',
      buttonBright: '#E1F5F6',
      buttonBrightText: '#245F71',
      background: '#FFFFFF',
      text: '#0F3E51',
      grayed: '#BCBCBC',
      delete: '#FB3232',
      white: '#ffffff',
      card: '#ffffff',
      navbarBtnActive: '#245F71',
    },
    fonts: FONTS,
  },
  dark: {
    colors: {
      primary: '#ffffff',
      secondary: '#5BA3B3',
      buttonBright: '#E1F5F6',
      buttonBrightText: '#245F71',
      background: '#06212C',
      text: '#ffffff',
      grayed: '#BCBCBC',
      delete: '#FB3232',
      white: '#ffffff',
      card: '#0F3E51',
      navbarBtnActive: '#245F71',
    },
    fonts: FONTS,
  },
};
