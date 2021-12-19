/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const NavbarWidget: React.FC = () => {
  const styles = {
    container: css`
      position: sticky;
      bottom: 0;
      left: 0;
    `,
  };

  return (
    <div css={styles.container} data-testid="navbar">
      <div data-testid="navbar-owned">owned pokemons</div>
      <button data-testid="navbar-button">home</button>
      <button data-testid="navbar-button">bag</button>
    </div>
  );
};

export default NavbarWidget;
