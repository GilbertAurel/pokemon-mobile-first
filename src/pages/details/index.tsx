/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import LoadingSpinner from 'components/loading-spinner';
import NavbarWidget from 'components/navbar';
import PokemonDetailsWidget from 'components/pokemon-details';
import { useGetPokemonDetails } from 'lib/useGetPokemonDetails';

const DetailsPage: React.FC = () => {
  const theme: any = useTheme();
  const params = useParams();
  const location = useLocation();
  const [pokemon, loading, setPokemonName] = useGetPokemonDetails();
  const [artwork, setArtwork] = useState('');

  useEffect(() => {
    if (params.pokemonName && params.pokemonName !== '') {
      setPokemonName(params.pokemonName);
    }

    if (location.state?.image) {
      setArtwork(location.state.image);
    }
  }, [params]);

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
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <NavbarWidget />
        <div css={styles.header}>
          <p>Pokemon Details</p>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <PokemonDetailsWidget pokemon={pokemon} artwork={artwork} />
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
