import { Checkbox, FormControlLabel } from "@mui/material";
import { yellow } from "@mui/material/colors";
import _ from "lodash";
import React, { useMemo } from "react";

const USER_CHANGED_COLOR = yellow[200];

export function CheckboxInput(props) {
  const {
    indeterminate: propsIndeterminate,
    InputLabelProps,
    label,
    propsStyle,
    originalValue,
    value: propsValue,
    ...mainProps
  } = props;

  const indeterminate = useMemo(() => {
    if (typeof propsIndeterminate === "boolean") return propsIndeterminate;
    if (propsValue === null) return true;
    return false;
  }, [propsIndeterminate, propsValue]);

  const sanitizedValue = useMemo(() => {
    return sanitize(propsValue);
  }, [propsValue]);

  const changed = useMemo(() => {
    const soValue = sanitize(originalValue);
    return !_.isEqual(soValue, sanitizedValue);
  }, [originalValue, sanitizedValue]);

  const style = useMemo(() => {
    const ret = {
      ...propsStyle,
    };

    if (changed) {
      Object.assign(ret, { backgroundColor: USER_CHANGED_COLOR });
    }

    return ret;
  }, [changed, propsStyle]);

  return (
    <FormControlLabel
      {...InputLabelProps}
      label={label}
      style={style}
      control={
        <Checkbox
          color="primary"
          checked={sanitizedValue}
          indeterminate={indeterminate}
          {...mainProps}
        />
      }
    />
  );
}

function sanitize(value) {
  if (typeof value === "boolean") return value;
  return !!value;
}
