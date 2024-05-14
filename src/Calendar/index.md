---
nav:
    title: 组件
group: 
    title: 数据展示
    order: 1
title: Calendar
# demo:
#     cols: 2
toc: content
---

# Calendar 日历

## 代码演示

<code src="./demo/basic.tsx" clientOnly >基本</code>
<code src="./demo/custom-render.tsx" clientOnly >自定义渲染</code>

自定义 dateInnerContent
```tsx 
import { Calendar } from 'dessert-ui';
import dayjs, { Dayjs } from "dayjs";

function DateInnerContent(value: Dayjs) {
    return <div>{value.format('YYYY-MM-DD')}</div>
}

export default () => {
    return <Calendar 
        value={dayjs('2024-05-09')} 
        dateInnerContent={DateInnerContent} 
    />
}
```

## onChange
```tsx
import { Calendar } from 'dessert-ui';
import dayjs, { Dayjs } from "dayjs";

function onChange(value: Dayjs) {
    alert(value.format('YYYY-MM-DD'))
}

export default () => {
    return <Calendar 
        value={dayjs('2024-05-09')} 
        onChange={onChange}
    />
}
```

## API

通用属性参考：[通用属性](/docs/react/common-props)

**注意**：Calendar 部分 locale 是从 value 中读取，所以请先正确设置 dayjs 的 locale。

```jsx | pure
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dateCellRender | 定制日期显示，会完全覆盖日期单元格 | function(date: Dayjs): ReactNode | - | - |
| dateInnerContent | 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效 | function(date: Dayjs): ReactNode | - | - |
| defaultValue | 默认展示的日期 | [dayjs](https://day.js.org/) | - |  |
| locale | 国际化配置 | object | [(默认配置)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| value | 展示日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 日期变化回调 | function(date: Dayjs) | - |  |
| onSelect | 选择日期回调，包含来源信息 | function(date: Dayjs, info: { source: 'year' \| 'month' \| 'date' \| 'customize' }) | - | - |
