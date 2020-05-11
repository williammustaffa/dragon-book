import React from "react";
import LoginView from "./LoginView";
import { Provider } from "react-redux";
import { mockStore } from "store";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import User from "store/models/User";

test("Test LoginView component", () => {
  // Mock store
  const store = mockStore({
    user: User.state,
  });

  const { asFragment } = render(
    <Provider store={store}>
      <LoginView location={window.location}/>
    </Provider>
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});