import { ThemeProvider } from '@emotion/react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { THEME } from 'styles/_base';
import NavbarWidget from '..';
import { MENU_BUTTONS } from '../buttons';

describe('navbar widget component', () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={THEME.light}>
        <BrowserRouter>
          <NavbarWidget />
        </BrowserRouter>
      </ThemeProvider>
    )
  );

  it('should have total owned pokemon and navigation buttons', () => {
    expect(screen.getByTestId('navbar-owned')).toBeTruthy();
    expect(screen.getAllByTestId('navbar-button')).toHaveLength(2);
  });

  it('navigation button should navigate user to target page', async () => {
    expect(window.location.pathname).toBe(MENU_BUTTONS[0].path);

    const navBtn: HTMLElement = screen.getAllByTestId('navbar-button')[1];
    fireEvent.click(navBtn);

    expect(window.location.pathname).toBe(MENU_BUTTONS[1].path);
  });
});
