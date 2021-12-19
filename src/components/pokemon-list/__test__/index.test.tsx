import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { MOCK_POKEMON } from 'mocks/pokemon';
import { THEME } from 'styles/_base';
import PokemonListWidget from '..';

describe('pokemon list widget component', () => {
  it('should have list name, query, and result cards', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <PokemonListWidget pokemons={MOCK_POKEMON} loadNewPokemon={() => {}} />
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
        <PokemonListWidget pokemons={[]} loadNewPokemon={() => {}} />
      </ThemeProvider>
    );

    expect(screen.queryByText('Pokemon not found!')).toBeTruthy();
  });
});
