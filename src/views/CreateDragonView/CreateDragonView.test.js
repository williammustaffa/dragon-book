import React from 'react';
import CreateDragonView from './CreateDragonView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test create dragon component', () => {
  const { asFragment } = render(<CreateDragonView />);

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});