import { render, screen } from '@testing-library/react';
import SearchWidget from '..';

describe('search widget component', () => {
  beforeEach(() => render(<SearchWidget />));

  it('search section should have search bar and show all button', () => {
    expect(screen.getByTestId('search-bar')).toBeTruthy();
    expect(screen.getByTestId('search-all-btn')).toBeTruthy();
  });
});
