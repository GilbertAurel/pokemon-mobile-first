import { MockedResponse } from '@apollo/client/testing';
import { GET_ALL_POKEMONS } from 'lib/apiQueries';
import { MOCK_POKEMON } from 'mocks/pokemon';

export const GET_ALL_POKEMONS_MOCKS_SUCCESS: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: GET_ALL_POKEMONS,
      variables: {
        limit: 10,
        offset: 0,
      },
    },
    result: {
      data: { pokemons: { results: MOCK_POKEMON } },
    },
  },
];

export const GET_ALL_POKEMONS_MOCKS_ERROR: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: GET_ALL_POKEMONS,
      variables: {
        limit: 10,
        offset: 0,
      },
    },
    error: new Error('something went wrong!'),
  },
];
