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
    name: "fullname",
    //validations: [validateLength()]
  },
  {
    name: "email",
    validations: [validateExistence, validateEmail]
  },
  {
    name: "password",
 //   validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
    validations: [validateExistence, validateLength(5, 15)]
  },
  {
    name: "verifyPassword",
//    validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
    validations: [validateExistence, validateLength(5, 15)]
  },
]


export default function Signup({signup,signup_loading,signup_error}) {
  return (
    <div>
      <LoginSignup
        INPUT_CONFIG={INPUT_CONFIG}
        title="Sign up"
        footer_text="Do you have an account?"
        footer_redirect="login"   // login.js equal to
        submitAction={signup}
        loading={signup_loading}
        signup_error={signup_error}
      />
    </div>
  )
}



