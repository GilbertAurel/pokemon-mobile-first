import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { MOCK_POKEMON_DETAILS_CLEAN } from 'mocks/pokemonDetails';
import { THEME } from 'styles/_base';
import PokemonDetailsWidget from '..';

describe('pokemon details component', () => {
  it('should render the page succesfully', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <PokemonDetailsWidget
          pokemon={MOCK_POKEMON_DETAILS_CLEAN}
          artwork="mock image"
        />
      </ThemeProvider>
    );

    expect(screen.queryByText('pokemon details'));
  });
});
