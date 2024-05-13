import zhCN from './zh-CN';
import mnCN from './mn-CN';
import enUS from './en-US';
import { CalendarType } from './interface';

const allLocales: Record<string, CalendarType> = {
    'zh-CN': zhCN,
    'en-US': enUS,
    'mn-CN': mnCN
}

export default allLocales