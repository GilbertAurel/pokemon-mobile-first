/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { dark, light } from 'assets/icons/theme';
import { useToggleTheme } from 'lib/useToggleTheme';
import React from 'react';

const ThemeToggler: React.FC = () => {
  const theme: any = useTheme();
  const [selectedTheme, toggleThemeHandler] = useToggleTheme();

  const styles = {
    container: css`
      height: 2.5rem;
      width: 2.5rem;
      position: absolute;
      justify-self: flex-end;
      top: 1rem;
      right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      background-color: ${theme.colors.primary};
      border: none;
      border-radius: 50%;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    `,
  };

  return (
    <button css={styles.container} onClick={toggleThemeHandler}>
      <img src={selectedTheme === 'light' ? light : dark} alt="" />
    </button>
  );
};

export default ThemeToggler;
