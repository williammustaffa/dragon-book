import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Test Header component", () => {
  const { asFragment } = render(<Header />);

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});