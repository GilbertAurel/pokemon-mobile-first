/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import cover from 'assets/images/cover.webp';

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
      <img src={cover} alt="cover image" data-testid="cover-img" />
      <div data-testid="header">
        <h1 data-testid="header-title">title</h1>
        <p data-testid="header-message">message</p>
      </div>
      <div data-testid="search">header</div>
      <div data-testid="list">header</div>
      <div data-testid="navbar">header</div>
    </div>
  );
};

export default HomePage;
