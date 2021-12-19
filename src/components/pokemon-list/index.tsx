/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React, { useRef, useState } from 'react';

import AlertMessage from 'components/alert';
import { PokemonListType } from 'models/pokemon';
import PokemonListCard from './card';
import alertImage from 'assets/icons/warning.svg';
import LoadingSpinner from 'components/loading-spinner';

interface Props {
  pokemons: PokemonListType[];
  search: boolean;
  loadNewPokemon: () => void;
  query?: string;
}

const PokemonListWidget: React.FC<Props> = ({
  pokemons,
  search,
  loadNewPokemon,
  query = 'all pokemons',
}) => {
  const theme: any = useTheme();
  const listRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const scrollHandler = (event: any) => {
    const atBottom =
      event.target.scrollHeight -
      event.target.scrollTop -
      event.target.clientHeight;

    if (atBottom < 5) {
      setLoading(true);
      return loadNewPokemon();
    }
  };

  const backToTopHandler = () => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  };

  const styles = {
    container: css`
      display: grid;
      grid-auto-rows: 3rem;
      gap: 0.75rem;
      position: relative;
      overflow-y: scroll;
      scroll-behavior: smooth;

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
    backToTopBtn: css`
      width: 4rem;
      height: 4rem;
      position: sticky;
      right: 0;
      bottom: 1rem;
      justify-self: flex-end;
      background-color: ${theme.colors.buttonBright};
      border: none;
      border-radius: 50%;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.button};

      :active {
        transform: scale(0.9);
      }
    `,
  };

  return (
    <div
      css={styles.container}
      ref={listRef}
      onScroll={(event) => scrollHandler(event)}
      data-testid="list"
    >
      <section css={styles.details}>
        <p data-testid="list-name">available pokemons</p>
        <p data-testid="list-query">search: {query}</p>
      </section>
      {pokemons.length > 0 && pokemons[0].id === 0 ? (
        <AlertMessage msg="Pokemon not found!" icon={alertImage} />
      ) : (
        pokemons.map((pokemon) => (
          <PokemonListCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))
      )}
      {loading && !search && <LoadingSpinner />}
      {loading && !search && (
        <button css={styles.backToTopBtn} onClick={backToTopHandler}>
          scroll up
        </button>
      )}
    </div>
  );
};

export default PokemonListWidget;
