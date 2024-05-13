import { type FC, CSSProperties, ReactNode } from 'react';
import { Dayjs } from 'dayjs';
import "./index.scss";
export interface CalendarProps {
    defaultValue?: Dayjs;
    value?: Dayjs;
    style?: CSSProperties;
    className?: string | string[];
    dateRender?: (currentDate: Dayjs) => ReactNode;
    dateInnerContent?: (currentDate: Dayjs) => ReactNode;
    locale?: string;
    onChange?: (date: Dayjs) => void;
}
declare const Calendar: FC<CalendarProps>;
export default Calendar;
