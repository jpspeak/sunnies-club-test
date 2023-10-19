import moment from 'moment-timezone'

// Convert date to 'YYYY-MM-DD'
export default function toHtmlDate(date: string) {
  return moment(date).format('YYYY-MM-DD')
}
