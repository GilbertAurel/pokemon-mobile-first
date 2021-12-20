import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { MOCK_POKEMON_DETAILS_CLEAN } from 'mocks/pokemonDetails';
import { THEME } from 'styles/_base';
import PokemonDetailsWidget from '..';

describe('pokemon details component', () => {
  it('should have pokemon image, name, types, stats, abilities, and moves', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <PokemonDetailsWidget
          pokemon={MOCK_POKEMON_DETAILS_CLEAN}
          artwork="mock image"
        />
      </ThemeProvider>
    );

    expect(screen.getByTestId('details-image')).toBeTruthy();
    expect(screen.getByTestId('details-name')).toBeTruthy();
    expect(screen.getAllByTestId('details-type')).toHaveLength(
      MOCK_POKEMON_DETAILS_CLEAN.types.length
    );
    expect(screen.getAllByTestId('details-stat')).toHaveLength(
      MOCK_POKEMON_DETAILS_CLEAN.stats.length
    );
    expect(screen.getAllByTestId('details-ability')).toHaveLength(
      MOCK_POKEMON_DETAILS_CLEAN.abilities.length
    );
    expect(screen.getAllByTestId('details-move')).toHaveLength(
      MOCK_POKEMON_DETAILS_CLEAN.moves.length
    );
  });
});
