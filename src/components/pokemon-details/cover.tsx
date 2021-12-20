/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface Props {
  type?: string;
}

const PokemonCover: React.FC<Props> = ({ type = 'grass' }) => {
  const styles = {
    container: css`
      height: 27.6rem;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -1;
      overflow: hidden;

      img {
        height: 110%;
        width: 120%;
        object-fit: fill;
        filter: blur(8px);
        -webkit-filter: blur(8px);
      }
    `,
  };

  return (
    <div css={styles.container}>
      <img
        src={require(`assets/poke/biome/Type_Background_${type}.webp`)}
        alt=""
      />
    </div>
  );
};

export default PokemonCover;
