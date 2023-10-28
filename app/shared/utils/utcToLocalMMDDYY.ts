import moment from 'moment-timezone'

// Convert UTC to Local Date 'MM/DD/YY'
export default function utcToLocalMMDDYY(utcTime: string) {
  const userTimezone = moment.tz.guess()
  const localDate = moment.utc(utcTime).tz(userTimezone)
  const formattedDate = localDate.format('MM/DD/YY')
  return formattedDate
}
