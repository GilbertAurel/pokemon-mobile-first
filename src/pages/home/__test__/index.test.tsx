import { render } from '@testing-library/react';
import HomePage from '..';

it('should render home page', () => {
  render(<HomePage />);
  expect(<HomePage />).toBeTruthy();
});
