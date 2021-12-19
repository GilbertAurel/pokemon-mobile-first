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

const HomePage: React.FC = () => {
  const theme: any = useTheme();
  const [pokemons, setPokemons] = useState<PokemonListType[]>([]);
  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { limit: 10, offset: page },
  });

  useEffect(() => {
    if (loading === false) {
      setPokemons([...pokemons, ...data.pokemons.results]);
    }
  }, [data]);

  const scrollHandler = (event: any) => {
    console.log('here');
    const atBottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;

    if (atBottom) {
      return setPage(page + 10);
    }
  };

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
        <img css={styles.cover} src={cover} alt="cover" />
        <HeaderWidget />
        <SearchWidget />
        {error !== undefined ? (
          <AlertMessage msg="error" icon={alertImage} />
        ) : (
          <PokemonListWidget
            pokemons={pokemons}
            loadNewPokemon={scrollHandler}
          />
        )}
        <NavbarWidget />
        <button onClick={() => setPage(page + 10)}>more</button>
      </div>
    </div>
  );
};

export default HomePage;
