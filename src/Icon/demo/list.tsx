/**
 * title: 图标列表
 * inline: true
 */

import React from "react";
import CopyToClipboard from 'react-copy-to-clipboard';
import * as DessertUIIcons from "dessert-ui/Icon";

const AllIcons: {
    [key: string]: any
} = DessertUIIcons

export default () => {

    const icons: any = [
        'Add',
        'AccountBook',
        'Alert',
        'AlignLeft',
        'AlignCenter',
        'AlignRight'
    ]

    const onCopy = (text: string, result: boolean) => {
        if (result) {
            window.alert('复制成功')
        } else {

        }
    };

    return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: 10
    }}>
        {icons.map((item: string) => (
            <CopyToClipboard key={item} text={`<${item} />`} onCopy={onCopy}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100,
                    background: '#f0f0f0',
                    borderRadius: 5
                }}>
                    {React.createElement(AllIcons[item], { size: '22px' })}
                </div>
            </CopyToClipboard>
        ))}
    </div >
}