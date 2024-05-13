import React from "react";
import { Dayjs } from "dayjs";
interface CalendarHeaderProps {
    curMonth: Dayjs;
    prevMonthHandler: () => void;
    nextMonthHandler: () => void;
    todayHandler: () => void;
}
export default function CalendarHeader(props: CalendarHeaderProps): React.JSX.Element;
export {};
