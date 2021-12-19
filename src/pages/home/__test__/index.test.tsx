import { ThemeProvider } from '@emotion/react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { THEME } from 'styles/_base';
import {
  GET_ALL_POKEMONS_MOCKS_ERROR,
  GET_ALL_POKEMONS_MOCKS_SUCCESS,
} from './mocks';
import HomePage from '..';

describe('home page', () => {
  afterEach(() => cleanup);

  it('should render header, search, and navbar component', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <MockedProvider
          mocks={GET_ALL_POKEMONS_MOCKS_SUCCESS}
          addTypename={false}
        >
          <HomePage />
        </MockedProvider>
      </ThemeProvider>
    );

    expect(screen.getByTestId('header')).toBeTruthy();
    expect(screen.getByTestId('search')).toBeTruthy();
    expect(screen.getByTestId('navbar')).toBeTruthy();
  });

  it('should render pokemon list if fetching get all pokemons success', async () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <MockedProvider
          mocks={GET_ALL_POKEMONS_MOCKS_SUCCESS}
          addTypename={false}
        >
          <HomePage />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('list')).toBeTruthy();
    });
  });

  it('should render not pokemon list if fetching get all pokemons error', async () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <MockedProvider
          mocks={GET_ALL_POKEMONS_MOCKS_ERROR}
          addTypename={false}
        >
          <HomePage />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText(/error/)).toBeTruthy();
      expect(screen.queryByTestId('list')).toBeNull();
    });
  });
});
