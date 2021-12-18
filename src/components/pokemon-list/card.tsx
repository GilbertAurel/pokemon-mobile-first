/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface Props {
  name: string;
  image: string;
}

const PokemonListCard: React.FC<Props> = ({ name, image }) => {
  const styles = {
    container: css`
      display: flex;
      align-items: center;
    `,
    image: css`
      height: 2.5rem;
      width: 2.5rem;
      object-fit: contain;
    `,
  };

  return (
    <div css={styles.container} data-testid="list-result-card">
      <img css={styles.image} src={image} alt="pokemon" />
      <p>{name}</p>
    </div>
  );
};

export default PokemonListCard;
