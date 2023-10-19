export function addCommas(number: number) {
  return number.toLocaleString()
}
export function addCommasWithCents(number: number) {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 2
  })
}
