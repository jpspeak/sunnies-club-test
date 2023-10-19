import moment from 'moment-timezone'

// Convert UTC to Local Date 'MMM D, YYYY'
export default function utcToLocalMMMDYYYY(utcTime: string) {
  const userTimezone = moment.tz.guess()
  const localDate = moment.utc(utcTime).tz(userTimezone)
  const formattedDate = localDate.format('MMM D, YYYY')
  return formattedDate
}
