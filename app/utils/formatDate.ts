export default function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', options)
}
