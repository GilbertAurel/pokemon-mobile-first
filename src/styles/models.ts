export type ThemeSelections = 'light' | 'dark';

type ColorsType = {
  primary: string;
  secondary: string;
  buttonBright: string;
  background: string;
  text: string;
  grayed: string;
  delete: string;
};

export type FontType = {
  button: string;
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
