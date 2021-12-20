import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { THEME } from 'styles/_base';
import BagPage from '..';

it('should render home page', () => {
  render(
    <ThemeProvider theme={THEME.light}>
      <BrowserRouter>
        <BagPage />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(<BagPage />).toBeTruthy();
});
