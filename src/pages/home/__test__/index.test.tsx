import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { THEME } from 'styles/_base';
import HomePage from '..';

describe('home page', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={THEME.light}>
        <HomePage />
      </ThemeProvider>
    );
  });

  it('should render header, search, list component', () => {
    expect(screen.getByTestId('header')).toBeTruthy();
    expect(screen.getByTestId('search')).toBeTruthy();
    expect(screen.getByTestId('list')).toBeTruthy();
    expect(screen.getByTestId('navbar')).toBeTruthy();
  });
});
