import React from 'react';
import DragonDetailsView from './DragonDetailsView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test dragon details component', () => {
  const { asFragment } = render(<DragonDetailsView />);

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});