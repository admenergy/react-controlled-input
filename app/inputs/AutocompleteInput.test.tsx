import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AutocompleteInput } from "./AutocompleteInput";

describe("AutocompleteInput component basics", () => {
  const options = ["Option 1", "Option 2"];

  it(`renders empty without crashing`, () => {
    render(<AutocompleteInput options={[]} onChange={() => {}} />);
  });

  it(`displays a label`, () => {
    const { container } = render(
      <AutocompleteInput options={[]} label="My Label" onChange={() => {}} />,
    );

    const labelElement = container.querySelector("label");
    expect(labelElement?.textContent).toBe("My Label");
  });

  it("renders options without crashing", async () => {
    const { getByRole, getByText } = render(
      <AutocompleteInput options={options} onChange={() => {}} />,
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
          onChange={() => {}}
        />,
      );

      if (multiple) {
        // Should show text value in a chip
        expect(getByText(value)).toBeTruthy();
      } else {
        // Should contain value inside the input box
        const input = getByRole("combobox") as HTMLInputElement;
        expect(input.value).toBe(value);
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
          onChange={() => {}}
        />,
      );

      const muiTextFieldRoot = container.querySelector(
        ".MuiTextField-root",
      ) as HTMLElement;
      const muiChipRoot = container.querySelector(
        ".MuiChip-root",
      ) as HTMLElement;
      const whichInput = multiple ? muiChipRoot : muiTextFieldRoot;

      if (freeSolo) {
        expect(whichInput?.style.textDecoration).not.toBe("line-through");
      } else {
        expect(whichInput?.style.textDecoration).toBe("line-through");
      }
    },
  );
});
