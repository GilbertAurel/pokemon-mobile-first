import { render, screen } from '@testing-library/react';
import PokemonListWidget from '..';

describe('pokemon list widget component', () => {
  beforeEach(() => render(<PokemonListWidget />));

  it('list section should have list name, query, and result cards', () => {
    expect(screen.getByTestId('list-name')).toBeTruthy();
    expect(screen.getByTestId('list-query')).toBeTruthy();
    expect(screen.getAllByTestId('list-result-card')).toHaveLength(1);
  });
});
