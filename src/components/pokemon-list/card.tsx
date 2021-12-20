/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

interface Props {
  name: string;
  image: string;
  artwork?: string;
  pokemonClickHandler: (name?: string, image?: string) => void;
}

const PokemonListCard: React.FC<Props> = ({
  name,
  image,
  pokemonClickHandler,
}) => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      height: 100%;
      width: 95%;
      padding: 0 0.75rem;
      justify-self: center;
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: ${theme.colors.card};
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

      :active {
        transform: scale(0.9);
      }
    `,
    link: css`
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    `,
    image: css`
      height: 2.5rem;
      width: 2.5rem;
      object-fit: contain;
    `,
    name: css`
      font-size: ${theme.fonts.body};
      color: ${theme.colors.primary};
      text-transform: capitalize;
    `,
  };

  return (
    <button
      css={styles.container}
      onClick={() => pokemonClickHandler(name, image)}
      type="button"
      data-testid="list-result-card"
    >
      <img css={styles.image} src={image} alt="" />
      <p css={styles.name}>{name}</p>
    </button>
  );
};

export default PokemonListCard;
