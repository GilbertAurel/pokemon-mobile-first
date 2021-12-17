/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const PokemonListWidget: React.FC = () => {
  const styles = {
    container: css``,
  };
  return (
    <div css={styles.container} data-testid="list">
      <section>
        <p data-testid="list-name">available pokemons</p>
        <p data-testid="list-query">search: all pokemons</p>
      </section>
      <div data-testid="list-result-card">result card</div>
    </div>
  );
};

export default PokemonListWidget;
