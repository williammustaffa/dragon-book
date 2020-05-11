import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from "store";
import UpdateDragonView from './UpdateDragonView';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dragon from 'store/models/Dragon';

test('Test UpdateDragonView component', () => {
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
      <UpdateDragonView match={{ params: { id: "1" } }} />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});