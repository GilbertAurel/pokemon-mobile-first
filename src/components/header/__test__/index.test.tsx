import { render, screen } from '@testing-library/react';
import HeaderWidget from '..';

describe('header widget component', () => {
  beforeEach(() => render(<HeaderWidget />));

  it('should have title and welcome message', () => {
    expect(screen.getByTestId('header-title')).toBeTruthy();
    expect(screen.getByTestId('header-message')).toBeTruthy();
  });
});
