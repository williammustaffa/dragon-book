import React from 'react';
import DragonDetailsView from './DragonDetailsView';
import { Provider } from 'react-redux';
import { mockStore } from "store";
import Dragon from 'store/models/Dragon';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Test DragonDetailsView component', () => {
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
      <DragonDetailsView match={{ params: { id: "1" } }} />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});