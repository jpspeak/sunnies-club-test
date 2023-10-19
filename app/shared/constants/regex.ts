const regex = {
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]).{8,}$/,
  min8Char: /^.{8,}$/,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  specialChar: /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/,
  mobileNumberPh: /^(09|\+639)\d{9}$/
}

export default regex
