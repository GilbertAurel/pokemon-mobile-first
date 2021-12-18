import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { THEME } from 'styles/_base';
import SearchWidget from '..';

describe('search widget component', () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={THEME.light}>
        <SearchWidget />
      </ThemeProvider>
    )
  );

  it('should have search bar and show all button', () => {
    expect(screen.getByTestId('search-bar')).toBeTruthy();
    expect(screen.getByTestId('search-all-btn')).toBeTruthy();
  });
});
