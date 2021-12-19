import { ThemeProvider } from '@emotion/react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { THEME } from 'styles/_base';
import { GET_ALL_POKEMONS_MOCKS_SUCCESS } from './mocks';
import HomePage from '..';
import { BrowserRouter } from 'react-router-dom';

describe('home page', () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={THEME.light}>
        <BrowserRouter>
          <MockedProvider
            mocks={GET_ALL_POKEMONS_MOCKS_SUCCESS}
            addTypename={false}
          >
            <HomePage />
          </MockedProvider>
        </BrowserRouter>
      </ThemeProvider>
    )
  );

  it('should render header, search, and navbar component', () => {
    expect(screen.getByTestId('header')).toBeTruthy();
    expect(screen.getByTestId('search')).toBeTruthy();
    expect(screen.getByTestId('navbar')).toBeTruthy();
  });

  it('should render pokemon list if fetching get all pokemons success', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('list')).toBeTruthy();
    });
  });
});
