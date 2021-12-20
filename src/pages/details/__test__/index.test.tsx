import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@emotion/react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { THEME } from 'styles/_base';
import DetailsPage from '..';
import { GET_POKEMON_DETAIL_MOCKS_SUCCESS } from './mocks';

describe('details page', () => {
  it('should render details page with title, details, and navbar', async () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <BrowserRouter>
          <MockedProvider
            mocks={GET_POKEMON_DETAIL_MOCKS_SUCCESS}
            addTypename={false}
          >
            <DetailsPage />
          </MockedProvider>
        </BrowserRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText('Pokemon Details')).toBeTruthy();
      expect(screen.getByTestId('pokemon-details')).toBeTruthy();
      expect(screen.getByTestId('navbar')).toBeTruthy();
    });
  });
});
