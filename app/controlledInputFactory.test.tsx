import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { controlledInputFactory } from "./controlledInputFactory";

describe("controlledInputFactory helper", () => {
  it(`creates inputs`, () => {
    const { staticInputs, ControlledInput } = controlledInputFactory({});

    expect(Object.keys(staticInputs).length).toBeGreaterThan(0);

    // Doesn't crash
    for (const { type } of Object.values(staticInputs)) {
      render(<ControlledInput type={type} onChange={() => {}} />);
    }
  });
});
