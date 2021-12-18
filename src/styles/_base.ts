import { AllThemeType, FontType } from './models';

const FONTS: FontType = {
  button: '0.6875rem',
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
      background: '#FFFFFF',
      text: '#0F3E51',
      grayed: '#BCBCBC',
      delete: '#FB3232',
    },
    fonts: FONTS,
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
    fonts: FONTS,
  },
};
