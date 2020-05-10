import React from 'react';
import HomeView from './HomeView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test home component', () => {
  const { asFragment, getByText } = render(<HomeView />);

  // Run tests
  expect(getByText("Generic View")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});