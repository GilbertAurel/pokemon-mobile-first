import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { THEME } from 'styles/_base';
import AlertMessage from '..';

describe('alert component', () => {
  it('should have message and icon if icon exists', () => {
    render(
      <ThemeProvider theme={THEME.light}>
        <AlertMessage msg="mock alert" icon="mock" />
      </ThemeProvider>
    );

    expect(screen.queryByAltText('alert')).toBeInTheDocument();
    expect(screen.queryByText('mock alert')).toBeInTheDocument();
  });
});
