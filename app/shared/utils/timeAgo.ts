import TimeAgo, { DateInput } from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

export default function timeAgo(date: DateInput) {
  const ta = new TimeAgo('en-US')
  return ta.format(date)
}
