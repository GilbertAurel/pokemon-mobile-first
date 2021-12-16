import { render } from '@testing-library/react';
import BagPage from '..';

it('should render home page', () => {
  render(<BagPage />);
  expect(<BagPage />).toBeTruthy();
});
