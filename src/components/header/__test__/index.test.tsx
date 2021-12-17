import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { THEME } from 'styles/theme';
import HeaderWidget from '..';

describe('header widget component', () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={THEME.light}>
        <HeaderWidget />
      </ThemeProvider>
    )
  );

  it('should have title and welcome message', () => {
    expect(screen.getByTestId('header-title')).toBeTruthy();
    expect(screen.getByTestId('header-message')).toBeTruthy();
  });
});
