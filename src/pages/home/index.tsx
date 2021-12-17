/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import cover from 'assets/images/cover.webp';
import SearchWidget from 'components/search';

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
        <h1 data-testid="header-title">Hi, Welcome to Pokemon Sanctuary!</h1>
        <p data-testid="header-message">
          Find your favorite pokemons and make them as your beloved pets!
        </p>
      </div>
      <SearchWidget />
      <div data-testid="list">
        <section>
          <p data-testid="list-name">available pokemons</p>
          <p data-testid="list-query">search: all pokemons</p>
        </section>
        <div data-testid="list-result-card">result card</div>
      </div>
      <div data-testid="navbar">
        <div data-testid="navbar-owned">owned pokemons</div>
        <button data-testid="navbar-button">home</button>
        <button data-testid="navbar-button">bag</button>
      </div>
    </div>
  );
};

export default HomePage;
