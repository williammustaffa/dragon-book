import React from 'react';
import Home from './Home';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test home component', () => {
  const { asFragment, getByText } = render(<Home />);

  // Run tests
  expect(getByText("Generic View")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});