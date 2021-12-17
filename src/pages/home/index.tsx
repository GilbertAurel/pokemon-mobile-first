/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

const HomePage: React.FC = () => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    `,
  };

  return (
    <div css={styles.container}>
      <div data-testid="header">header</div>
      <div data-testid="search">header</div>
      <div data-testid="list">header</div>
      <div data-testid="navbar">header</div>
    </div>
  );
};

export default HomePage;
