/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { MOCK_POKEMON } from 'mocks/pokemon';
import React from 'react';
import PokemonListCard from './card';

const PokemonListWidget: React.FC = () => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      display: grid;
      grid-auto-rows: 3rem;
      gap: 0.75rem;
    `,
    details: css`
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${theme.colors.grayed};
      font-size: ${theme.fonts.body};
    `,
  };

  return (
    <div css={styles.container} data-testid="list">
      <section css={styles.details}>
        <p data-testid="list-name">available pokemons</p>
        <p data-testid="list-query">search: all pokemons</p>
      </section>
      {MOCK_POKEMON.map((pokemon) => (
        <PokemonListCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};

export default PokemonListWidget;
