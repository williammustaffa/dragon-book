import React from "react";
import { Provider } from 'react-redux';
import { mockStore } from 'store';
import Navigation from "./Navigation";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import User from "store/models/User";

test("Test Navigation component", () => {
  // Initial user
  const store = mockStore({
    user: User.state,
  });

  const { asFragment, getByText } = render(
    <Provider store={store}>
      <Navigation />
    </Provider>
  );

  // Run tests
  expect(getByText("Log in")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});