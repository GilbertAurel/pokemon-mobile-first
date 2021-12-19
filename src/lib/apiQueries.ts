import { gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
  query GetAllPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
        id
      }
    }
  }
`;
