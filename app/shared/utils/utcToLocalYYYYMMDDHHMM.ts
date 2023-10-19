import moment from 'moment-timezone'

// Convert UTC to Local Date 'YYYY-MM-DD HH:mm'
export default function utcToLocalYYYYMMDDHHMM(utcTime: string) {
  const userTimezone = moment.tz.guess()
  const localDate = moment.utc(utcTime).tz(userTimezone)
  const formattedDate = localDate.format('YYYY-MM-DD HH:mm')
  return formattedDate
}
