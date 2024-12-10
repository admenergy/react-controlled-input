// Import from dist, rather than src:
//   import { MyComponent } from "../../dist/js/components";
//
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { CheckboxInput } from "../../dist/js/inputs";

describe("TextInput component", () => {
  it(`displays a label`, () => {
    const { getByLabelText } = render(
      <CheckboxInput type="text" label="My Label" value={true} />,
    );

    expect(getByLabelText("My Label")).toBeTruthy();
  });

  it(`displays a checkbox`, () => {
    const { container } = render(
      <CheckboxInput type="text" label="My Label" value={true} />,
    );

    const input = container.querySelector("input");

    expect(input).toHaveProperty("checked", true);
  });

  it(`displays an indeterminate`, () => {
    const { container } = render(
      <CheckboxInput type="text" label="My Label" value={null} />,
    );

    const input = container.querySelector("input");

    expect(input).toHaveAttribute("data-indeterminate", "true");
  });
});
