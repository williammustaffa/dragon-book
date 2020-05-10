import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from "store";
import CreateDragonView from './CreateDragonView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test create dragon component', () => {
  // Mock store
  const store = mockStore({});

  const { asFragment } = render(
    <Provider store={store}>
      <CreateDragonView />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});