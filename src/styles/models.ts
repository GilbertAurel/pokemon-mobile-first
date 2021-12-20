export type ThemeSelections = 'light' | 'dark';

type ColorsType = {
  primary: string;
  secondary: string;
  buttonBright: string;
  buttonBrightText: string;
  background: string;
  text: string;
  grayed: string;
  delete: string;
  white: string;
  card: string;
  navbarBtnActive: string;
};

export type FontType = {
  body: string;
  headline: string;
  title: string;
};

export type ThemeType = {
  colors: ColorsType;
  fonts: FontType;
};

export type AllThemeType = {
  light: ThemeType;
  dark: ThemeType;
};
