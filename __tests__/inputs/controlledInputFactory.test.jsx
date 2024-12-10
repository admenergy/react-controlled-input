// Import from dist, rather than src:
//   import { MyComponent } from "../../dist/js/components";
//
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { controlledInputFactory } from "../../dist/js";

describe("controlledInputFactory helper", () => {
  it(`creates inputs`, () => {
    const { staticInputs, ControlledInput } = controlledInputFactory({});

    expect(Object.keys(staticInputs).length).toBeGreaterThan(0);

    // Doesn't crash
    for (const { type } of Object.values(staticInputs)) {
      render(<ControlledInput type={type} />);
    }
  });
});
