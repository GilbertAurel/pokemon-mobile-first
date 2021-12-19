/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

import AlertMessage from 'components/alert';
import { PokemonListType } from 'models/pokemon';
import PokemonListCard from './card';
import alertImage from 'assets/icons/warning.svg';

interface Props {
  pokemons: PokemonListType[];
}

const PokemonListWidget: React.FC<Props> = ({ pokemons }) => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      display: grid;
      grid-auto-rows: 3rem;
      gap: 0.75rem;
    `,
    details: css`
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
    </div>
  );
};

export default PokemonListWidget;
