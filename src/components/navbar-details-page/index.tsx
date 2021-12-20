/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import pokeball from 'assets/images/pokeball.webp';

interface Props {
  catchPokemonHandler: () => void;
}

const NavbarDetailsPageWidget: React.FC<Props> = ({ catchPokemonHandler }) => {
  const theme: any = useTheme();
  const navigate = useNavigate();

  const styles = {
    container: css`
      height: 5rem;
      width: 100%;
      padding: 0 2.5rem;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
      background-color: ${theme.colors.background};
      z-index: 10;
    `,
    back: css`
      background-color: transparent;
      border: none;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.body};
    `,
    catch: css`
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      background: ${theme.colors.buttonBright};
      border-radius: 0.5rem;
      border: none;

      :active {
        transform: scale(0.9);
      }

      img {
        height: 1.5rem;
        width: 1.5rem;
        object-fit: contain;
      }

      p {
        padding: 0;
        margin: 0;
        color: ${theme.colors.buttonBrightText};
        font-size: ${theme.fonts.body};
        font-weight: bold;
      }
    `,
  };

  return (
    <div css={styles.container} data-testid="navbar">
      <button css={styles.back} onClick={() => navigate(-1)}>
        <p>back to home</p>
      </button>
      <button css={styles.catch} onClick={catchPokemonHandler}>
        <img src={pokeball} alt="" />
        <p>catch pokemon</p>
      </button>
    </div>
  );
};

export default NavbarDetailsPageWidget;
