import { render, screen } from '@testing-library/react';
import NavbarWidget from '..';

describe('navbar widget component', () => {
  beforeEach(() => render(<NavbarWidget />));

  it('should have total owned pokemon and navigation buttons', () => {
    expect(screen.getByTestId('navbar-owned')).toBeTruthy();
    expect(screen.getAllByTestId('navbar-button')).toHaveLength(2);
  });
});
