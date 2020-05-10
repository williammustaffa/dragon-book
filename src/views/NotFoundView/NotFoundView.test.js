import React from 'react';
import NotFoundView from './NotFoundView';
import { Provider } from "react-redux";
import { mockStore } from "store";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test 404 component', () => {
  // Mock store
  const store = mockStore({});

  const { asFragment } = render(
    <Provider store={store}>
      <NotFoundView />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});