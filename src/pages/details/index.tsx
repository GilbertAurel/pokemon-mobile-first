/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react';
import { useGetPokemonDetails } from 'lib/useGetPokemonDetails';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage: React.FC = () => {
  const theme: any = useTheme();
  const params = useParams();
  const [pokemon, loading, setPokemonName] = useGetPokemonDetails();

  useEffect(() => {
    if (params.pokemonName) {
      setPokemonName(params.pokemonName);
    }
  }, []);

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
        {loading ? <p>loading</p> : <p>{pokemon?.name}</p>}
      </div>
    </div>
  );
};

export default DetailsPage;
