import moment from 'moment-timezone'

// Convert UTC to Local Date 'DD MMM YYYY'
export default function utcToLocalDDMMMYYYY(utcTime: string) {
  const userTimezone = moment.tz.guess()
  const localDate = moment.utc(utcTime).tz(userTimezone)
  const formattedDate = localDate.format('DD MMM YYYY')
  return formattedDate
}
