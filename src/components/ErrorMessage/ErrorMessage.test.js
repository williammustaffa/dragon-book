import React from "react";
import ErrorMessage from "./ErrorMessage";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Test ErrorMessage component", () => {
  const { asFragment } = render(
    <ErrorMessage
      title="Sample title"
      content="Sample error"
    />
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});