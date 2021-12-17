/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import cover from 'assets/images/cover.webp';
import SearchWidget from 'components/search';
import HeaderWidget from 'components/header';

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
      <HeaderWidget />
      <SearchWidget />
      <div data-testid="list">
        <section>
          <p data-testid="list-name">available pokemons</p>
          <p data-testid="list-query">search: all pokemons</p>
        </section>
        <div data-testid="list-result-card">result card</div>
      </div>
    </div>
  );
};

export default HomePage;
