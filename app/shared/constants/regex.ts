const regex = {
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&-]).{8,}$/,
  min8Char: /^.{8,}$/,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  specialChar: /[@$!%*?&-]/,
  mobileNumberPh: /^(09|\+639)\d{9}$/
}

export default regex
