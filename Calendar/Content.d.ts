import React from 'react';
import { Dayjs } from 'dayjs';
import { CalendarProps } from '.';
export interface CalendarContentProps extends CalendarProps {
    selectHandler?: (date: Dayjs) => void;
}
export default function CalendarContent(props: CalendarContentProps): React.JSX.Element;
