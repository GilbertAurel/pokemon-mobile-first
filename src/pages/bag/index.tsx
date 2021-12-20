/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import NavbarWidget from 'components/navbar';
import PokemonListWidget from 'components/pokemon-list';
import { PokemonContext } from 'lib/pokemonContext';
import { CardClickType } from 'models/cardClick';
import { PokemonListType } from 'models/pokemon';
import React, { useContext, useEffect, useState } from 'react';

const BagPage: React.FC = () => {
  const theme: any = useTheme();
  const { releasePokemon } = useContext(PokemonContext);
  const { myPokemons } = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState<PokemonListType[]>([]);

  useEffect(() => {
    const newPokemons = myPokemons?.map((data) => ({
      id: data.id,
      image: data.image,
      name: data.nickname,
      artwork: data.image,
    }));

    setPokemons(newPokemons);
  }, [myPokemons]);

  const pokemonClickHandler = ({ id }: CardClickType) => {
    if (id) {
      releasePokemon(id);
    }
  };

  const styles = {
    wrapper: css`
      height: 100vh;
      width: 100vw;
      background-color: ${theme.colors.grayed};
    `,
    container: css`
      height: 100%;
      max-width: 30rem;
      margin: auto;
      position: relative;
      display: grid;
      grid-template-rows: 5rem 1fr;
      overflow-y: hidden;
      background-color: ${theme.colors.background};
    `,
    header: css`
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: sticky;
      top: 0;
      background-color: ${theme.colors.background};
      box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
      z-index: 10;

      p {
        margin-bottom: 1rem;
        font-weight: bold;
        color: ${theme.colors.primary};
      }
    `,
    pokemonListContainer: css`
      height: 100%;
      width: 100%;
      padding: 0 2.5rem;
    `,
    deleteText: css`
      justify-self: center;
      align-self: center;
      text-align: center;
      font-size: ${theme.fonts.body};
      color: ${theme.colors.grayed};
    `,
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <div css={styles.header}>
          <p>My Bag</p>
        </div>
        <div css={styles.pokemonListContainer}>
          <PokemonListWidget
            pokemons={pokemons}
            pokemonClickHandler={pokemonClickHandler}
          />
          <p css={styles.deleteText}>click to delete pokemon</p>
        </div>
        <NavbarWidget />
      </div>
    </div>
  );
};

export default BagPage;
