import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { THEME } from 'styles/theme';
import HomePage from '..';

describe('home page', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={THEME.light}>
        <HomePage />
      </ThemeProvider>
    );
  });

  it('should render header, cover img, search, list, and navbar component', () => {
    expect(screen.getByTestId('header')).toBeTruthy();
    expect(screen.getByTestId('cover-img')).toBeTruthy();
    expect(screen.getByTestId('search')).toBeTruthy();
    expect(screen.getByTestId('list')).toBeTruthy();
    expect(screen.getByTestId('navbar')).toBeTruthy();
  });

  it('header section should have title and welcome message', () => {
    expect(screen.getByTestId('header-title')).toBeTruthy();
    expect(screen.getByTestId('header-message')).toBeTruthy();
  });

  it('list section should have list name, query, and result cards', () => {
    expect(screen.getByTestId('list-name')).toBeTruthy();
    expect(screen.getByTestId('list-query')).toBeTruthy();
    expect(screen.getAllByTestId('list-result-card')).toHaveLength(1);
  });

  it('navbar section should have total owned pokemon and navigation buttons', () => {
    expect(screen.getByTestId('navbar-owned')).toBeTruthy();
    expect(screen.getAllByTestId('navbar-button')).toHaveLength(2);
  });
});
