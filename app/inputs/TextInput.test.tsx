import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextInput } from "./TextInput";

describe("TextInput component", () => {
  it(`renders without crashing`, () => {
    const { getByRole, getByLabelText } = render(
      <TextInput
        type="text"
        label="My Label"
        value="Foo"
        onChange={() => {}}
      />,
    );

    const input = getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("Foo");
    expect(getByLabelText("My Label")).toBeTruthy();
  });
});
