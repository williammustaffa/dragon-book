import React from 'react';
import HomeView from './HomeView';
import Dragons from 'store/models/Dragons';
import { Provider } from 'react-redux';
import { mockStore } from "store";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test home component', () => {
  // Mock store
  const store = mockStore({
    dragons: Dragons.state
  });

  const { asFragment } = render(
    <Provider store={store}>
      <HomeView />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});