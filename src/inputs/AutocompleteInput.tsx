import { Check as CheckIcon, Clear as ClearIcon } from "@mui/icons-material";
import {
  Autocomplete,
  Chip,
  Icon,
  IconButton,
  ListSubheader,
  TextField,
  Typography,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { setIn } from "js-common/common";
import _ from "lodash";
import React, { HTMLAttributes, useCallback, useMemo } from "react";
import { VariableSizeList } from "react-window";

const defaultPrimitiveOptionify = (value) => value;
const defaultPrimitiveGetOptionValue = (option) => option;
const defaultPrimitiveGetOptionLabel = (option) => {
  if (option === null || typeof option === "undefined") return "";
  return String(option);
};

const defaultObjectOptionify = (value, label) => ({ label, value });
const defaultObjectGetOptionValue = (option) => option?.value;
const defaultObjectGetOptionLabel = (option) => {
  if (option?.label === null || typeof option?.label === "undefined") return "";
  return String(option?.label);
};

const styleLineThrough = {
  textDecoration: "line-through",
};

const USER_CHANGED_COLOR = yellow[200];

export function AutocompleteInput(props) {
  const {
    options: propsOptions,
    originalValue,
    value: propsValue,
    style: propsStyle,
    optionify: propsOptionify,
    getOptionValue: propsGetOptionValue,
    getOptionLabel: propsGetOptionLabel,
    freeSolo: propsFreeSolo,
    multiple: propsMultiple,
    onChange: propsOnChange,
    InputLabelProps: propsInputLabelProps,
    ...restProps
  } = props;

  const optionify: (value: any, label?: string) => any = useMemo(() => {
    if (typeof propsOptionify === "function") return propsOptionify;
    if (!propsOptions?.length) return defaultPrimitiveOptionify;
    if (typeof propsOptions[0] === "object") return defaultObjectOptionify;
    return defaultPrimitiveOptionify;
  }, [propsOptionify, propsOptions]);
  const getOptionValue: (option: any) => string = useMemo(() => {
    if (typeof propsGetOptionValue === "function") return propsGetOptionValue;
    if (!propsOptions?.length) return defaultPrimitiveGetOptionValue;
    if (typeof propsOptions[0] === "object") return defaultObjectGetOptionValue;
    return defaultPrimitiveGetOptionValue;
  }, [propsGetOptionValue, propsOptions]);
  const getOptionLabel: (option: any) => string = useMemo(() => {
    if (typeof propsGetOptionLabel === "function") return propsGetOptionLabel;
    if (!propsOptions?.length) return defaultPrimitiveGetOptionLabel;
    if (typeof propsOptions[0] === "object") return defaultObjectGetOptionLabel;
    return defaultPrimitiveGetOptionLabel;
  }, [propsGetOptionLabel, propsOptions]);
  const isOptionEqualToValue = useCallback(
    (optionsOption, valueOption) => {
      return getOptionValue(optionsOption) == getOptionValue(valueOption);
    },
    [getOptionValue],
  );

  const freeSolo: boolean = useMemo(
    () => (typeof propsFreeSolo === "boolean" ? propsFreeSolo : false),
    [propsFreeSolo],
  );
  const multiple: boolean = useMemo(
    () => (typeof propsMultiple === "boolean" ? propsMultiple : false),
    [propsMultiple],
  );

  const sanitizedValue = useMemo(() => {
    return sanitize(propsValue, multiple);
  }, [multiple, propsValue]);

  const changed = useMemo(() => {
    const soValue = sanitize(originalValue, multiple);
    return !_.isEqual(soValue, sanitizedValue);
  }, [originalValue, multiple, sanitizedValue]);

  const usedOptionsMap = useMemo(() => {
    const ret = new Map();
    if (!propsOptions) return ret;

    for (const option of propsOptions ?? []) {
      ret.set(getOptionValue(option), option);
    }
    return ret;
  }, [propsOptions, getOptionValue]);

  const nonExistingOptionsMap = useMemo(() => {
    const ret = new Map();
    if (multiple) {
      // Value is an array
      for (const v of sanitizedValue) {
        // Check if value exists in options
        if (!usedOptionsMap.has(v)) {
          ret.set(v, optionify(v, v));
        }
      }
    } else {
      // Check if value is given
      if (sanitizedValue === null) {
        // Provide a blank option
        ret.set(sanitizedValue, optionify("", ""));
      } else if (typeof sanitizedValue !== "undefined") {
        // Check if value exists in options
        if (!usedOptionsMap.has(sanitizedValue)) {
          ret.set(sanitizedValue, optionify(sanitizedValue, sanitizedValue));
        }
      }
    }

    return ret;
  }, [multiple, optionify, sanitizedValue, usedOptionsMap]);

  const options = useMemo(() => {
    const ret = [];

    if (!freeSolo) {
      if (multiple) {
        for (const v of sanitizedValue) {
          if (nonExistingOptionsMap.has(v)) {
            ret.push(nonExistingOptionsMap.get(v));
          }
        }
      } else {
        if (sanitizedValue !== null) {
          if (nonExistingOptionsMap.has(sanitizedValue)) {
            ret.push(nonExistingOptionsMap.get(sanitizedValue));
          }
        }
      }
    }

    if (Array.isArray(propsOptions)) {
      const options = propsOptions || [];
      return [...ret, ...options];
    } else {
      return ret;
    }
  }, [freeSolo, propsOptions, multiple, sanitizedValue, nonExistingOptionsMap]);

  const valuesAsOptions = useMemo(() => {
    if (multiple) {
      if (typeof sanitizedValue !== "undefined" && sanitizedValue !== null) {
        return sanitizedValue.map(
          (v) => usedOptionsMap.get(v) ?? nonExistingOptionsMap.get(v),
        );
      } else {
        return [];
      }
    } else {
      const option =
        usedOptionsMap.get(sanitizedValue) ??
        nonExistingOptionsMap.get(sanitizedValue);
      return option ?? null;
    }
  }, [multiple, nonExistingOptionsMap, sanitizedValue, usedOptionsMap]);

  const InputLabelProps = useMemo(() => {
    return {
      shrink: true,
      ...propsInputLabelProps,
    };
  }, [propsInputLabelProps]);

  //////////////////
  //    Events

  const onChange = useMemo(() => {
    return (event, newValue) => {
      let parsedValue;

      // HACK: MUI does not have a good handler for freeSolo:
      // - CLICKING on an option, the value is of type option
      // - TYPING in a free solo value, the value of type string
      //
      // 1. Check if the value is in usedOptionsMap or nonExistingOptionsMap
      // 2. If not, optionify it
      const fixValueOption = (v) => {
        const vo = getOptionValue(v);
        const valueIsAnOption =
          usedOptionsMap.has(vo) || nonExistingOptionsMap.has(vo);
        return getOptionValue(valueIsAnOption ? v : optionify(v, v));
      };

      // In case existing value conflicts with the current `multiple` flag
      if (multiple) {
        if (Array.isArray(newValue)) {
          parsedValue = newValue.map((v) => fixValueOption(v));
        } else {
          parsedValue = [fixValueOption(newValue)];
        }
      } else {
        if (Array.isArray(newValue)) {
          parsedValue = fixValueOption(newValue[0]);
        } else {
          parsedValue = fixValueOption(newValue);
        }
      }

      propsOnChange(event, parsedValue);
    };
  }, [
    getOptionValue,
    multiple,
    nonExistingOptionsMap,
    optionify,
    propsOnChange,
    usedOptionsMap,
  ]);

  //////////////////
  //    Render

  const renderOption = useCallback(
    (props: HTMLAttributes<HTMLLIElement>, option, state) => {
      const value = getOptionValue(option);
      const valueExists = !nonExistingOptionsMap.has(value);
      const valid = valueExists || freeSolo;
      return (
        <li
          key={value}
          data-render-options={{
            props,
            option,
            state: {
              ...state,
              valid,
            },
          }}
        ></li>
      );
    },
    [nonExistingOptionsMap, getOptionValue, freeSolo],
  );

  const renderTags = useCallback(
    (optionValues: readonly string[], getTagProps) => {
      return optionValues.map((option: string, index: number) => {
        const value = getOptionValue(option);
        const label = getOptionLabel(option);
        const valueExists = !nonExistingOptionsMap.has(value);
        if (valueExists || freeSolo) {
          return (
            <Chip
              key={index}
              variant={"outlined"}
              color={"primary"}
              label={label}
              {...getTagProps({ index })}
            />
          );
        } else {
          return (
            <Chip
              key={index}
              title="This option is no longer valid."
              variant={"outlined"}
              color={"error"}
              label={label || value}
              style={styleLineThrough}
              {...getTagProps({ index })}
            />
          );
        }
      });
    },
    [freeSolo, getOptionLabel, getOptionValue, nonExistingOptionsMap],
  );

  const renderInput = useCallback(
    (muiParams) => {
      const option =
        usedOptionsMap.get(sanitizedValue) ??
        nonExistingOptionsMap.get(sanitizedValue);
      const value = getOptionValue(option);

      const selectedValueDoesntExists = !!nonExistingOptionsMap.size;
      const error = !!value && selectedValueDoesntExists && !freeSolo;

      muiParams = setIn(muiParams, ["InputLabelProps", "shrink"], true);

      if (InputLabelProps) {
        // Mutates object, but it's ok since the line above copys the object
        _.merge(muiParams.InputLabelProps, InputLabelProps);
      }

      if (changed) {
        muiParams = setIn(
          muiParams,
          ["style", "backgroundColor"],
          USER_CHANGED_COLOR,
        );
      }

      // only for singular selection mode that is not freeSolo
      if (!multiple && !freeSolo) {
        // line-through non-existing TextField value
        if (selectedValueDoesntExists) {
          muiParams = setIn(muiParams, ["style"], styleLineThrough);
        }
      }

      return (
        <TextField
          error={error}
          label={props.label}
          variant={"outlined"}
          margin={"dense"}
          {...muiParams}
        />
      );
    },
    [
      InputLabelProps,
      changed,
      freeSolo,
      getOptionValue,
      multiple,
      nonExistingOptionsMap,
      props.label,
      sanitizedValue,
      usedOptionsMap,
    ],
  );

  return (
    <>
      <Autocomplete
        options={options}
        value={valuesAsOptions}
        freeSolo={freeSolo}
        multiple={multiple}
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        disableListWrap
        ListboxComponent={ListboxComponent}
        renderOption={renderOption}
        renderTags={renderTags}
        renderInput={renderInput}
        onChange={onChange}
        {...restProps}
      />
    </>
  );
}

const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const { data, index, style } = props;

  const dataSet = data[String(index)];
  const dataSetProps = dataSet.props;
  const renderOptions = dataSetProps["data-render-options"];

  const { selected, valid } = renderOptions.state;

  const LiIcon = valid ? CheckIcon : ClearIcon;
  const color = valid ? "success" : "error";

  // line-through non-existing options that are temporarily shown
  const inlineStyle = {
    ...style,
    ...(valid ? {} : styleLineThrough),
    top: style.top + LISTBOX_PADDING,
  };

  // FIXME: Dunno if this is correct
  // FIXME: no-prototype-builtins
  if (renderOptions.props.hasOwnProperty("group")) {
    return (
      <ListSubheader
        key={renderOptions.props.key}
        component="div"
        style={inlineStyle}
      >
        {renderOptions.props.group}
      </ListSubheader>
    );
  }

  const optionsStringMode = typeof renderOptions.option === "string";
  if (optionsStringMode) {
    return (
      <Typography
        component="li"
        {...renderOptions.props}
        noWrap
        style={inlineStyle}
      >
        <IconButton>
          {selected ? <LiIcon color={color} /> : <Icon />}
        </IconButton>
        {renderOptions.option}
      </Typography>
    );
  } else {
    return (
      <Typography
        component="li"
        {...renderOptions.props}
        noWrap
        style={inlineStyle}
      >
        <IconButton>
          {selected ? <LiIcon color={color} /> : <Icon />}
        </IconButton>
        {renderOptions.props.key}
      </Typography>
    );
  }
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement, any>(
  function OuterElementTypeForwardRef(props, ref) {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  },
);

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement, any>(
  function ListboxComponent(props, ref) {
    const { children, ...other } = props;

    const itemData = [];
    children.forEach((item) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    });

    const itemCount = itemData.length;
    const itemSize = 36;

    const getChildSize = (child) => {
      // FIXME: no-prototype-builtins
      if (child.hasOwnProperty("group")) {
        return 48;
      }

      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={(index) => getChildSize(itemData[String(index)])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  },
);

function sanitize(value, multiple) {
  if (multiple) {
    if (Array.isArray(value)) {
      return value;
    } else if (typeof value !== "undefined" && value !== null) {
      return [value];
    } else {
      return [];
    }
  } else {
    if (Array.isArray(value)) {
      return value[0];
    } else if (typeof value !== "undefined" && value !== null) {
      return value;
    } else {
      return null;
    }
  }
}
