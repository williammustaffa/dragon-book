import React from 'react';
import NotFoundView from './NotFoundView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test 404 component', () => {
  const { asFragment } = render(<NotFoundView />);

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});