/**
 * title: 图标列表
 * inline: true
 */

import React from "react";
import CopyToClipboard from 'react-copy-to-clipboard';
import * as DessertUIIcons from "./..";
var AllIcons = DessertUIIcons;
export default (function () {
  var icons = ['Add', 'AccountBook', 'Alert', 'AlignLeft', 'AlignCenter', 'AlignRight'];
  var onCopy = function onCopy(text, result) {
    if (result) {
      window.alert('复制成功');
    } else {}
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: 10
    }
  }, icons.map(function (item) {
    return /*#__PURE__*/React.createElement(CopyToClipboard, {
      key: item,
      text: "<".concat(item, " />"),
      onCopy: onCopy
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        background: '#f0f0f0',
        borderRadius: 5
      }
    }, /*#__PURE__*/React.createElement(AllIcons[item], {
      size: '22px'
    })));
  }));
});