/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

interface Props {
  types?: string[];
}

const PokemonTypes: React.FC<Props> = ({ types }) => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      display: flex;
      gap: 1rem;
    `,
    type: css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;

      img {
        height: 1rem;
        width: 1rem;
      }

      p {
        font-size: ${theme.fonts.body};
        color: ${theme.colors.primary};
        text-transform: capitalize;
      }
    `,
  };

  return (
    <div css={styles.container}>
      {types?.map((type) => (
        <div key={type} css={styles.type}>
          <img src={require(`assets/poke/icons/Icon_${type}.webp`)} alt="" />
          <p>{type}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonTypes;
