import { gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
  query GetAllPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
        id
        artwork
      }
    }
  }
`;

export const SEARCH_POKEMON = gql`
  query SearchPokemon($name: String!) {
    pokemon(name: $name) {
      name
      id
      sprites {
        front_default
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    pokemon(name: $name) {
      id
      name
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      weight
      abilities {
        ability {
          name
        }
      }
      base_experience
      height
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
