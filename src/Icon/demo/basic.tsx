/**
 * description: 通过 dessert-ui/Icon 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 spin 属性来实现动画旋转效果。
 */

import React, { FC } from "react";
import { Add } from "dessert-ui/Icon";

const App: FC = () => {
    return <div>
        <Add />
        <Add spin />
    </div>    
}

export default App