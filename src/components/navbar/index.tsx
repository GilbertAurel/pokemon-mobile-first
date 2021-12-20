/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React, { useContext } from 'react';

import pokeballIcon from 'assets/images/pokeball.webp';
import { Link, useLocation } from 'react-router-dom';
import { MENU_BUTTONS } from './buttons';
import { PokemonContext } from 'lib/pokemonContext';

const NavbarWidget: React.FC = () => {
  const theme: any = useTheme();
  const { myPokemons } = useContext(PokemonContext);
  const path = useLocation().pathname;

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
    myPokemon: css`
      p {
        padding: 0;
        margin: 0;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.body};
      }

      section {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      img {
        height: 0.75rem;
        width: 0.75rem;
        object-fit: contain;
      }
    `,
    navBtnContainer: css`
      display: flex;
      gap: 2rem;
    `,
    navBtn: css`
      background-color: transparent;
      border: none;

      img {
        height: 1.25rem;
        width: 1.25rem;
      }

      p {
        padding: 0;
        margin: 0;
        font-size: ${theme.fonts.button};
      }
    `,
  };

  return (
    <div css={styles.container} data-testid="navbar">
      <div css={styles.myPokemon} data-testid="navbar-owned">
        <p>My Pokemons</p>
        <section>
          <img src={pokeballIcon} alt="" />
          <p>{myPokemons.length}</p>
        </section>
      </div>
      <section css={styles.navBtnContainer}>
        {MENU_BUTTONS.map((menu) => (
          <Link key={menu.title} to={menu.path}>
            <button css={styles.navBtn} data-testid="navbar-button">
              {path === menu.path ? (
                <img src={menu.iconActive} alt="" />
              ) : (
                <img src={menu.icon} alt="" />
              )}
              <p
                css={css`
                  color: ${path === menu.path
                    ? theme.colors.navbarBtnActive
                    : theme.colors.grayed};
                `}
              >
                {menu.title}
              </p>
            </button>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default NavbarWidget;
