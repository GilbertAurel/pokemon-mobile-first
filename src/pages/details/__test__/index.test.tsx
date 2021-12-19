import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { THEME } from 'styles/_base';
import DetailsPage from '..';
import { GET_POKEMON_DETAIL_MOCKS_SUCCESS } from './mocks';

it('should render details page', () => {
  render(
    <ThemeProvider theme={THEME.light}>
      <MockedProvider
        mocks={GET_POKEMON_DETAIL_MOCKS_SUCCESS}
        addTypename={false}
      >
        <DetailsPage />
      </MockedProvider>
    </ThemeProvider>
  );

  expect(<DetailsPage />).toBeTruthy();
});
