import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from "store";
import CreateDragonView from './CreateDragonView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dragon from 'store/models/Dragon';

test('Test create dragon component', () => {
  // Create mock dragon object
  const dragon = Dragon.state;
  dragon.details = new Dragon({
    id: "1",
    name: "Saphira",
    type: "Epic",
    createdAt: "Sun May 10 2020 11:10:53 GMT-0300",
    histories: [],
  });

  // Mock store
  const store = mockStore({ dragon });

  const { asFragment } = render(
    <Provider store={store}>
      <CreateDragonView />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});