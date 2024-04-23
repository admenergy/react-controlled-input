import { TextField } from "@mui/material";
import { yellow } from "@mui/material/colors";
import _ from "lodash";
import React, { useCallback, useMemo } from "react";

const USER_CHANGED_COLOR = yellow[200];

export function TextInput(props) {
  const {
    originalValue,
    value: propsValue,
    style: propsStyle,
    InputLabelProps: propsInputLabelProps,
    onChange: propsOnChange,
    ...mainProps
  } = props;

  const sanitizedValue = useMemo(() => {
    return sanitize(propsValue);
  }, [propsValue]);

  const changed = useMemo(() => {
    const soValue = sanitize(originalValue);
    return !_.isEqual(soValue, sanitizedValue);
  }, [originalValue, sanitizedValue]);

  const valueSanitizer = useMemo(() => {
    switch (mainProps.type) {
      default:
        return (event) => event.target.value;
    }
  }, [mainProps.type]);

  const InputLabelProps = useMemo(() => {
    return {
      shrink: true,
      ...propsInputLabelProps,
    };
  }, [propsInputLabelProps]);

  const style = useMemo(() => {
    const ret = {
      width: "100%",
      ...propsStyle,
    };

    if (changed) {
      _.merge(ret, { backgroundColor: USER_CHANGED_COLOR });
    }

    return ret;
  }, [changed, propsStyle]);

  //////////////////
  //    Events

  const onChange = useCallback(
    (event) => {
      propsOnChange(event, valueSanitizer(event));
    },
    [propsOnChange, valueSanitizer],
  );

  //////////////////
  //    Render

  return (
    <TextField
      {...mainProps}
      InputLabelProps={InputLabelProps}
      style={style}
      value={sanitizedValue}
      onChange={onChange}
    />
  );
}

function sanitize(value) {
  if (value === undefined || value === null) return "";

  return value;
}
