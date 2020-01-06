import React from 'react'
import LoginSignup from './LoginSignup'
import {
  validateExistence,
  validateEmail,
  validateLength,
  validateLowerCase,
  validateUpperCase
} from './utils/validation'


const INPUT_CONFIG = [
  {
    name: "email",
//      validations: [validateExistence, validateEmail]
      validations: [validateExistence]
  },
  {
    name: "password",
    //validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
    validations: [validateExistence, validateLength(5, 15)]
  }
]

export default function Login({ postToken, login_loading, login_error }) {
  return (
    <div>
      <LoginSignup
        INPUT_CONFIG={INPUT_CONFIG}
        title="Log in"
        footer_text="Don't you have an account?"
        footer_redirect="signup"  // signup.js equal to
        submitAction={postToken}
        loading={login_loading}
        login_error={login_error}
      />
    </div>
  )
}





