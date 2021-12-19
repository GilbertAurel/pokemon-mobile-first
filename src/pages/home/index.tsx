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
      width: 100vw;
      background-color: ${theme.colors.grayed};
    `,
    container: css`
      min-height: 100%;
      max-width: 30rem;
      padding: 0 2.5rem;
      position: relative;
      margin: auto;
      display: grid;
      overflow-y: scroll;
      grid-auto-rows: minmax(5rem, max-content);
      background-color: ${theme.colors.background};
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
        <img css={styles.cover} src={cover} alt="cover" />
        <HeaderWidget />
        <SearchWidget />
        <PokemonListWidget />
        <NavbarWidget />
      </div>
    </div>
  );
};

export default HomePage;
