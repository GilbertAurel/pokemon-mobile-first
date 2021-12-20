/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import SearchWidget from 'components/search';
import HeaderWidget from 'components/header';
import PokemonListWidget from 'components/pokemon-list';
import NavbarWidget from 'components/navbar';

import cover from 'assets/images/cover.webp';
import { useSearchPokemon } from 'lib/useSearchPokemon';
import { useGetAllPokemons } from 'lib/useGetAllPokemons';
import LoadingSpinner from 'components/loading-spinner';
import ThemeToggler from 'components/theme-toggler';

const HomePage: React.FC = () => {
  const theme: any = useTheme();
  const [
    searchResult,
    searchHandler,
    resetSearchResult,
    search,
    searchLoading,
  ] = useSearchPokemon();
  const [pokemons, loadNextPokemons] = useGetAllPokemons();

  const styles = {
    wrapper: css`
      height: 100vh;
      width: 100vw;
      background-color: ${theme.colors.grayed};
    `,
    container: css`
      height: 100%;
      max-width: 30rem;
      padding: 0 2.5rem;
      position: relative;
      margin: auto;
      display: grid;
      overflow-y: hidden;
      grid-template-rows: repeat(4, 5rem) 1fr 5rem;
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
        <ThemeToggler />
        <img css={styles.cover} src={cover} alt="" />
        <HeaderWidget />
        <SearchWidget
          searchHandler={searchHandler}
          showAllHandler={resetSearchResult}
        />
        {searchLoading ? (
          <LoadingSpinner />
        ) : (
          <PokemonListWidget
            pokemons={searchResult.length > 0 ? searchResult : pokemons}
            search={searchResult.length > 0}
            loadNewPokemon={loadNextPokemons}
            query={searchResult.length > 0 ? search : 'all pokemons'}
          />
        )}
        <NavbarWidget />
      </div>
    </div>
  );
};

export default HomePage;
