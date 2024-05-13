function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Icon } from '.';
export function createIcon(options) {
  var content = options.content,
    _options$iconProps = options.iconProps,
    iconProps = _options$iconProps === void 0 ? {} : _options$iconProps,
    _options$viewBox = options.viewBox,
    viewBox = _options$viewBox === void 0 ? '0 0 1024 1024' : _options$viewBox;
  return /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(Icon, _extends({
      ref: ref,
      viewBox: viewBox
    }, iconProps, props), content);
  });
}