import React, { useContext } from "react";
import LocaleContext from "./LocaleContext";
import allLocales from "./locale";
export default function CalendarHeader(props) {
  var curMonth = props.curMonth,
    prevMonthHandler = props.prevMonthHandler,
    nextMonthHandler = props.nextMonthHandler,
    todayHandler = props.todayHandler;
  var localeContext = useContext(LocaleContext);
  var CalendarLocale = allLocales[localeContext.locale];
  return /*#__PURE__*/React.createElement("div", {
    className: "calendar__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calendar__header__left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calendar__header__icon",
    onClick: prevMonthHandler
  }, "<"), /*#__PURE__*/React.createElement("div", {
    className: "calendar__header__value"
  }, curMonth.format(CalendarLocale.formatMonth)), /*#__PURE__*/React.createElement("div", {
    className: "calendar__header__icon",
    onClick: nextMonthHandler
  }, ">"), /*#__PURE__*/React.createElement("button", {
    className: "calendar__header__btn",
    onClick: todayHandler
  }, CalendarLocale.today)));
}