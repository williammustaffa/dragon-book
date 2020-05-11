import React from "react";
import ConfirmationModal from "./ConfirmationModal";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Test ConfirmationModal component", () => {
  const { asFragment } = render(<ConfirmationModal />);

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});