/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

interface Props {
  abilities?: string[];
}

const PokemonAbilities: React.FC<Props> = ({ abilities }) => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
    `,
    title: css`
      padding: 0;
      margin: 0;
      color: ${theme.colors.secondary};
    `,
    ability: css`
      padding: 0;
      margin: 0;
      color: ${theme.colors.primary};
    `,
  };

  return (
    <div css={styles.container}>
      <p css={styles.title}>Abilities</p>
      {abilities?.map((ability) => (
        <p key={ability} css={styles.ability} data-testid="details-ability">
          {ability}
        </p>
      ))}
    </div>
  );
};

export default PokemonAbilities;
