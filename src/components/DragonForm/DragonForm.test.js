import React from "react";
import { Provider } from 'react-redux';
import { mockStore } from 'store';
import DragonForm from "./DragonForm";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Test DragonForm component", () => {
  // Mock store
  const store = mockStore({});

  const { asFragment } = render(
    <Provider store={store}>
      <DragonForm />
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});