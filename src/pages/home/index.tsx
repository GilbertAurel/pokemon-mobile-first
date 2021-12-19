/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import SearchWidget from 'components/search';
import HeaderWidget from 'components/header';
import PokemonListWidget from 'components/pokemon-list';
import NavbarWidget from 'components/navbar';
import AlertMessage from 'components/alert';

import { PokemonListType } from 'models/pokemon';
import { GET_ALL_POKEMONS } from 'lib/apiQueries';
import cover from 'assets/images/cover.webp';
import alertImage from 'assets/icons/warning.svg';
import LoadingSpinner from 'components/loading-spinner';

const HomePage: React.FC = () => {
  const theme: any = useTheme();
  const [pokemons, setPokemons] = useState<PokemonListType[]>([]);
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: 10, offset: 0 },
  });

  useEffect(() => {
    if (loading === false) {
      setPokemons([...pokemons, ...data.pokemons.results]);
    }
  }, [data]);

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
        {error !== undefined ? (
          <AlertMessage msg="error" icon={alertImage} />
        ) : loading ? (
          <LoadingSpinner />
        ) : (
          <PokemonListWidget pokemons={pokemons} />
        )}
        <NavbarWidget />
      </div>
    </div>
  );
};

export default HomePage;
