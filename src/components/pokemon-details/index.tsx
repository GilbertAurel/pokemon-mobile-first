/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { PokemonDetailType } from 'models/pokemon';
import React from 'react';
import PokemonAbilities from './abilities';
import PokemonCover from './cover';
import PokemonMoves from './moves';
import PokemonStats from './stats';
import PokemonTypes from './types';

interface Props {
  pokemon: PokemonDetailType | undefined;
  artwork: string;
}

const PokemonDetailsWidget: React.FC<Props> = ({ pokemon, artwork }) => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      padding: 0 2.5rem 10rem 2.5rem;
      overflow-y: scroll;
      overflow-x: hidden;
      display: grid;
      grid-auto-rows: 5rem;
      z-index: 1;
      position: relative;

      -ms-overflow-style: none;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }
    `,
    image: css`
      grid-row: span 5;
      width: 100%;
    `,
    nameContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.background};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 0.75rem;
    `,
    name: css`
      margin: 0.5rem 0 0 0;
      padding: 0;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.title};
      font-weight: bold;
      text-transform: capitalize;
    `,
    statsContainer: css`
      display: grid;
      grid-row: span 3;
      grid-template-columns: 70% 30%;
      padding-top: 2rem;
    `,
  };

  return (
    <div css={styles.container} data-testid="pokemon-details">
      <PokemonCover type={pokemon?.types[0]} />
      <img
        css={styles.image}
        src={artwork}
        alt=""
        data-testid="details-image"
      />
      <div css={styles.nameContainer}>
        <p css={styles.name} data-testid="details-name">
          {pokemon?.name}
        </p>
        <PokemonTypes types={pokemon?.types} />
      </div>
      <div css={styles.statsContainer}>
        <PokemonStats stats={pokemon?.stats} />
        <PokemonAbilities abilities={pokemon?.abilities} />
      </div>
      <PokemonMoves moves={pokemon?.moves.slice(0, 10)} />
    </div>
  );
};

export default PokemonDetailsWidget;
