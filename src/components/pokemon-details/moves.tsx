/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

interface Props {
  moves?: string[];
}

const PokemonMoves: React.FC<Props> = ({ moves }) => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      max-width: 100%;
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
      overflow: hidden;
    `,
    title: css`
      padding: 0;
      margin: 0;
      color: ${theme.colors.secondary};
    `,
    moves: css`
      padding: 0.5rem 0.2rem;
      display: grid;
      grid-template-rows: auto auto;
      grid-auto-columns: 7rem;
      grid-auto-flow: column;
      gap: 0.625rem;
      overflow-x: scroll;

      -ms-overflow-style: none;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }
    `,
    move: css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.background};
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
      border-radius: 9px;
      font-size: ${theme.fonts.body};
      text-align: center;
      color: ${theme.colors.primary};
    `,
  };

  return (
    <div css={styles.container}>
      <p css={styles.title}>All Moves</p>
      <div css={styles.moves}>
        {moves?.map((move) => (
          <div key={move} css={styles.move} data-testid="details-move">
            <p>{move}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonMoves;
