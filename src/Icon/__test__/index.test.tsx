import React from "react";
import { render, screen } from '@testing-library/react';
import { Add } from "../icons";
import '@testing-library/jest-dom';

test('render icon Add', () => {
    render(<Add />)

    // 使用 role="img" 定位 SVG 元素
    const svgElement = screen.getByRole('img')

    // 定位 SVG 中的 path 元素    
    const pathElement = svgElement.querySelector('path')

    // 断言 path 元素是否存在
    expect(pathElement).toBeInTheDocument()

    // 断言 path 元素的 d 属性是否包含特定的路径数据
    expect(pathElement).toHaveAttribute('d', 'M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z')
})
