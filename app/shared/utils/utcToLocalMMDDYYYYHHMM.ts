import moment from 'moment-timezone'

// Convert UTC to Local Date 'YYYY-MM-DD HH:mm'
export default function utcToLocalMMDDYYYYHHMM(utcTime: string) {
  const userTimezone = moment.tz.guess()
  const localDate = moment.utc(utcTime).tz(userTimezone)
  const formattedDate = localDate.format('MM/DD/YYYY HH:mm')
  return formattedDate
}
