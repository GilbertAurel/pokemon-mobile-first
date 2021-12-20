import { ThemeProvider } from '@emotion/react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MOCK_POKEMON } from 'mocks/pokemon';
import { BrowserRouter } from 'react-router-dom';
import { THEME } from 'styles/_base';
import PokemonListWidget from '..';

describe('pokemon list widget component', () => {
  it('should have list name, query, and result cards', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <BrowserRouter>
          <PokemonListWidget
            pokemons={MOCK_POKEMON}
            loadNewPokemon={() => {}}
            pokemonClickHandler={() => {}}
          />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByTestId('list-name')).toBeTruthy();
    expect(screen.getByTestId('list-query')).toBeTruthy();
    expect(screen.getAllByTestId('list-result-card')).toHaveLength(
      MOCK_POKEMON.length
    );
  });

  it('should render alert message if pokemon is empty', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <PokemonListWidget
          pokemons={[
            {
              id: 0,
              name: '',
              image: '',
              artwork: '',
            },
          ]}
          pokemonClickHandler={() => {}}
          loadNewPokemon={() => {}}
        />
      </ThemeProvider>
    );

    expect(screen.queryByText('Pokemon not found!')).toBeTruthy();
  });

  it('pokemon card onClick should redirect user to detail page', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <BrowserRouter>
          <PokemonListWidget
            pokemons={MOCK_POKEMON}
            pokemonClickHandler={() => {}}
            loadNewPokemon={() => {}}
          />
        </BrowserRouter>
      </ThemeProvider>
    );

    const pokemonBtn = screen.getAllByTestId('list-result-card')[0];
    fireEvent.click(pokemonBtn);

    expect(window.location.pathname).toBe(`/`);
  });
});
