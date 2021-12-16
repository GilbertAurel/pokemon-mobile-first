import { render } from '@testing-library/react';
import DetailsPage from '..';

it('should render home page', () => {
  render(<DetailsPage />);
  expect(<DetailsPage />).toBeTruthy();
});
