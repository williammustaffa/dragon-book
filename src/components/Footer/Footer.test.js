import React from "react";
import Footer from "./Footer";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Test Footer component", () => {
  const { asFragment, getByText } = render(<Footer />);

  // Run tests
  const year = new Date().getFullYear();

  expect(getByText(`Dragon Book © ${year}`)).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});