function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import LocaleContext from "./LocaleContext";
import CalendarHeader from "./Header";
import CalendarContent from "./Content";
import "./index.scss";
var Calendar = function Calendar(props) {
  var _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? dayjs() : _props$defaultValue,
    value = props.value,
    style = props.style,
    className = props.className,
    locale = props.locale,
    onChange = props.onChange;
  var _useState = useState(function () {
      if (value !== undefined) {
        return value;
      } else {
        return defaultValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    curValue = _useState2[0],
    setCurValue = _useState2[1];
  var containerClassname = classNames('calendar', className);
  function changeDate(date) {
    setCurValue(date);
    onChange === null || onChange === void 0 || onChange(date);
  }
  function selectHandler(date) {
    changeDate(date);
  }
  function prevMonthHandler() {
    setCurValue(curValue.subtract(1, 'month'));
  }
  function nextMonthHandler() {
    setCurValue(curValue.add(1, 'month'));
  }
  function todayHandler() {
    var date = dayjs(Date.now());
    changeDate(date);
  }
  return /*#__PURE__*/React.createElement(LocaleContext.Provider, {
    value: {
      locale: locale || navigator.language
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: containerClassname,
    style: style
  }, /*#__PURE__*/React.createElement(CalendarHeader, {
    curMonth: curValue,
    prevMonthHandler: prevMonthHandler,
    nextMonthHandler: nextMonthHandler,
    todayHandler: todayHandler
  }), /*#__PURE__*/React.createElement(CalendarContent, _extends({}, props, {
    value: curValue,
    selectHandler: selectHandler
  }))));
};
export default Calendar;