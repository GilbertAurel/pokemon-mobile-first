/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const HeaderWidget: React.FC = () => {
  const styles = {
    container: css``,
  };
  return (
    <div css={styles.container} data-testid="header">
      <h1 data-testid="header-title">Hi, Welcome to Pokemon Sanctuary!</h1>
      <p data-testid="header-message">
        Find your favorite pokemons and make them as your beloved pets!
      </p>
    </div>
  );
};

export default HeaderWidget;
