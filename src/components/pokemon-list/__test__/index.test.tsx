import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { MOCK_POKEMON } from 'mocks/pokemon';
import { THEME } from 'styles/_base';
import PokemonListWidget from '..';

describe('pokemon list widget component', () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={THEME.light}>
        <PokemonListWidget />
      </ThemeProvider>
    )
  );

  it('list section should have list name, query, and result cards', () => {
    expect(screen.getByTestId('list-name')).toBeTruthy();
    expect(screen.getByTestId('list-query')).toBeTruthy();
    expect(screen.getAllByTestId('list-result-card')).toHaveLength(
      MOCK_POKEMON.length
    );
  });
});
