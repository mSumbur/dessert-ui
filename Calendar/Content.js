import React, { useContext } from 'react';
import classNames from 'classnames';
import LocaleContext from "./LocaleContext";
import allLocales from "./locale";
/**
 * 获取日期列表
 * @param {Dayjs} date 目标日
 * @returns
 */
function getAllDays(date) {
  var startDate = date.startOf('month');
  var day = startDate.day();
  var daysInfoLength = 6 * 7;
  var daysInfo = new Array(daysInfoLength);
  for (var i = 0; i < daysInfoLength; i++) {
    var calcDate = startDate.subtract(day - i, 'day');
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() == date.month()
    };
  }
  return daysInfo;
}
export default function CalendarContent(props) {
  var value = props.value,
    dateRender = props.dateRender,
    dateInnerContent = props.dateInnerContent,
    selectHandler = props.selectHandler;
  var localeContext = useContext(LocaleContext);
  var CalendarLocale = allLocales[localeContext.locale];
  var weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var dayList = getAllDays(value);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "calendar__week"
  }, weekList.map(function (week) {
    return /*#__PURE__*/React.createElement("div", {
      className: "calendar__week__item",
      key: week
    }, CalendarLocale.week[week]);
  })), /*#__PURE__*/React.createElement("div", {
    className: "calendar__day"
  }, dayList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.date.date(),
      className: "calendar__day__cell ".concat(item.currentMonth ? 'calendar__day__cell--active' : ''),
      onClick: function onClick() {
        selectHandler === null || selectHandler === void 0 || selectHandler(item.date);
      }
    }, dateRender ? dateRender(item.date) : /*#__PURE__*/React.createElement("div", {
      className: "calendar__day__cell__wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: classNames('calendar__day__cell__date', value.format('YYYY-MM-DD') == item.date.format('YYYY-MM-DD') ? 'calendar__day__cell__date--active' : '')
    }, item.date.date()), /*#__PURE__*/React.createElement("div", {
      className: "calendar__day__cell__extend"
    }, dateInnerContent === null || dateInnerContent === void 0 ? void 0 : dateInnerContent(item.date))));
  })));
}