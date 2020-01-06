import styles from '../../loginsignup/stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import Footer from './footer'
import Buttons from "./Buttons";

export default function Base({
  title,
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  onSubmit,
  onChange,
  errorMsg,
  button_title,
  footer_content
}) {
  return (
    <div className={styles.outbox}>
      <div className={styles.top_title}>Please input new product's detail and add</div>
      <div className={styles.logo}><br/></div>
      <div className={styles.title_style}>{title}</div>
      <div className={styles.border_style}></div>
      <Buttons onChange={onChange} />
      {
        inputs.map(({ name, validations }) =>
          <FormInput
            key={name}
            name={name}
            validations={validations}
            errorMessage={errorMsg[name].errorMsg}
            onChange={onInputChange}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
          />
        )
      }
      <Button button_title={button_title} onClick={onSubmit} />
      <Footer content={footer_content} />
    </div>
  )
}


