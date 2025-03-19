import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CheckboxInput } from "./CheckboxInput";

describe("CheckboxInput component", () => {
  it(`displays a label`, () => {
    const { getByLabelText } = render(
      <CheckboxInput
        type="text"
        label="My Label"
        value={true}
        onChange={() => {}}
      />,
    );

    expect(getByLabelText("My Label")).toBeTruthy();
  });

  it(`displays a checkbox`, () => {
    const { container } = render(
      <CheckboxInput
        type="text"
        label="My Label"
        value={true}
        onChange={() => {}}
      />,
    );

    const input = container.querySelector("input");
    expect(input?.checked).toBe(true);
  });

  it(`displays an indeterminate`, () => {
    const { container } = render(
      <CheckboxInput
        type="text"
        label="My Label"
        value={null}
        onChange={() => {}}
      />,
    );

    const input = container.querySelector("input");
    expect(input?.getAttribute("data-indeterminate")).toBe("true");
  });
});
