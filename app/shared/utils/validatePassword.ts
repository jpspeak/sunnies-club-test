export default function validatePassword(password: string) {
  const minLengthRegex = /.{8,}/
  const uppercaseRegex = /[A-Z]/
  const lowercaseRegex = /[a-z]/
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/
  return {
    minLength: minLengthRegex.test(password),
    uppercase: uppercaseRegex.test(password),
    lowercase: lowercaseRegex.test(password),
    specialChar: specialCharRegex.test(password)
  }
}
