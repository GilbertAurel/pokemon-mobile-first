/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { StatsType } from 'models/pokemon';
import React from 'react';

interface Props {
  stats?: StatsType[];
}

const PokemonStats: React.FC<Props> = ({ stats }) => {
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
    stats: css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      row-gap: 0.5rem;
    `,
    stat: css`
      color: ${theme.colors.primary};

      p {
        padding: 0;
        margin: 0;
      }
    `,
  };

  return (
    <div css={styles.container}>
      <p css={styles.title}>Statistics</p>
      <div css={styles.stats}>
        {stats?.map((stat) => (
          <section key={stat.name} css={styles.stat} data-testid="details-stat">
            <p>{stat.name}</p>
            <p>{stat.base}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
