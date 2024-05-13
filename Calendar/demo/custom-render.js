/**
 * description: 自定义渲染列表
 */

import React from "react";
import { Calendar } from "../..";
var App = function App() {
  return /*#__PURE__*/React.createElement(Calendar, {
    dateRender: function dateRender(date) {
      return /*#__PURE__*/React.createElement("div", null, date.format('YYYY-MM-DD'));
    }
  });
};
export default App;