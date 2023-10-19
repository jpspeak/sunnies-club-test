import moment from 'moment-timezone'

// Convert UTC to Local Date 'DD/MM/YY'
export default function utcToLocalDDMMYY(utcDate?: string) {
  const userTimezone = moment.tz.guess()
  const localDate = moment.utc(utcDate).tz(userTimezone)
  const formattedDate = localDate.format('DD/MM/YY')
  return formattedDate
}
