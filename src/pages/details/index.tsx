/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import NavbarWidget from 'components/navbar';
import { useGetPokemonDetails } from 'lib/useGetPokemonDetails';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

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
      grid-auto-rows: 5rem;
      overflow-y: hidden;
      background-color: ${theme.colors.background};
    `,
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <div>
          <p>Pokemon Details</p>
        </div>
        {loading ? (
          <p>loading</p>
        ) : (
          <div data-testid="pokemon-details">
            <img src={artwork} alt="" />
            <p>{pokemon?.name}</p>
            <p>{pokemon?.id}</p>
          </div>
        )}

        <NavbarWidget />
      </div>
    </div>
  );
};

export default DetailsPage;
