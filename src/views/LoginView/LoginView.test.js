import React from 'react';
import LoginView from './LoginView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import User from 'store/models/User';

test('Test login component', () => {
  // Initial user
  const store = mockStore({
    user: User.state,
  });

  const { asFragment } = render(
    <Provider store={store}>
      <LoginView />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});