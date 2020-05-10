import React from "react";
import CustomDropdown from "./CustomDropdown";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Test CustomDropdown component", () => {
  const { asFragment } = render(
    <CustomDropdown
      options={[{ key: "1", value: "1", test: "option" }]}
      name="test-dropdown"
    />
  );

  // Run tests
  expect(asFragment()).toMatchSnapshot();
});