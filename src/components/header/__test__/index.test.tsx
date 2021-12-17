import { render, screen } from '@testing-library/react';
import HeaderWidget from '..';

describe('search widget component', () => {
  beforeEach(() => render(<HeaderWidget />));

  it('header section should have title and welcome message', () => {
    expect(screen.getByTestId('header-title')).toBeTruthy();
    expect(screen.getByTestId('header-message')).toBeTruthy();
  });
});
