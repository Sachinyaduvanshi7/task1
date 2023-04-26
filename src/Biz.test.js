import { render, screen } from '@testing-library/react';
import Biz from './Biz';

test('renders learn react link', () => {
  render(<Biz />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
