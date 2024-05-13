import React, { type FC, CSSProperties, ReactNode, useContext, useState } from 'react';
import classNames from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import LocaleContext from './LocaleContext';
import CalendarHeader from './Header';
import CalendarContent from './Content';
import "./index.scss";

export interface CalendarProps {
    defaultValue?: Dayjs
    value?: Dayjs
    style?: CSSProperties
    className?: string | string[]
    // 定制日期显示，会完全覆盖日期单元格
    dateRender?: (currentDate: Dayjs) => ReactNode
    // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
    dateInnerContent?: (currentDate: Dayjs) => ReactNode
    // 国际化相关
    locale?: string
    onChange?: (date: Dayjs) => void
}

const Calendar: FC<CalendarProps> = (props) => {

    const {
        defaultValue = dayjs(),
        value,
        style,
        className,
        locale,
        onChange
    } = props

    const [curValue, setCurValue] = useState<Dayjs>(() => {
        if (value !== undefined) {
            return value
        } else {
            return defaultValue
        }
    })

    const containerClassname = classNames('calendar', className)

    function changeDate(date: Dayjs) {
        setCurValue(date)
        onChange?.(date)
    }

    function selectHandler(date: Dayjs) {
        changeDate(date)
    }

    function prevMonthHandler() {
        setCurValue(curValue.subtract(1, 'month'))
    }

    function nextMonthHandler() {
        setCurValue(curValue.add(1, 'month'))
    }

    function todayHandler() {
        const date = dayjs(Date.now())
        changeDate(date)
    }

    return <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
        <div className={containerClassname} style={style}>
            <CalendarHeader
                curMonth={curValue}
                prevMonthHandler={prevMonthHandler}
                nextMonthHandler={nextMonthHandler}
                todayHandler={todayHandler}
            />
            <CalendarContent
                {...props}
                value={curValue}
                selectHandler={selectHandler}
            />
        </div>
    </LocaleContext.Provider>
}

export default Calendar;
