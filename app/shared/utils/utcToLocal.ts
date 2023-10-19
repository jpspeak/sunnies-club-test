import moment from 'moment-timezone'

// Convert UTC to Local
export default function utcToLocal(utcDate?: string) {
  const localTime = moment.utc(utcDate).local()
  const formattedDate = localTime.format()
  return formattedDate
}
