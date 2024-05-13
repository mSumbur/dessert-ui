/**
 * description: 自定义渲染列表
 */

import React, { FC } from "react";
import { Calendar } from "dessert-ui";
import { Dayjs } from "dayjs";

const App: FC = () => {

    return <Calendar 
        dateRender={(date: Dayjs) => {
            return <div>{date.format('YYYY-MM-DD')}</div>
        }}
    />
}

export default App