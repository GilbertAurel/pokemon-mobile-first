/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

interface Props {
  name: string;
  image: string;
}

const PokemonListCard: React.FC<Props> = ({ name, image }) => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      width: 95%;
      justify-self: center;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0 0.75rem;
      border-radius: 0.5rem;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
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
    <div css={styles.container} data-testid="list-result-card">
      <img css={styles.image} src={image} alt="" />
      <p css={styles.name}>{name}</p>
    </div>
  );
};

export default PokemonListCard;
