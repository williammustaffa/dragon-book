import React from 'react';
import LoginView from './LoginView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test login component', () => {
  const { asFragment } = render(<LoginView />);

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});