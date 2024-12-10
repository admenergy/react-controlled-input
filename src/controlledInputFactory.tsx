import {
  InputConfigCollectionType,
  useControlledInputProvider,
} from "@/ControlledInputProvider";
import { AutocompleteInput, CheckboxInput, TextInput } from "@/inputs";
import React, { memo, useMemo } from "react";

export const baseInputs: InputConfigCollectionType = {
  "autocomplete": {
    type: "autocomplete",
    name: "Autocomplete",
    component: AutocompleteInput,
  },
  "select": {
    type: "autocomplete",
    name: "Autocomplete",
    component: AutocompleteInput,
  },
  "checkbox": {
    type: "checkbox",
    name: "Checkbox",
    component: CheckboxInput,
  },
  "color": {
    type: "color",
    name: "Color",
    component: TextInput,
  },
  "date": {
    type: "date",
    name: "Date",
    component: TextInput,
  },
  "datetime-local": {
    type: "datetime-local",
    name: "Datetime Local",
    component: TextInput,
  },
  "email": {
    type: "email",
    name: "Email",
    component: TextInput,
  },
  "month": {
    type: "month",
    name: "Month",
    component: TextInput,
  },
  "number": {
    type: "number",
    name: "Number",
    component: TextInput,
  },
  "password": {
    type: "password",
    name: "Password",
    component: TextInput,
  },
  "range": {
    type: "range",
    name: "Range",
    component: TextInput,
  },
  "tel": {
    type: "tel",
    name: "Phone",
    component: TextInput,
  },
  "text": {
    type: "text",
    name: "Text",
    component: TextInput,
  },
  "time": {
    type: "time",
    name: "Time",
    component: TextInput,
  },
  "url": {
    type: "url",
    name: "URL",
    component: TextInput,
  },
  "week": {
    type: "week",
    name: "Week",
    component: TextInput,
  },
};

export function controlledInputFactory(
  additionalInputs: InputConfigCollectionType = {},
) {
  const staticInputs: InputConfigCollectionType = {
    ...baseInputs,
    ...additionalInputs,
  };

  function ControlledInput(originalProps) {
    const props = useMemo(() => {
      const { value, ...restProps } = originalProps;

      return {
        ...restProps,
        value: value ?? null,
      };
    }, [originalProps]);

    const providedInputs = useControlledInputProvider();

    const allInputs = useMemo(() => {
      return {
        ...staticInputs,
        ...providedInputs,
      };
    }, [providedInputs]);

    const Input = allInputs[props.type]?.component;
    if (Input) {
      return <Input {...props} />;
    } else {
      return <div>Unknown input type: {props.type}</div>;
    }
  }

  return {
    staticInputs,
    ControlledInput: memo(ControlledInput),
  };
}
