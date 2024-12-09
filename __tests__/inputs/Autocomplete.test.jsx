// Import from dist, rather than src:
//   import { MyComponent } from "../../dist/js/components";
//
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { AutocompleteInput } from "../../dist/js/inputs";

describe("AutocompleteInput component basics", () => {
  const options = ["Option 1", "Option 2"];

  it(`renders empty without crashing`, () => {
    render(<AutocompleteInput options={[]} />);
  });

  it(`displays a label`, () => {
    const { container } = render(
      <AutocompleteInput options={[]} label="My Label" />,
    );

    const labelElement = container.querySelector("label");

    expect(labelElement).toBeTruthy();
    expect(labelElement).toHaveTextContent("My Label");
  });

  it("renders options without crashing", async () => {
    const { getByRole, getByText } = render(
      <AutocompleteInput options={options} />,
    );

    fireEvent.click(getByRole("button"));

    await waitFor(
      () => {
        expect(getByText("Option 1")).toBeTruthy();
        expect(getByText("Option 2")).toBeTruthy();
      },
      { timeout: 1000 },
    );
  });
});

describe(`AutocompleteInput freeSolo and multiple`, () => {
  const options = ["Option 1", "Option 2"];

  it.each([
    { freeSolo: false, multiple: false },
    { freeSolo: false, multiple: true },
    { freeSolo: true, multiple: false },
    { freeSolo: true, multiple: true },
  ])(
    `displays a value in the input. freeSolo: $freeSolo, multiple: $multiple`,
    async ({ freeSolo, multiple }) => {
      const value = "Option 1";

      const { getByRole, getByText } = render(
        <AutocompleteInput
          label="My Label"
          options={options}
          value={value}
          freeSolo={freeSolo}
          multiple={multiple}
        />,
      );

      if (multiple) {
        // Should show text value in a chip
        expect(getByText(value)).toBeTruthy();
      } else {
        // Should contain value inside the input box
        expect(getByRole("combobox")).toHaveValue(value);
      }
    },
  );

  it.each([
    { freeSolo: false, multiple: false },
    { freeSolo: false, multiple: true },
    { freeSolo: true, multiple: false },
    { freeSolo: true, multiple: true },
  ])(
    `displays strike-through only on freeSolos. freeSolo: $freeSolo, multiple: $multiple`,
    async ({ freeSolo, multiple }) => {
      const value = "Option 3";

      const { container } = render(
        <AutocompleteInput
          label="My Label"
          options={options}
          value={value}
          freeSolo={freeSolo}
          multiple={multiple}
        />,
      );

      const styleStrikeThrough = "text-decoration: line-through";
      const muiTextFieldRoot = container.querySelector(".MuiTextField-root");
      const muiChipRoot = container.querySelector(".MuiChip-root");
      const whichInput = multiple ? muiChipRoot : muiTextFieldRoot;

      if (freeSolo) {
        expect(whichInput).not.toHaveStyle(styleStrikeThrough);
      } else {
        expect(whichInput).toHaveStyle(styleStrikeThrough);
      }
    },
  );
});
