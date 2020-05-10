import React from "react";
import Dragon from "store/models/Dragon";
import { Provider } from 'react-redux';
import { mockStore } from "store";
import DragonCard from "./DragonCard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Test dragon card component", () => {
  // Mock store
  const store = mockStore({});

  // Create mock dragon object
  const dragon = new Dragon({
    id: "1",
    name: "Saphira",
    type: "Epic",
    createdAt: "Sun May 10 2020 11:10:53 GMT-0300",
    histories: [],
  });

  const { asFragment } = render(
    <Provider store={store}>
      <DragonCard dragon={dragon}/>
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});