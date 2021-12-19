/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React, { useState } from 'react';

import AlertMessage from 'components/alert';
import { PokemonListType } from 'models/pokemon';
import PokemonListCard from './card';
import alertImage from 'assets/icons/warning.svg';
import LoadingSpinner from 'components/loading-spinner';

interface Props {
  pokemons: PokemonListType[];
  loadNewPokemon: (event: any) => void;
}

const PokemonListWidget: React.FC<Props> = ({ pokemons, loadNewPokemon }) => {
  const theme: any = useTheme();
  const [loading, setLoading] = useState(false);

  const scrollHandler = (event: any) => {
    setLoading(true);
    loadNewPokemon(event);
  };

  const styles = {
    container: css`
      display: grid;
      grid-auto-rows: 3rem;
      gap: 0.75rem;
      position: relative;
      overflow-y: scroll;

      -ms-overflow-style: none;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    `,
    details: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${theme.colors.background};
      color: ${theme.colors.grayed};
      font-size: ${theme.fonts.body};
    `,
  };

  return (
    <div
      css={styles.container}
      onScroll={(event) => scrollHandler(event)}
      data-testid="list"
    >
      <section css={styles.details}>
        <p data-testid="list-name">available pokemons</p>
        <p data-testid="list-query">search: all pokemons</p>
      </section>
      {pokemons.length === 0 && (
        <AlertMessage msg="Pokemon not found!" icon={alertImage} />
      )}
      {pokemons.map((pokemon) => (
        <PokemonListCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default PokemonListWidget;
