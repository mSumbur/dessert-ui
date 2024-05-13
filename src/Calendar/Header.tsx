import React, { useContext } from "react";
import { Dayjs } from "dayjs";
import LocaleContext from "./LocaleContext";
import allLocales from "./locale";

interface CalendarHeaderProps {
    curMonth: Dayjs
    prevMonthHandler: () => void
    nextMonthHandler: () => void
    todayHandler: () => void
}

export default function CalendarHeader(props: CalendarHeaderProps) {

    const {
        curMonth,
        prevMonthHandler,
        nextMonthHandler,
        todayHandler
    } = props

    const localeContext = useContext(LocaleContext)
    const CalendarLocale = allLocales[localeContext.locale]

    return <div className='calendar__header'>
        <div className="calendar__header__left">
            <div className="calendar__header__icon" onClick={prevMonthHandler}>&lt;</div>
            <div className="calendar__header__value">{curMonth.format(CalendarLocale.formatMonth)}</div>
            <div className="calendar__header__icon" onClick={nextMonthHandler}>&gt;</div>
            <button className="calendar__header__btn" onClick={todayHandler}>{CalendarLocale.today}</button>
        </div>
    </div>
}