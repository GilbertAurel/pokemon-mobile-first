import { useEffect, useState } from 'react';
import { ThemeSelections } from 'styles/theme';

export const useToggleTheme = (): [ThemeSelections, () => void] => {
  const [theme, setTheme] = useState<ThemeSelections>('light');

  useEffect(() => {
    const localTheme = <ThemeSelections>localStorage.getItem('type');
    setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme =
      <ThemeSelections>localStorage.getItem('type') === 'light'
        ? 'dark'
        : 'light';

    setTheme(newTheme);
    localStorage.setItem('type', newTheme);
    window.location.reload();
  };

  return [theme, toggleTheme];
};
