import React from "react";
import Spinner from "./Spinner";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Test Spinner component", () => {
  const { asFragment } = render(<Spinner />);

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});