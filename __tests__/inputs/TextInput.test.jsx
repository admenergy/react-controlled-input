// Import from dist, rather than src:
//   import { MyComponent } from "../../dist/js/components";
//
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { TextInput } from "../../dist/js/inputs";

describe("TextInput component", () => {
  it(`renders without crashing`, () => {
    const { container, getByRole, getByLabelText, getByText } = render(
      <TextInput type="text" label="My Label" value="Foo" />,
    );

    expect(getByRole("textbox")).toHaveValue("Foo");
    expect(getByLabelText("My Label")).toBeTruthy();
  });
});
