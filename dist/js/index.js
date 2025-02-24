(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@mui/icons-material"), require("@mui/material"), require("lodash"), require("react-window"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@mui/icons-material", "@mui/material", "lodash", "react-window"], factory);
	else if(typeof exports === 'object')
		exports["@admenergy/react-controlled-input"] = factory(require("react"), require("@mui/icons-material"), require("@mui/material"), require("lodash"), require("react-window"));
	else
		root["@admenergy/react-controlled-input"] = factory(root["react"], root["@mui/icons-material"], root["@mui/material"], root["lodash"], root["react-window"]);
})(global, (__WEBPACK_EXTERNAL_MODULE__155__, __WEBPACK_EXTERNAL_MODULE__410__, __WEBPACK_EXTERNAL_MODULE__823__, __WEBPACK_EXTERNAL_MODULE__773__, __WEBPACK_EXTERNAL_MODULE__202__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AutocompleteInput: () => (/* reexport */ AutocompleteInput),
  CheckboxInput: () => (/* reexport */ CheckboxInput),
  TextInput: () => (/* reexport */ TextInput)
});

// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(410);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(823);
;// ./node_modules/@mui/material/colors/yellow.js
const yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600'
};
/* harmony default export */ const colors_yellow = (yellow);
// EXTERNAL MODULE: ./node_modules/js-common/dist/js/common/index.js
var common = __webpack_require__(307);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(773);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-window"
var external_react_window_ = __webpack_require__(202);
;// ./src/inputs/AutocompleteInput.tsx
var _excluded = ["options", "originalValue", "value", "optionify", "getOptionValue", "getOptionLabel", "freeSolo", "multiple", "onChange", "InputLabelProps"],
  _excluded2 = ["children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }







var defaultPrimitiveOptionify = function defaultPrimitiveOptionify(value) {
  return value;
};
var defaultPrimitiveGetOptionValue = function defaultPrimitiveGetOptionValue(option) {
  return option;
};
var defaultPrimitiveGetOptionLabel = function defaultPrimitiveGetOptionLabel(option) {
  if (option === null || typeof option === "undefined") return "";
  return String(option);
};
var defaultObjectOptionify = function defaultObjectOptionify(value, label) {
  return {
    label: label,
    value: value
  };
};
var defaultObjectGetOptionValue = function defaultObjectGetOptionValue(option) {
  return option === null || option === void 0 ? void 0 : option.value;
};
var defaultObjectGetOptionLabel = function defaultObjectGetOptionLabel(option) {
  if ((option === null || option === void 0 ? void 0 : option.label) === null || typeof (option === null || option === void 0 ? void 0 : option.label) === "undefined") return "";
  return String(option === null || option === void 0 ? void 0 : option.label);
};
var styleLineThrough = {
  textDecoration: "line-through"
};
var USER_CHANGED_COLOR = colors_yellow[200];
function AutocompleteInput(props) {
  var propsOptions = props.options,
    originalValue = props.originalValue,
    propsValue = props.value,
    propsOptionify = props.optionify,
    propsGetOptionValue = props.getOptionValue,
    propsGetOptionLabel = props.getOptionLabel,
    propsFreeSolo = props.freeSolo,
    propsMultiple = props.multiple,
    propsOnChange = props.onChange,
    propsInputLabelProps = props.InputLabelProps,
    restProps = _objectWithoutProperties(props, _excluded);
  delete restProps.style;
  var optionify = (0,external_react_.useMemo)(function () {
    if (typeof propsOptionify === "function") return propsOptionify;
    if (!(propsOptions !== null && propsOptions !== void 0 && propsOptions.length)) return defaultPrimitiveOptionify;
    if (_typeof(propsOptions[0]) === "object") return defaultObjectOptionify;
    return defaultPrimitiveOptionify;
  }, [propsOptionify, propsOptions]);
  var getOptionValue = (0,external_react_.useMemo)(function () {
    if (typeof propsGetOptionValue === "function") return propsGetOptionValue;
    if (!(propsOptions !== null && propsOptions !== void 0 && propsOptions.length)) return defaultPrimitiveGetOptionValue;
    if (_typeof(propsOptions[0]) === "object") return defaultObjectGetOptionValue;
    return defaultPrimitiveGetOptionValue;
  }, [propsGetOptionValue, propsOptions]);
  var getOptionLabel = (0,external_react_.useMemo)(function () {
    if (typeof propsGetOptionLabel === "function") return propsGetOptionLabel;
    if (!(propsOptions !== null && propsOptions !== void 0 && propsOptions.length)) return defaultPrimitiveGetOptionLabel;
    if (_typeof(propsOptions[0]) === "object") return defaultObjectGetOptionLabel;
    return defaultPrimitiveGetOptionLabel;
  }, [propsGetOptionLabel, propsOptions]);
  var isOptionEqualToValue = (0,external_react_.useCallback)(function (optionsOption, valueOption) {
    return getOptionValue(optionsOption) == getOptionValue(valueOption);
  }, [getOptionValue]);
  var freeSolo = (0,external_react_.useMemo)(function () {
    return typeof propsFreeSolo === "boolean" ? propsFreeSolo : false;
  }, [propsFreeSolo]);
  var multiple = (0,external_react_.useMemo)(function () {
    return typeof propsMultiple === "boolean" ? propsMultiple : false;
  }, [propsMultiple]);
  var sanitizedValue = (0,external_react_.useMemo)(function () {
    return sanitize(propsValue, multiple);
  }, [multiple, propsValue]);
  var changed = (0,external_react_.useMemo)(function () {
    var soValue = sanitize(originalValue, multiple);
    return !external_lodash_default().isEqual(soValue, sanitizedValue);
  }, [originalValue, multiple, sanitizedValue]);
  var usedOptionsMap = (0,external_react_.useMemo)(function () {
    var ret = new Map();
    if (!propsOptions) return ret;
    var _iterator = _createForOfIteratorHelper(propsOptions !== null && propsOptions !== void 0 ? propsOptions : []),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var option = _step.value;
        ret.set(getOptionValue(option), option);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return ret;
  }, [propsOptions, getOptionValue]);
  var nonExistingOptionsMap = (0,external_react_.useMemo)(function () {
    var ret = new Map();
    if (multiple) {
      // Value is an array
      var _iterator2 = _createForOfIteratorHelper(sanitizedValue),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var v = _step2.value;
          // Check if value exists in options
          if (!usedOptionsMap.has(v)) {
            ret.set(v, optionify(v, v));
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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
  var options = (0,external_react_.useMemo)(function () {
    var ret = [];
    if (!freeSolo) {
      if (multiple) {
        var _iterator3 = _createForOfIteratorHelper(sanitizedValue),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var v = _step3.value;
            if (nonExistingOptionsMap.has(v)) {
              ret.push(nonExistingOptionsMap.get(v));
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
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
      var _options = propsOptions || [];
      return [].concat(ret, _toConsumableArray(_options));
    } else {
      return ret;
    }
  }, [freeSolo, propsOptions, multiple, sanitizedValue, nonExistingOptionsMap]);
  var valuesAsOptions = (0,external_react_.useMemo)(function () {
    if (multiple) {
      if (typeof sanitizedValue !== "undefined" && sanitizedValue !== null) {
        return sanitizedValue.map(function (v) {
          var _usedOptionsMap$get;
          return (_usedOptionsMap$get = usedOptionsMap.get(v)) !== null && _usedOptionsMap$get !== void 0 ? _usedOptionsMap$get : nonExistingOptionsMap.get(v);
        });
      } else {
        return [];
      }
    } else {
      var _usedOptionsMap$get2;
      var option = (_usedOptionsMap$get2 = usedOptionsMap.get(sanitizedValue)) !== null && _usedOptionsMap$get2 !== void 0 ? _usedOptionsMap$get2 : nonExistingOptionsMap.get(sanitizedValue);
      return option !== null && option !== void 0 ? option : null;
    }
  }, [multiple, nonExistingOptionsMap, sanitizedValue, usedOptionsMap]);
  var InputLabelProps = (0,external_react_.useMemo)(function () {
    return _objectSpread({
      shrink: true
    }, propsInputLabelProps);
  }, [propsInputLabelProps]);

  //////////////////
  //    Events

  var onChange = (0,external_react_.useMemo)(function () {
    return function (event, newValue) {
      var parsedValue;

      // HACK: MUI does not have a good handler for freeSolo:
      // - CLICKING on an option, the value is of type option
      // - TYPING in a free solo value, the value of type string
      //
      // 1. Check if the value is in usedOptionsMap or nonExistingOptionsMap
      // 2. If not, optionify it
      var fixValueOption = function fixValueOption(v) {
        var vo = getOptionValue(v);
        var valueIsAnOption = usedOptionsMap.has(vo) || nonExistingOptionsMap.has(vo);
        return getOptionValue(valueIsAnOption ? v : optionify(v, v));
      };

      // In case existing value conflicts with the current `multiple` flag
      if (multiple) {
        if (Array.isArray(newValue)) {
          parsedValue = newValue.map(function (v) {
            return fixValueOption(v);
          });
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
  }, [getOptionValue, multiple, nonExistingOptionsMap, optionify, propsOnChange, usedOptionsMap]);

  //////////////////
  //    Render

  var renderOption = (0,external_react_.useCallback)(function (props, option, state) {
    var value = getOptionValue(option);
    var valueExists = !nonExistingOptionsMap.has(value);
    var valid = valueExists || freeSolo;
    return /*#__PURE__*/external_react_default().createElement("li", {
      key: value,
      "data-render-options": {
        props: props,
        option: option,
        state: _objectSpread(_objectSpread({}, state), {}, {
          valid: valid
        })
      }
    });
  }, [nonExistingOptionsMap, getOptionValue, freeSolo]);
  var renderTags = (0,external_react_.useCallback)(function (optionValues, getTagProps) {
    return optionValues.map(function (option, index) {
      var value = getOptionValue(option);
      var label = getOptionLabel(option);
      var valueExists = !nonExistingOptionsMap.has(value);
      if (valueExists || freeSolo) {
        return /*#__PURE__*/external_react_default().createElement(material_.Chip, _extends({
          key: index,
          variant: "outlined",
          color: "primary",
          label: label
        }, getTagProps({
          index: index
        })));
      } else {
        return /*#__PURE__*/external_react_default().createElement(material_.Chip, _extends({
          key: index,
          title: "This option is no longer valid.",
          variant: "outlined",
          color: "error",
          label: label || value,
          style: styleLineThrough
        }, getTagProps({
          index: index
        })));
      }
    });
  }, [freeSolo, getOptionLabel, getOptionValue, nonExistingOptionsMap]);
  var renderInput = (0,external_react_.useCallback)(function (muiParams) {
    var _usedOptionsMap$get3;
    var option = (_usedOptionsMap$get3 = usedOptionsMap.get(sanitizedValue)) !== null && _usedOptionsMap$get3 !== void 0 ? _usedOptionsMap$get3 : nonExistingOptionsMap.get(sanitizedValue);
    var value = getOptionValue(option);
    var selectedValueDoesntExists = !!nonExistingOptionsMap.size;
    var error = !!value && selectedValueDoesntExists && !freeSolo;
    muiParams = (0,common.setIn)(muiParams, ["InputLabelProps", "shrink"], true);
    if (InputLabelProps) {
      // Mutates object, but it's ok since the line above copys the object
      external_lodash_default().merge(muiParams.InputLabelProps, InputLabelProps);
    }
    if (changed) {
      muiParams = (0,common.setIn)(muiParams, ["style", "backgroundColor"], USER_CHANGED_COLOR);
    }

    // only for singular selection mode that is not freeSolo
    if (!multiple && !freeSolo) {
      // line-through non-existing TextField value
      if (selectedValueDoesntExists) {
        muiParams = (0,common.setIn)(muiParams, ["style"], styleLineThrough);
      }
    }
    return /*#__PURE__*/external_react_default().createElement(material_.TextField, _extends({
      error: error,
      label: props.label,
      variant: "outlined",
      margin: "dense"
    }, muiParams));
  }, [InputLabelProps, changed, freeSolo, getOptionValue, multiple, nonExistingOptionsMap, props.label, sanitizedValue, usedOptionsMap]);
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(material_.Autocomplete, _extends({
    options: options,
    value: valuesAsOptions,
    freeSolo: freeSolo,
    multiple: multiple,
    getOptionLabel: getOptionLabel,
    isOptionEqualToValue: isOptionEqualToValue,
    disableListWrap: true,
    ListboxComponent: ListboxComponent,
    renderOption: renderOption,
    renderTags: renderTags,
    renderInput: renderInput,
    onChange: onChange
  }, restProps)));
}
var LISTBOX_PADDING = 8; // px

function renderRow(props) {
  var data = props.data,
    index = props.index,
    style = props.style;
  var dataSet = data[String(index)];
  var dataSetProps = dataSet.props;
  var renderOptions = dataSetProps["data-render-options"];
  var _renderOptions$state = renderOptions.state,
    selected = _renderOptions$state.selected,
    valid = _renderOptions$state.valid;
  var LiIcon = valid ? icons_material_.Check : icons_material_.Clear;
  var color = valid ? "success" : "error";

  // line-through non-existing options that are temporarily shown
  var inlineStyle = _objectSpread(_objectSpread(_objectSpread({}, style), valid ? {} : styleLineThrough), {}, {
    top: style.top + LISTBOX_PADDING
  });

  // FIXME: Dunno if this is correct
  // FIXME: no-prototype-builtins
  if (renderOptions.props.hasOwnProperty("group")) {
    return /*#__PURE__*/external_react_default().createElement(material_.ListSubheader, {
      key: renderOptions.props.key,
      component: "div",
      style: inlineStyle
    }, renderOptions.props.group);
  }
  var optionsStringMode = typeof renderOptions.option === "string";
  if (optionsStringMode) {
    return /*#__PURE__*/external_react_default().createElement(material_.Typography, _extends({
      component: "li"
    }, renderOptions.props, {
      noWrap: true,
      style: inlineStyle
    }), /*#__PURE__*/external_react_default().createElement(material_.IconButton, null, selected ? /*#__PURE__*/external_react_default().createElement(LiIcon, {
      color: color
    }) : /*#__PURE__*/external_react_default().createElement(material_.Icon, null)), renderOptions.option);
  } else {
    return /*#__PURE__*/external_react_default().createElement(material_.Typography, _extends({
      component: "li"
    }, renderOptions.props, {
      noWrap: true,
      style: inlineStyle
    }), /*#__PURE__*/external_react_default().createElement(material_.IconButton, null, selected ? /*#__PURE__*/external_react_default().createElement(LiIcon, {
      color: color
    }) : /*#__PURE__*/external_react_default().createElement(material_.Icon, null)), renderOptions.props.key);
  }
}
var OuterElementContext = /*#__PURE__*/external_react_default().createContext({});
var OuterElementType = /*#__PURE__*/external_react_default().forwardRef(function OuterElementTypeForwardRef(props, ref) {
  var outerProps = external_react_default().useContext(OuterElementContext);
  return /*#__PURE__*/external_react_default().createElement("div", _extends({
    ref: ref
  }, props, outerProps));
});
function useResetCache(data) {
  var ref = external_react_default().useRef(null);
  external_react_default().useEffect(function () {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
var ListboxComponent = /*#__PURE__*/external_react_default().forwardRef(function ListboxComponent(props, ref) {
  var children = props.children,
    other = _objectWithoutProperties(props, _excluded2);
  var itemData = [];
  children.forEach(function (item) {
    itemData.push(item);
    itemData.push.apply(itemData, _toConsumableArray(item.children || []));
  });
  var itemCount = itemData.length;
  var itemSize = 36;
  var getChildSize = function getChildSize(child) {
    // FIXME: no-prototype-builtins
    if (child.hasOwnProperty("group")) {
      return 48;
    }
    return itemSize;
  };
  var getHeight = function getHeight() {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce(function (a, b) {
      return a + b;
    }, 0);
  };
  var gridRef = useResetCache(itemCount);
  return /*#__PURE__*/external_react_default().createElement("div", {
    ref: ref
  }, /*#__PURE__*/external_react_default().createElement(OuterElementContext.Provider, {
    value: other
  }, /*#__PURE__*/external_react_default().createElement(external_react_window_.VariableSizeList, {
    itemData: itemData,
    height: getHeight() + 2 * LISTBOX_PADDING,
    width: "100%",
    ref: gridRef
    // @ts-ignore
    ,
    outerElementType: OuterElementType,
    innerElementType: "ul",
    itemSize: function itemSize(index) {
      return getChildSize(itemData[String(index)]);
    },
    overscanCount: 5,
    itemCount: itemCount
  }, renderRow)));
});
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
;// ./src/inputs/CheckboxInput.tsx
function CheckboxInput_typeof(o) { "@babel/helpers - typeof"; return CheckboxInput_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CheckboxInput_typeof(o); }
var CheckboxInput_excluded = ["indeterminate", "InputLabelProps", "label", "propsStyle", "originalValue", "value"];
function CheckboxInput_extends() { return CheckboxInput_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, CheckboxInput_extends.apply(null, arguments); }
function CheckboxInput_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CheckboxInput_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CheckboxInput_ownKeys(Object(t), !0).forEach(function (r) { CheckboxInput_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CheckboxInput_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function CheckboxInput_defineProperty(e, r, t) { return (r = CheckboxInput_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function CheckboxInput_toPropertyKey(t) { var i = CheckboxInput_toPrimitive(t, "string"); return "symbol" == CheckboxInput_typeof(i) ? i : i + ""; }
function CheckboxInput_toPrimitive(t, r) { if ("object" != CheckboxInput_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CheckboxInput_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function CheckboxInput_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = CheckboxInput_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function CheckboxInput_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




var CheckboxInput_USER_CHANGED_COLOR = colors_yellow[200];
function CheckboxInput(props) {
  var propsIndeterminate = props.indeterminate,
    InputLabelProps = props.InputLabelProps,
    label = props.label,
    propsStyle = props.propsStyle,
    originalValue = props.originalValue,
    propsValue = props.value,
    mainProps = CheckboxInput_objectWithoutProperties(props, CheckboxInput_excluded);
  var indeterminate = (0,external_react_.useMemo)(function () {
    if (typeof propsIndeterminate === "boolean") return propsIndeterminate;
    if (propsValue === null) return true;
    return false;
  }, [propsIndeterminate, propsValue]);
  var sanitizedValue = (0,external_react_.useMemo)(function () {
    return CheckboxInput_sanitize(propsValue);
  }, [propsValue]);
  var changed = (0,external_react_.useMemo)(function () {
    var soValue = CheckboxInput_sanitize(originalValue);
    return !external_lodash_default().isEqual(soValue, sanitizedValue);
  }, [originalValue, sanitizedValue]);
  var style = (0,external_react_.useMemo)(function () {
    var ret = CheckboxInput_objectSpread({}, propsStyle);
    if (changed) {
      Object.assign(ret, {
        backgroundColor: CheckboxInput_USER_CHANGED_COLOR
      });
    }
    return ret;
  }, [changed, propsStyle]);
  return /*#__PURE__*/external_react_default().createElement(material_.FormControlLabel, CheckboxInput_extends({}, InputLabelProps, {
    label: label,
    style: style,
    control: /*#__PURE__*/external_react_default().createElement(material_.Checkbox, CheckboxInput_extends({
      color: "primary",
      checked: sanitizedValue,
      indeterminate: indeterminate
    }, mainProps))
  }));
}
function CheckboxInput_sanitize(value) {
  if (typeof value === "boolean") return value;
  return !!value;
}
;// ./src/inputs/TextInput.tsx
function TextInput_typeof(o) { "@babel/helpers - typeof"; return TextInput_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TextInput_typeof(o); }
var TextInput_excluded = ["originalValue", "value", "style", "InputLabelProps", "onChange"];
function TextInput_extends() { return TextInput_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TextInput_extends.apply(null, arguments); }
function TextInput_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function TextInput_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? TextInput_ownKeys(Object(t), !0).forEach(function (r) { TextInput_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TextInput_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function TextInput_defineProperty(e, r, t) { return (r = TextInput_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function TextInput_toPropertyKey(t) { var i = TextInput_toPrimitive(t, "string"); return "symbol" == TextInput_typeof(i) ? i : i + ""; }
function TextInput_toPrimitive(t, r) { if ("object" != TextInput_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TextInput_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TextInput_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = TextInput_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function TextInput_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




var TextInput_USER_CHANGED_COLOR = colors_yellow[200];
function TextInput(props) {
  var originalValue = props.originalValue,
    propsValue = props.value,
    propsStyle = props.style,
    propsInputLabelProps = props.InputLabelProps,
    propsOnChange = props.onChange,
    mainProps = TextInput_objectWithoutProperties(props, TextInput_excluded);
  var sanitizedValue = (0,external_react_.useMemo)(function () {
    return TextInput_sanitize(propsValue);
  }, [propsValue]);
  var changed = (0,external_react_.useMemo)(function () {
    var soValue = TextInput_sanitize(originalValue);
    return !external_lodash_default().isEqual(soValue, sanitizedValue);
  }, [originalValue, sanitizedValue]);
  var valueSanitizer = (0,external_react_.useMemo)(function () {
    switch (mainProps.type) {
      default:
        return function (event) {
          return event.target.value;
        };
    }
  }, [mainProps.type]);
  var InputLabelProps = (0,external_react_.useMemo)(function () {
    return TextInput_objectSpread({
      shrink: true
    }, propsInputLabelProps);
  }, [propsInputLabelProps]);
  var style = (0,external_react_.useMemo)(function () {
    var ret = TextInput_objectSpread({
      width: "100%"
    }, propsStyle);
    if (changed) {
      external_lodash_default().merge(ret, {
        backgroundColor: TextInput_USER_CHANGED_COLOR
      });
    }
    return ret;
  }, [changed, propsStyle]);

  //////////////////
  //    Events

  var onChange = (0,external_react_.useCallback)(function (event) {
    propsOnChange(event, valueSanitizer(event));
  }, [propsOnChange, valueSanitizer]);

  //////////////////
  //    Render

  return /*#__PURE__*/external_react_default().createElement(material_.TextField, TextInput_extends({}, mainProps, {
    InputLabelProps: InputLabelProps,
    style: style,
    value: sanitizedValue,
    onChange: onChange
  }));
}
function TextInput_sanitize(value) {
  if (value === undefined || value === null) return "";
  return value;
}
;// ./src/inputs/index.ts




/***/ }),

/***/ 155:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

/***/ }),

/***/ 202:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__202__;

/***/ }),

/***/ 307:
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 878:
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_555__) => {

__nested_webpack_require_555__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_555__.d(__nested_webpack_exports__, {
/* harmony export */   AccessDeniedError: () => (/* binding */ AccessDeniedError),
/* harmony export */   NotFoundError: () => (/* binding */ NotFoundError),
/* harmony export */   UnauthorizedError: () => (/* binding */ UnauthorizedError)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/**
 * Unauthorized Error
 *
 * A request did not provide the required authentication.
 *
 * @extends Error
 */
var UnauthorizedError = /*#__PURE__*/function (_Error) {
  /**
   * Create an UnauthorizedError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function UnauthorizedError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[401] Unauthorized. Please sign in and try again.";
    _classCallCheck(this, UnauthorizedError);
    return _callSuper(this, UnauthorizedError, [message]);
  }
  _inherits(UnauthorizedError, _Error);
  return _createClass(UnauthorizedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Access Denied Error
 *
 * The authenticated user does not have permissions for the request.
 *
 * @extends Error
 */
var AccessDeniedError = /*#__PURE__*/function (_Error2) {
  /**
   * Create an AccessDeniedError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function AccessDeniedError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[403] Access Denied. You do not have permission to access this resource.";
    _classCallCheck(this, AccessDeniedError);
    return _callSuper(this, AccessDeniedError, [message]);
  }
  _inherits(AccessDeniedError, _Error2);
  return _createClass(AccessDeniedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/**
 * Not Found Error
 *
 * The requested resource was not found.
 *
 * @extends Error
 */
var NotFoundError = /*#__PURE__*/function (_Error3) {
  /**
   * Create a NotFoundError.
   *
   * @param {string} [message] - The error message. Pass a message to override the default.
   */
  function NotFoundError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[404] Not Found.";
    _classCallCheck(this, NotFoundError);
    return _callSuper(this, NotFoundError, [message]);
  }
  _inherits(NotFoundError, _Error3);
  return _createClass(NotFoundError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7028__) => {

__nested_webpack_require_7028__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_7028__.d(__nested_webpack_exports__, {
/* harmony export */   createPromise: () => (/* binding */ createPromise)
/* harmony export */ });
/**
 * Promise Helper
 *
 * Returns an object with an unresolved promise, resolve(), & reject() exposed to you. Suitable for non-promise code, like FileReader.
 *
 * @returns An object with properties: promise, a Promise<any> that can be awaited; resolve, a function to resolve the promise; and reject, a function to reject the promise.
 *
 * @example
 * const pr = createPromise();
 * const reader = new FileReader();
 * reader.addEventListener("loadend", pr.resolve);
 * reader.readAsArrayBuffer(file);
 * await pr.promise;
 * return stuff;
 */
function createPromise() {
  var resolve;
  var reject;
  var promise = new Promise(function (rs, rj) {
    resolve = rs;
    reject = rj;
  });
  return {
    promise: promise,
    resolve: resolve,
    reject: reject
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_8267__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_8267__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_8267__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_8267__.o(definition, key) && !__nested_webpack_require_8267__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_8267__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_8267__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// ESM COMPAT FLAG
__nested_webpack_require_8267__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_8267__.d(__nested_webpack_exports__, {
  AccessDeniedError: () => (/* reexport */ ErrorTypes.AccessDeniedError),
  ConversionResult: () => (/* reexport */ ConversionResult),
  EventDispatcher: () => (/* reexport */ EventDispatcher),
  Limiter: () => (/* reexport */ Limiter),
  NotFoundError: () => (/* reexport */ ErrorTypes.NotFoundError),
  UnauthorizedError: () => (/* reexport */ ErrorTypes.UnauthorizedError),
  benchmark: () => (/* reexport */ benchmark),
  bestByteUnit: () => (/* reexport */ bestByteUnit),
  bestConversionHelper: () => (/* reexport */ bestConversionHelper),
  bestTimeUnitMS: () => (/* reexport */ bestTimeUnitMS),
  createPromise: () => (/* reexport */ createPromise.createPromise),
  getIn: () => (/* reexport */ getIn),
  getMime: () => (/* reexport */ getMime),
  isISODateString: () => (/* reexport */ isISODateString),
  performance: () => (/* reexport */ performance),
  removeDiacritics: () => (/* reexport */ removeDiacritics),
  sanitizeStringDisplay: () => (/* reexport */ sanitizeStringDisplay),
  sanitizeStringKey: () => (/* reexport */ sanitizeStringKey),
  setIn: () => (/* reexport */ setIn)
});

// EXTERNAL MODULE: ./src/ErrorTypes/index.ts
var ErrorTypes = __nested_webpack_require_8267__(878);
;// ./src/common/bestConversionHelper.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var ConversionResult = /*#__PURE__*/_createClass(function ConversionResult(value, round, unit) {
  _classCallCheck(this, ConversionResult);
  this.value = value;
  this.round = round;
  this.unit = unit;

  // Define the toString method as non-enumerable
  Object.defineProperty(this, "toString", {
    value: function value() {
      return "".concat(this.round, " ").concat(this.unit);
    },
    enumerable: false
  });
});

/**
 * Best Conversion Helper
 *
 * Helper to convert to human readable units
 *
 * @param startingNumber - Value to convert.
 * @param threshold - Multiplier before converting to the next unit (recommended: 1.2).
 * @param conversions - Array of conversions.
 * @param startingConversionsIndex - Which index in `conversions` represents `startingNumber`.
 *
 * @returns The best conversion in the conversion table.
 *
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * See bestByteUnit.js and bestTimeUnitMS.js
 */
function bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) {
  if (typeof startingNumber !== "number") {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'startingNumber' must be a number.");
  }
  if (typeof threshold !== "number") {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'threshold' must be a number.");
  }
  if (!Array.isArray(conversions)) {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'conversions' must be an array.");
  }
  if (typeof startingConversionsIndex !== "number") {
    throw new TypeError("bestConversionHelper(startingNumber, threshold, conversions, startingConversionsIndex) : 'startingConversionsIndex' must be a number.");
  }
  startingNumber = Math.abs(startingNumber);
  var i = startingConversionsIndex;
  while (0 < i && startingNumber <= conversions[i - 1].value * threshold) {
    i--;
  }
  while (i < conversions.length - 1 && conversions[i + 1].value * threshold <= startingNumber) {
    i++;
  }
  return conversions[i];
}
;// ./src/common/benchmark.ts
function benchmark_typeof(o) { "@babel/helpers - typeof"; return benchmark_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, benchmark_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == benchmark_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(benchmark_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/**
 * Runs a benchmark test on a function.
 *
 * @param {Function} f - The function to test.
 * @param {number} count - The number of times to run the function.
 *
 * @returns {Promise<string>} The result of the benchmark test.
 *
 * @throws {TypeError} If 'f' is not a function.
 * @throws {TypeError} If 'count' is not a number. Or less than 1.
 *
 * @example
 * console.log(`Date.now:`, await benchmark(
 *     () => { for (let i = 0; i < 100000; i++) Date.now(); },
 *     1000, true
 * ));
 * console.log(`performance.now:`, await benchmark(
 *     () => { for (let i = 0; i < 100000; i++) performance.now(); },
 *     1000, true
 * ));
 * -> Date.now: "2.53 K/s"
 * -> performance.now: "492.37 /s"
 */
function benchmark(_x, _x2) {
  return _benchmark.apply(this, arguments);
}
function _benchmark() {
  _benchmark = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(f, count) {
    var conversions, s, i, _i, e, ms, opsPerSec, conversion, value, round, unit;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof f !== "function")) {
            _context.next = 2;
            break;
          }
          throw new TypeError("benchmark(f, count) : 'f' must be a function.");
        case 2:
          if (!(typeof count !== "number")) {
            _context.next = 4;
            break;
          }
          throw new TypeError("benchmark(f, count) : 'count' must be a number.");
        case 4:
          if (!(count < 1)) {
            _context.next = 6;
            break;
          }
          throw new TypeError("benchmark(f, count) : 'count' must be greater than 0.");
        case 6:
          conversions = [{
            unit: "/s",
            value: 1
          }, {
            unit: "K/s",
            value: 1000
          }, {
            unit: "M/s",
            value: 1000 * 1000
          }, {
            unit: "B/s",
            value: 1000 * 1000 * 1000
          }, {
            unit: "T/s",
            value: 1000 * 1000 * 1000 * 1000
          }];
          s = new Date();
          if (!(f.constructor.name === "AsyncFunction")) {
            _context.next = 18;
            break;
          }
          i = 0;
        case 10:
          if (!(i < count)) {
            _context.next = 16;
            break;
          }
          _context.next = 13;
          return f();
        case 13:
          i++;
          _context.next = 10;
          break;
        case 16:
          _context.next = 19;
          break;
        case 18:
          for (_i = 0; _i < count; _i++) f();
        case 19:
          e = new Date();
          ms = e.getTime() - s.getTime();
          opsPerSec = count / (ms / 1000);
          conversion = bestConversionHelper(opsPerSec, 1.2, conversions, 0);
          value = opsPerSec / conversion.value;
          round = Math.round(value * 100) / 100;
          unit = conversion.unit;
          return _context.abrupt("return", "".concat(round, " ").concat(unit));
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _benchmark.apply(this, arguments);
}
;// ./src/common/bestByteUnit.ts


/**
 * Convert a byte number to human readable units.
 *
 * @param byte - Value to convert.
 *
 * @returns An instance of ConversionResult with value, round, unit, and a toString method that flattens the output.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * const result = bestByteUnit(2000000);
 * console.log(result.toString());
 * -> "1.91 MB"
 */
function bestByteUnit(_byte) {
  if (typeof _byte !== "number") {
    throw new TypeError("bestByteUnit(byte) : 'byte' must be a number.");
  }
  var conversions = [{
    unit: "B",
    value: 1
  }, {
    unit: "KB",
    value: 1 * 1024
  }, {
    unit: "MB",
    value: 1 * 1024 * 1024
  }, {
    unit: "GB",
    value: 1 * 1024 * 1024 * 1024
  }, {
    unit: "TB",
    value: 1 * 1024 * 1024 * 1024 * 1024
  }, {
    unit: "PB",
    value: 1 * 1024 * 1024 * 1024 * 1024 * 1024
  }, {
    unit: "EB",
    value: 1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024
  }];
  var conversion = bestConversionHelper(_byte, 1.2, conversions, 0);
  var value = _byte / conversion.value;
  var round = Math.round(value * 100) / 100;
  return new ConversionResult(value, round, conversion.unit);
}
;// ./src/common/bestTimeUnitMS.ts


/**
 * Convert a millisecond number to human readable units.
 *
 * @param ms - Value to convert.
 *
 * @returns An instance of ConversionResult with value, round, unit, and a toString method that flattens the output.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * bestTimeUnitMS(4500000);
 * console.log(result.toString());
 * -> "1.25 h"
 */
function bestTimeUnitMS(ms) {
  if (typeof ms !== "number") {
    throw new TypeError("bestTimeUnitMS(ms) : 'ms' must be a number.");
  }
  var conversions = [{
    unit: "μs",
    value: 1 / 1000
  }, {
    unit: "ms",
    value: 1
  }, {
    unit: "s",
    value: 1 * 1000
  }, {
    unit: "m",
    value: 1 * 1000 * 60
  }, {
    unit: "h",
    value: 1 * 1000 * 60 * 60
  }, {
    unit: "d",
    value: 1 * 1000 * 60 * 60 * 24
  }];
  var conversion = bestConversionHelper(ms, 1.2, conversions, 1);
  var value = ms / conversion.value;
  var round = Math.round(value * 100) / 100;
  return new ConversionResult(value, round, conversion.unit);
}
// EXTERNAL MODULE: ./src/common/createPromise.ts
var createPromise = __nested_webpack_require_8267__(937);
;// ./src/common/EventDispatcher.ts
function EventDispatcher_typeof(o) { "@babel/helpers - typeof"; return EventDispatcher_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, EventDispatcher_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function EventDispatcher_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function EventDispatcher_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, EventDispatcher_toPropertyKey(o.key), o); } }
function EventDispatcher_createClass(e, r, t) { return r && EventDispatcher_defineProperties(e.prototype, r), t && EventDispatcher_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = EventDispatcher_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function EventDispatcher_toPropertyKey(t) { var i = EventDispatcher_toPrimitive(t, "string"); return "symbol" == EventDispatcher_typeof(i) ? i : i + ""; }
function EventDispatcher_toPrimitive(t, r) { if ("object" != EventDispatcher_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != EventDispatcher_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Event Dispatcher
 *
 * @example
 * // Using EventDispatcher directly
 * const dispatcher = new EventDispatcher<{ foo: number }>();
 * dispatcher.on("myevent", event => console.log(event));
 * dispatcher.trigger("myevent", { foo: 42 });
 * -> { foo: 42 }
 *
 * @example
 * // Extending EventDispatcher in a custom class
 * class MyClass extends EventDispatcher<{ foo: number }> {
 *     constructor() {
 *         super();
 *         this.on("myevent", this.handleMyEvent);
 *     }
 *
 *     handleMyEvent(event: { foo: number }) {
 *         console.log('Handled in MyClass:', event);
 *     }
 * }
 * const myClass = new MyClass();
 * myClass.trigger("myevent", { foo: 42 });
 * -> { foo: 42 }
 */
var EventDispatcher = /*#__PURE__*/function () {
  function EventDispatcher() {
    EventDispatcher_classCallCheck(this, EventDispatcher);
    _defineProperty(this, "handlers", new Map());
    _defineProperty(this, "batchedHandlers", new Map());
  }
  return EventDispatcher_createClass(EventDispatcher, [{
    key: "trigger",
    value: function trigger(type) {
      var _this = this;
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handlers = this.handlers.get(type);
      if (!handlers) return Promise.resolve([]);
      var handlerPromises = [];
      var stopPropagation = function stopPropagation() {
        handlerPromises.splice(0, handlerPromises.length);
      };
      var eventData = _objectSpread(_objectSpread({}, event), {}, {
        stopPropagation: stopPropagation
      });
      handlers.forEach(function (handler) {
        if (_this.matchFilters(eventData, handler.filters)) {
          if (handler.batched) {
            if (!_this.batchedHandlers.has(type)) {
              _this.batchedHandlers.set(type, new Map());
              setTimeout(function () {
                var batchedHandlers = _this.batchedHandlers.get(type);
                if (batchedHandlers) {
                  batchedHandlers.forEach(function (events, handler) {
                    handlerPromises.push(handler.callback(events));
                  });
                  _this.batchedHandlers["delete"](type);
                }
              });
            }
            if (!_this.batchedHandlers.get(type).has(handler)) {
              _this.batchedHandlers.get(type).set(handler, []);
            }
            _this.batchedHandlers.get(type).get(handler).push(eventData);
          } else {
            handlerPromises.push(handler.callback(eventData));
          }
        }
      });
      return Promise.all(handlerPromises);
    }
  }, {
    key: "on",
    value: function on(type, callback) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        batched: false,
        filters: {}
      };
      var typeKeys = type.split(/\s+/);
      if (1 < typeKeys.length) {
        typeKeys.forEach(function (type) {
          if (type) _this2.on(type, callback, options);
        });
        return this;
      }
      var handlers = this.handlers.get(type);
      if (!handlers) {
        this.handlers.set(type, new Set());
      }
      this.handlers.get(type).add({
        callback: callback,
        filters: options.filters,
        batched: options.batched
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(type, callback) {
      var _this3 = this;
      var typeKeys = type.split(/\s+/);
      if (1 < typeKeys.length) {
        typeKeys.forEach(function (type) {
          if (type) _this3.off(type, callback);
        });
        return this;
      }
      var handlers = this.handlers.get(type);
      if (handlers) {
        var removals = [];
        handlers.forEach(function (handler) {
          if (handler.callback === callback) {
            removals.push(handler);
          }
        });
        removals.forEach(function (handler) {
          return handlers["delete"](handler);
        });
        if (!handlers.size) {
          this.handlers["delete"](type);
        }
      }
      return this;
    }
  }, {
    key: "matchFilters",
    value: function matchFilters(event, filters) {
      for (var key in filters) {
        var filter = filters[key];
        var value = event[key];
        if (Array.isArray(filter)) {
          if (!filter.includes(value)) {
            return false;
          }
        } else if (filter instanceof RegExp) {
          if (!filter.test(value)) {
            return false;
          }
        } else {
          if (value !== filter) {
            return false;
          }
        }
      }
      return true;
    }
  }]);
}();

// Old JavaScript Code:
/*
const OldDeprecatedEventDispatcher = {
  trigger: function (type, e = {}) {
    if (typeof type !== "string") throw `Expected string for parameter: "type"`;

    const handlersBatchKey = `_handlers_${type}_batch`;
    const handlersKey = `_handlers_${type}`;
    const handlers = this[String(handlersKey)];

    if (handlers) {
      const handlerPromises = [];
      const originalStop = e.stopPropagation;
      let keepGoing = true;

      e.stopPropagation = () => {
        keepGoing = false;
        if (originalStop) originalStop();
      };

      handlers.forEach((f) => {
        if (!keepGoing) return;

        const match = (value, filter) => {
          if (typeof filter === "object" && filter instanceof RegExp) {
            return filter.test(value);
          } else if (Array.isArray(filter)) {
            let ret = false;
            for (let t of filter) {
              ret = ret || match(value, t);
              if (ret) break;
            }
            return ret;
          } else {
            return value === filter;
          }
        };

        let matched = true;
        for (let key in f.filters) {
          matched &= match(e[String(key)], f.filters[String(key)]);
          if (!matched) break;
        }
        if (!matched) return;
        if (f.batched) {
          if (!this[String(handlersBatchKey)]) {
            handlerPromises.push(
              new Promise((resolve, reject) => {
                this[String(handlersBatchKey)] = new Map();
                setTimeout(() => {
                  this[String(handlersBatchKey)].forEach((events, f) => {
                    resolve(f.callback(events));
                  });
                  this[String(handlersBatchKey)] = null;
                });
              }),
            );
          }
          if (!this[String(handlersBatchKey)].get(f))
            this[String(handlersBatchKey)].set(f, []);
          this[String(handlersBatchKey)].get(f).push({ target: this, ...e });
        } else {
          handlerPromises.push(f.callback(e));
        }
      });

      return Promise.all(handlerPromises);
    }
  },

  on: function (
    type,
    f,
    { batched, filters } = { batched: false, filters: {} },
  ) {
    if (typeof type !== "string") throw `Expected string for parameter: "type"`;
    if (typeof f !== "function") throw `Expected function for parameter: "f"`;

    if (type.split(" ").length > 1) {
      type.split(" ").forEach((type) => {
        this.on(type, f);
      });
      return;
    }

    const handlersKey = `_handlers_${type}`;
    let handlers = this[String(handlersKey)];

    if (!handlers) {
      handlers = this[String(handlersKey)] = new Set();
    }

    handlers.add({ callback: f, filters, batched });

    return this;
  },

  off: function (type, f) {
    if (typeof type !== "string") throw `Expected string for parameter: "type"`;
    if (typeof f !== "function") throw `Expected function for parameter: "f"`;

    if (type.split(" ").length > 1) {
      type.split(" ").forEach((type) => {
        this.off(type, f);
      });
      return;
    }

    const handlersKey = `_handlers_${type}`;
    const handlers = this[String(handlersKey)];

    if (handlers) {
      const removals = [];
      handlers.forEach((h) => {
        if (h.callback === f) removals.push(h);
      });
      removals.forEach((h) => handlers.delete(h));

      if (!handlers.size) {
        delete this[String(handlersKey)];
      }
    }

    return this;
  },
};
*/
;// ./src/common/getIn.ts
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function getIn(object, path, defaultValue) {
  var _iterator = _createForOfIteratorHelper(path),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      if (object === null) {
        object = undefined;
        break;
      }
      var v = object[String(p)];
      if (typeof v === "undefined") {
        object = undefined;
        break;
      }
      object = v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (typeof object === "undefined") return defaultValue;
  return object;
}
;// ./src/common/getMime.ts
/**
 * Returns the MIME type of a file based on its extension.
 *
 * @param fileName - The name of the file.
 * @returns The MIME type of the file.
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * const mime = getMime("Gachi.mp3");
 * -> "audio/mpeg"
 */
function getMime(fileName) {
  if (typeof fileName !== "string") {
    throw new TypeError("getMime(fileName) : 'fileName' must be a string.");
  }
  var name = fileName.toLowerCase();
  if (/(^|\.)(txt)$/.test(name)) return "text/plain";
  if (/(^|\.)(html|htm)$/.test(name)) return "text/html";
  if (/(^|\.)(js)$/.test(name)) return "text/javascript";
  if (/(^|\.)(json)$/.test(name)) return "application/json";
  if (/(^|\.)(pdf)$/.test(name)) return "application/pdf";
  if (/(^|\.)(bmp)$/.test(name)) return "image/bmp";
  if (/(^|\.)(gif)$/.test(name)) return "image/gif";
  if (/(^|\.)(jpg|jpeg)$/.test(name)) return "image/jpeg";
  if (/(^|\.)(png|apng)$/.test(name)) return "image/png";
  if (/(^|\.)(svg)$/.test(name)) return "image/svg+xml";
  if (/(^|\.)(webp)$/.test(name)) return "image/webp";
  if (/(^|\.)(ico)$/.test(name)) return "file/x-icon";
  if (/(^|\.)(aac)$/.test(name)) return "audio/aac";
  if (/(^|\.)(mp3)$/.test(name)) return "audio/mpeg";
  if (/(^|\.)(ogg)$/.test(name)) return "audio/ogg";
  if (/(^|\.)(wav)$/.test(name)) return "audio/wav";
  if (/(^|\.)(webm)$/.test(name)) return "audio/webm";
  if (/(^|\.)(mp4)$/.test(name)) return "video/mp4";
  if (/(^|\.)(mkv)$/.test(name)) return "video/x-matroska";
  if (/(^|\.)(otf)$/.test(name)) return "font/otf";
  if (/(^|\.)(ttf)$/.test(name)) return "font/ttf";
  if (/(^|\.)(woff)$/.test(name)) return "font/woff";
  if (/(^|\.)(woff2)$/.test(name)) return "font/woff2";
  return "application/octet-stream";
}
;// ./src/common/isISODateString.ts
/**
 * Checks if a given string looks like a valid ISO date string.
 *
 * @param str - The string to be checked.
 * @returns Looks like an ISO date string.
 *
 * @example
 * if (isISODateString("2020-01-01T00:00:00.000Z"))
 */
function isISODateString(str) {
  // JavaScript regex for ISO datetime: https://stackoverflow.com/a/3143231/1258524
  return /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/.test(str);
}
;// ./src/common/Limiter.ts
function Limiter_typeof(o) { "@babel/helpers - typeof"; return Limiter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Limiter_typeof(o); }
function Limiter_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Limiter_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == Limiter_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(Limiter_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function Limiter_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function Limiter_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { Limiter_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { Limiter_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function Limiter_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Limiter_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Limiter_toPropertyKey(o.key), o); } }
function Limiter_createClass(e, r, t) { return r && Limiter_defineProperties(e.prototype, r), t && Limiter_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Limiter_toPropertyKey(t) { var i = Limiter_toPrimitive(t, "string"); return "symbol" == Limiter_typeof(i) ? i : i + ""; }
function Limiter_toPrimitive(t, r) { if ("object" != Limiter_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Limiter_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Limiter = /*#__PURE__*/function () {
  function Limiter(limit) {
    Limiter_classCallCheck(this, Limiter);
    this.isRunning = false;
    this.limit = limit;
    this.queue = [];
    this.running = [];
  }
  return Limiter_createClass(Limiter, [{
    key: "waitForSlot",
    value: function () {
      var _waitForSlot = Limiter_asyncToGenerator(/*#__PURE__*/Limiter_regeneratorRuntime().mark(function _callee() {
        var promises;
        return Limiter_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.running.length < this.limit)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              promises = this.running.map(function (p) {
                return p.promise;
              });
              _context.next = 5;
              return Promise.any(promises);
            case 5:
              this.running = this.running.filter(function (p) {
                return !p.isDone;
              });
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function waitForSlot() {
        return _waitForSlot.apply(this, arguments);
      }
      return waitForSlot;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = Limiter_asyncToGenerator(/*#__PURE__*/Limiter_regeneratorRuntime().mark(function _callee2(callback) {
        var promise, tr, finishedPromise;
        return Limiter_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.running.length < this.limit)) {
                _context2.next = 8;
                break;
              }
              promise = callback();
              tr = new TrackablePromise(promise);
              this.running.push(tr);
              _context2.next = 6;
              return promise;
            case 6:
              _context2.next = 13;
              break;
            case 8:
              finishedPromise = {
                callback: callback,
                promise: (0,createPromise.createPromise)()
              };
              this.queue.push(finishedPromise);
              this.processQueue();
              _context2.next = 13;
              return finishedPromise.promise.promise;
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function run(_x) {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }, {
    key: "processQueue",
    value: function () {
      var _processQueue = Limiter_asyncToGenerator(/*#__PURE__*/Limiter_regeneratorRuntime().mark(function _callee3() {
        var _this = this;
        var _loop;
        return Limiter_regeneratorRuntime().wrap(function _callee3$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!this.isRunning) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              this.isRunning = true;
              _loop = /*#__PURE__*/Limiter_regeneratorRuntime().mark(function _loop() {
                var finishedPromise, promise, tr;
                return Limiter_regeneratorRuntime().wrap(function _loop$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      finishedPromise = _this.queue.shift();
                      _context3.next = 3;
                      return _this.waitForSlot();
                    case 3:
                      promise = finishedPromise.callback();
                      tr = new TrackablePromise(promise);
                      _this.running.push(tr);
                      promise.then(function () {
                        finishedPromise.promise.resolve();
                      });
                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }, _loop);
              });
            case 4:
              if (!this.queue.length) {
                _context4.next = 8;
                break;
              }
              return _context4.delegateYield(_loop(), "t0", 6);
            case 6:
              _context4.next = 4;
              break;
            case 8:
              this.isRunning = false;
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee3, this);
      }));
      function processQueue() {
        return _processQueue.apply(this, arguments);
      }
      return processQueue;
    }()
  }]);
}();
var TrackablePromise = /*#__PURE__*/function () {
  function TrackablePromise(promise) {
    var _this2 = this;
    Limiter_classCallCheck(this, TrackablePromise);
    this.pr = (0,createPromise.createPromise)();
    promise.then(function (value) {
      _this2.isResolved = true;
      _this2.isDone = true;
      _this2.pr.resolve(value);
    });
    promise["catch"](function (error) {
      _this2.isRejected = true;
      _this2.isDone = true;
      _this2.pr.reject(error);
    });
  }
  return Limiter_createClass(TrackablePromise, [{
    key: "promise",
    get: function get() {
      return this.pr.promise;
    }
  }]);
}();
;// ./src/common/performance.ts
function performance_typeof(o) { "@babel/helpers - typeof"; return performance_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, performance_typeof(o); }
function performance_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ performance_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == performance_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(performance_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function performance_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function performance_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { performance_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { performance_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var performanceNames = {};

/**
 * Measures the performance of a given function or promise and logs the time taken to execute it.
 *
 * @param name - The name of the performance measurement.
 * @param fn - The function or promise to measure the performance of.
 * @returns A promise that resolves when the performance measurement is complete.
 * @throws TypeError If the name parameter is not a string or if the fn parameter is not a function or promise.
 *
 * @example
 * await performance("dosomething", async () => {
 *    // Do something.
 * });
 * -> dosomething: 0.0400390625 ms
 */
function performance(_x, _x2) {
  return _performance.apply(this, arguments);
}
function _performance() {
  _performance = performance_asyncToGenerator(/*#__PURE__*/performance_regeneratorRuntime().mark(function _callee(name, fn) {
    var n, count;
    return performance_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof name !== "string")) {
            _context.next = 2;
            break;
          }
          throw new TypeError("performance(name, fn) : 'name' must be a string.");
        case 2:
          if (typeof fn === "function") {
            _context.next = 4;
            break;
          }
          throw new TypeError("performance(name, fn) : 'fn' must be a function or a function returning a promise.");
        case 4:
          n = name;
          count = 1;
          while (n in performanceNames) {
            n = "".concat(name, " ").concat(count++);
          }
          performanceNames[n] = true;
          console.time(n);
          _context.prev = 9;
          _context.next = 12;
          return fn();
        case 12:
          _context.prev = 12;
          console.timeEnd(n);
          delete performanceNames[n];
          return _context.finish(12);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[9,, 12, 16]]);
  }));
  return _performance.apply(this, arguments);
}
;// ./src/common/removeDiacritics.ts
/**
 * Remove Diacritics
 *
 * Removes diacritics and other symbols, like Microsoft Smart Quotes.
 * For old JS compatibility, this function does not throw errors. It just returns the input if it's not a string.
 *
 * @param str The string to remove diacritics from
 *
 * @returns The string without diacritics
 *
 * @example
 * console.log(removeDiacritics("Héllö Wörld"));
 * -> "Hello World"
 */
function removeDiacritics(str) {
  //	http://stackoverflow.com/questions/286921/efficiently-replace-all-accented-characters-in-a-string

  if (typeof str !== "string") return str;
  for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
    str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
  }
  return str;
}
var defaultDiacriticsRemovalMap = [
// Breaks /r/n -> /n
{
  base: "\n",
  letters: /\r\n/g
},
// Unicode spaces and tabs
{
  base: " ",
  letters: /[\u0009\u00A0\u2000-\u200A\u202F\u205F\u3000]/g
},
// Microsoft smart quotes
{
  base: '"',
  letters: /[\u201C\u201D\u201E\u201F\u2033\u2036]/g
}, {
  base: "'",
  letters: /[`\u2018\u2019\u201A\u201B\u2032\u2035]/g
},
// Dashes
{
  base: "-",
  letters: /[\u002D\u2010-\u2015\u2212]/g
},
// Underscores
{
  base: "_",
  letters: /[\u005F\uFE4D-\uFE4F]/g
},
// Invisible formatting characters
{
  base: "",
  letters: /[\u0002\u0003]/g
},
// Letters
{
  base: "A",
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: "AA",
  letters: /[\uA732]/g
}, {
  base: "AE",
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: "AO",
  letters: /[\uA734]/g
}, {
  base: "AU",
  letters: /[\uA736]/g
}, {
  base: "AV",
  letters: /[\uA738\uA73A]/g
}, {
  base: "AY",
  letters: /[\uA73C]/g
}, {
  base: "B",
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: "C",
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: "D",
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: "DZ",
  letters: /[\u01F1\u01C4]/g
}, {
  base: "Dz",
  letters: /[\u01F2\u01C5]/g
}, {
  base: "E",
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: "F",
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: "G",
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: "H",
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: "I",
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: "J",
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: "K",
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: "L",
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: "LJ",
  letters: /[\u01C7]/g
}, {
  base: "Lj",
  letters: /[\u01C8]/g
}, {
  base: "M",
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: "N",
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: "NJ",
  letters: /[\u01CA]/g
}, {
  base: "Nj",
  letters: /[\u01CB]/g
}, {
  base: "O",
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: "OI",
  letters: /[\u01A2]/g
}, {
  base: "OO",
  letters: /[\uA74E]/g
}, {
  base: "OU",
  letters: /[\u0222]/g
}, {
  base: "P",
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: "Q",
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: "R",
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: "S",
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: "T",
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: "TZ",
  letters: /[\uA728]/g
}, {
  base: "U",
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: "V",
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: "VY",
  letters: /[\uA760]/g
}, {
  base: "W",
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: "X",
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: "Y",
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: "Z",
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: "a",
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: "aa",
  letters: /[\uA733]/g
}, {
  base: "ae",
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: "ao",
  letters: /[\uA735]/g
}, {
  base: "au",
  letters: /[\uA737]/g
}, {
  base: "av",
  letters: /[\uA739\uA73B]/g
}, {
  base: "ay",
  letters: /[\uA73D]/g
}, {
  base: "b",
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: "c",
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: "d",
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: "dz",
  letters: /[\u01F3\u01C6]/g
}, {
  base: "e",
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: "f",
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: "g",
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: "h",
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: "hv",
  letters: /[\u0195]/g
}, {
  base: "i",
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: "j",
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: "k",
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: "l",
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: "lj",
  letters: /[\u01C9]/g
}, {
  base: "m",
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: "n",
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: "nj",
  letters: /[\u01CC]/g
}, {
  base: "o",
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: "oi",
  letters: /[\u01A3]/g
}, {
  base: "ou",
  letters: /[\u0223]/g
}, {
  base: "oo",
  letters: /[\uA74F]/g
}, {
  base: "p",
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: "q",
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: "r",
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: "s",
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: "t",
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: "tz",
  letters: /[\uA729]/g
}, {
  base: "u",
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: "v",
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: "vy",
  letters: /[\uA761]/g
}, {
  base: "w",
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: "x",
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: "y",
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: "z",
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
;// ./src/common/sanitizeStringDisplay.ts


/**
 * Sanitize String Display
 *
 * Removes unicode and most symbols from a string for data sanity.
 *
 * @param str The string to sanitize
 *
 * @returns The sanitized string
 *
 * @example
 * console.log(sanitizeStringDisplay("   Héllö  “Wörld”!\t\t\t");
 * -> 'Hello  "World"!'
 */
function sanitizeStringDisplay(str) {
  // Demote diacritic characters, like: é -> e
  str = removeDiacritics(str);

  // Remove uncommon symbols
  str = str.replace(/[^a-zA-Z0-9 \\/()[\]{}<>\-_+="';:,.?!@#$%^&*]+/g, "");

  // Trim begin and end of string
  str = str.trim();
  return str;
}
;// ./src/common/sanitizeStringKey.ts


/**
 * Sanitize String Key
 *
 * Removes all unicode and symbols from a string for use as a key.
 * It also camelCases the string.
 *
 * @param str The string to sanitize
 *
 * @returns The sanitized string
 *
 * @example
 * console.log(sanitizeStringKey("   Héllö  “Wörld”!\t\t\t");
 * -> 'helloWorld'
 */
function sanitizeStringKey(str) {
  // Demote diacritic characters, like: é -> e
  str = sanitizeStringDisplay(str);

  // Replace symbols with "|"
  str = str.replace(/[^a-zA-Z0-9]+/g, "|");

  // Trim begin and end of string
  str = str.replace(/^\|+|\|+$/g, "");

  // Split for map with camelCase()
  str = str.split("|").map(camelCase).join("");

  // Lower first character
  str = str[0].toLowerCase() + str.slice(1);
  return str;
}
function camelCase(word) {
  return word[0].toUpperCase() + word.slice(1);
}
;// ./src/common/setIn.ts
function setIn_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function setIn_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? setIn_ownKeys(Object(t), !0).forEach(function (r) { setIn_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : setIn_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function setIn_defineProperty(e, r, t) { return (r = setIn_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function setIn_toPropertyKey(t) { var i = setIn_toPrimitive(t, "string"); return "symbol" == setIn_typeof(i) ? i : i + ""; }
function setIn_toPrimitive(t, r) { if ("object" != setIn_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != setIn_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || setIn_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return setIn_arrayLikeToArray(r); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || setIn_unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function setIn_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return setIn_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? setIn_arrayLikeToArray(r, a) : void 0; } }
function setIn_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function setIn_typeof(o) { "@babel/helpers - typeof"; return setIn_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, setIn_typeof(o); }
function setIn(source, path, value) {
  if (typeof source === "undefined") {
    throw new TypeError("Can't use setIn on undefined.");
  }
  if (source === null) {
    throw new TypeError("Can't use setIn on null.");
  }
  if (setIn_typeof(source) !== "object") {
    throw new TypeError("setIn doesn't operate on ".concat(setIn_typeof(source), "."));
  }
  if (path.length === 0) {
    throw new TypeError("Can't use setIn to replace the root.");
  }
  return traverse(source, path, value).node;
  function traverse(source, path, value) {
    var _path = _toArray(path),
      p = _path[0],
      pathRest = _path.slice(1);
    if (pathRest.length === 0) {
      if (source[String(p)] === value) {
        return {
          node: source,
          changed: false
        };
      } else {
        var ret;
        if (source) {
          ret = Array.isArray(source) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
        } else {
          ret = Number.isInteger(Number(p)) ? [] : {};
        }
        if (typeof value === "undefined") {
          if (Array.isArray(ret) && Number.isInteger(Number(p))) {
            ret.splice(Number(p), 1);
          } else {
            delete ret[String(p)];
          }
        } else {
          ret[String(p)] = value;
        }
        return {
          node: ret,
          changed: true
        };
      }
    } else {
      if (typeof source[String(p)] === "undefined" || source[String(p)] === null) {
        var np = pathRest[0];
        var temp = Number.isInteger(Number(np)) ? [] : {};
        var _traverse = traverse(temp, pathRest, value),
          node = _traverse.node,
          changed = _traverse.changed;
        var newsource;
        if (source) {
          newsource = Array.isArray(source) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
        } else {
          newsource = Number.isInteger(Number(np)) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
        }
        newsource[String(p)] = node;
        return {
          node: newsource,
          changed: changed
        };
      } else {
        var _traverse2 = traverse(source[String(p)], pathRest, value),
          _node = _traverse2.node,
          _changed = _traverse2.changed;
        if (_changed) {
          var _ret = Array.isArray(source) ? _toConsumableArray(source) : setIn_objectSpread({}, source);
          _ret[String(p)] = _node;
          return {
            node: _ret,
            changed: true
          };
        } else {
          return {
            node: source,
            changed: _changed
          };
        }
      }
    }
  }
}
;// ./src/common/index.ts
 // TODO: move one scope higher















/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ 410:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__410__;

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ }),

/***/ 823:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__823__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  baseInputs: () => (/* reexport */ baseInputs),
  controlledInputFactory: () => (/* reexport */ controlledInputFactory),
  inputs: () => (/* reexport */ inputs)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// ./src/ControlledInputProvider.tsx

var ControlledInputProviderContext = /*#__PURE__*/(0,external_react_.createContext)({});
function useControlledInputProvider() {
  return external_react_default().useContext(ControlledInputProviderContext);
}
function ControlledInputProvider(_ref) {
  var children = _ref.children,
    inputs = _ref.inputs;
  return /*#__PURE__*/external_react_default().createElement(ControlledInputProviderContext.Provider, {
    value: inputs
  }, children);
}
// EXTERNAL MODULE: ./src/inputs/index.ts + 4 modules
var inputs = __webpack_require__(145);
;// ./src/controlledInputFactory.tsx
var _excluded = ["value"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var baseInputs = {
  "autocomplete": {
    type: "autocomplete",
    name: "Autocomplete",
    component: inputs.AutocompleteInput
  },
  "select": {
    type: "autocomplete",
    name: "Autocomplete",
    component: inputs.AutocompleteInput
  },
  "checkbox": {
    type: "checkbox",
    name: "Checkbox",
    component: inputs.CheckboxInput
  },
  "color": {
    type: "color",
    name: "Color",
    component: inputs.TextInput
  },
  "date": {
    type: "date",
    name: "Date",
    component: inputs.TextInput
  },
  "datetime-local": {
    type: "datetime-local",
    name: "Datetime Local",
    component: inputs.TextInput
  },
  "email": {
    type: "email",
    name: "Email",
    component: inputs.TextInput
  },
  "month": {
    type: "month",
    name: "Month",
    component: inputs.TextInput
  },
  "number": {
    type: "number",
    name: "Number",
    component: inputs.TextInput
  },
  "password": {
    type: "password",
    name: "Password",
    component: inputs.TextInput
  },
  "range": {
    type: "range",
    name: "Range",
    component: inputs.TextInput
  },
  "tel": {
    type: "tel",
    name: "Phone",
    component: inputs.TextInput
  },
  "text": {
    type: "text",
    name: "Text",
    component: inputs.TextInput
  },
  "time": {
    type: "time",
    name: "Time",
    component: inputs.TextInput
  },
  "url": {
    type: "url",
    name: "URL",
    component: inputs.TextInput
  },
  "week": {
    type: "week",
    name: "Week",
    component: inputs.TextInput
  }
};
function controlledInputFactory() {
  var additionalInputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var staticInputs = _objectSpread(_objectSpread({}, baseInputs), additionalInputs);
  function ControlledInput(originalProps) {
    var _allInputs$props$type;
    var props = (0,external_react_.useMemo)(function () {
      var value = originalProps.value,
        restProps = _objectWithoutProperties(originalProps, _excluded);
      return _objectSpread(_objectSpread({}, restProps), {}, {
        value: value !== null && value !== void 0 ? value : null
      });
    }, [originalProps]);
    var providedInputs = useControlledInputProvider();
    var allInputs = (0,external_react_.useMemo)(function () {
      return _objectSpread(_objectSpread({}, staticInputs), providedInputs);
    }, [providedInputs]);
    var Input = (_allInputs$props$type = allInputs[props.type]) === null || _allInputs$props$type === void 0 ? void 0 : _allInputs$props$type.component;
    if (Input) {
      return /*#__PURE__*/external_react_default().createElement(Input, props);
    } else {
      return /*#__PURE__*/external_react_default().createElement("div", null, "Unknown input type: ", props.type);
    }
  }
  return {
    staticInputs: staticInputs,
    ControlledInput: /*#__PURE__*/(0,external_react_.memo)(ControlledInput)
  };
}
;// ./src/index.ts



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});