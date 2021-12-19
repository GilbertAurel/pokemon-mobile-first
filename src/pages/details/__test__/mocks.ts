import { MockedResponse } from '@apollo/client/testing';
import { GET_ALL_POKEMONS } from 'lib/apiQueries';
import { MOCK_POKEMON_DETAILS } from 'mocks/pokemonDetails';

export const GET_POKEMON_DETAIL_MOCKS_SUCCESS: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: GET_ALL_POKEMONS,
      variables: {
        limit: 10,
        offset: 0,
      },
    },
    result: {
      data: { pokemon: MOCK_POKEMON_DETAILS },
    },
  },
];
