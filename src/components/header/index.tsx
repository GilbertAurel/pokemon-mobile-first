/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';

const HeaderWidget: React.FC = () => {
  const theme: any = useTheme();

  const styles = {
    container: css`
      grid-row: span 3;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      z-index: 1;
      color: ${theme.colors.background};
    `,
    title: css`
      max-width: 20ch;
      margin: 0;
      padding: 0;
      line-height: 33px;
      font-size: ${theme.fonts.title};
    `,
    message: css`
      max-width: 40ch;
      margin: 0;
      padding: 0;
      font-size: ${theme.fonts.body};
    `,
  };

  return (
    <div css={styles.container} data-testid="header">
      <h1 css={styles.title} data-testid="header-title">
        Hi, Welcome to Pokemon Sanctuary!
      </h1>
      <p css={styles.message} data-testid="header-message">
        Find your favorite pokemons and make them as your beloved pets!
      </p>
    </div>
  );
};

export default HeaderWidget;
