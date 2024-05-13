import React, { type FC, CSSProperties, ReactNode, useContext, useState } from 'react';
import { Dayjs } from 'dayjs';
import { CalendarProps } from '.';
import classNames from 'classnames';
import LocaleContext from './LocaleContext';
import allLocales from './locale';

export interface CalendarContentProps extends CalendarProps {
    selectHandler?: (date: Dayjs) => void
}

/**
 * 获取日期列表
 * @param {Dayjs} date 目标日
 * @returns
 */
function getAllDays(date: Dayjs) {
    const startDate = date.startOf('month')
    const day = startDate.day()
    const daysInfoLength = 6 * 7
    const daysInfo: Array<{ date: Dayjs, currentMonth: boolean }> = new Array(daysInfoLength)

    for (let i = 0; i < daysInfoLength; i++) {
        const calcDate = startDate.subtract(day - i, 'day')
        daysInfo[i] = {
            date: calcDate,
            currentMonth: calcDate.month() == date.month()
        }
    }

    return daysInfo
}

export default function CalendarContent(props: CalendarContentProps) {
    const {
        value,
        dateRender,
        dateInnerContent,
        selectHandler
    } = props
    const localeContext = useContext(LocaleContext)
    const CalendarLocale = allLocales[localeContext.locale]
    const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const dayList = getAllDays(value!)

    return <>
        <div className='calendar__week'>
            {weekList.map((week) => <div className='calendar__week__item' key={week}>{CalendarLocale.week[week]}</div>)}
        </div>
        <div className='calendar__day'>
            {dayList.map((item) => (
                <div key={item.date.date()} className={`calendar__day__cell ${item.currentMonth ? 'calendar__day__cell--active' : ''}`} onClick={() => {
                    selectHandler?.(item.date)
                }}>
                    {dateRender
                        ? dateRender(item.date)
                        : <div className='calendar__day__cell__wrap'>
                            <div className={classNames(
                                'calendar__day__cell__date',
                                value!.format('YYYY-MM-DD') == item.date.format('YYYY-MM-DD')
                                    ? 'calendar__day__cell__date--active'
                                    : ''
                            )}>{item.date.date()}</div>
                            <div className='calendar__day__cell__extend'>{dateInnerContent?.(item.date)}</div>
                        </div>}
                </div>
            ))}
        </div>
    </>
}