import React from 'react'
import styles from '../../loginsignup/stylesheets/formInput.module.sass'
import capitalizeString from '../../loginsignup/utils/capitalizeString'


export default function FormInput({
  name,
  validations,
  errorMessage,
  onBlur,
  onFocus,
}) {
  return (
    <div className={styles.outbox}>
      <div className={styles.label}>
        <label htmlFor={name}>{capitalizeString(name)}</label>
      </div>
      <div className={styles.input}>
        <input
          type={(name.indexOf('password') > -1 || name.indexOf('verifyPassword') > -1) ? 'password' : 'text'}
          name={name}
          placeholder={name}
          onBlur={(e) => onBlur(e, validate(validations, e.target.value))}
          onFocus={onFocus}
        />

      </div>
      <div className={styles.errMsg}>
        {errorMessage}
      </div>
    </div>
  )
}

const validate = (validations, val) => {
  if (validations) {
    for (const validation of validations) {
      if (!validation.check(val)) {
        return {
          isValid: false,
          errorMsg: validation.errMsg
        }
      }
    }
  }
  return { isValid: true }
}

