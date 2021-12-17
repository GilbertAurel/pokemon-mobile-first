/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import cover from 'assets/images/cover.webp';
import SearchWidget from 'components/search';
import HeaderWidget from 'components/header';
import PokemonListWidget from 'components/pokemon-list';
import NavbarWidget from 'components/navbar';

const HomePage: React.FC = () => {
  const theme: any = useTheme();

  const styles = {
    wrapper: css`
      height: 100vh;
      width: 100vw;
      background-color: ${theme.colors.grayed};
    `,
    container: css`
      min-height: 100%;
      max-width: 30rem;
      position: relative;
      margin: auto;
      display: grid;
      grid-auto-rows: 5rem;
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    `,
    cover: css`
      width: 100%;
      height: 17.5rem;
      position: absolute;
      object-fit: cover;
    `,
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <img
          css={styles.cover}
          src={cover}
          alt="cover image"
          data-testid="cover-img"
        />
        <HeaderWidget />
        <SearchWidget />
        <PokemonListWidget />
        <NavbarWidget />
      </div>
    </div>
  );
};

export default HomePage;
