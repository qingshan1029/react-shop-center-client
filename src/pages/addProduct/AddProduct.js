import React, { Component } from 'react'
//import Notifications, { notify } from 'react-notify-toast'

import {
  validateExistence,
  validateEmail,
  validateLength,
  validateLowerCase,
  validateUpperCase
} from '../loginsignup/utils/validation'
import jumpTo from "../../modules/Navigation";
import styles from "../loginsignup/stylesheets/loginsignup.module.sass";
import LoadingAnimation from "../../components/loadingAnimation";
import Base from "./components/Base";
import {deleteProduct} from "../../redux/action/productAction";
import capitalizeString from "../loginsignup/utils/capitalizeString";
import UploadImage from './components/UploadImage'
import {notify} from "react-notify-toast";

const INPUT_CONFIG = [
  // {
  //   name: "imagePath",
  //   validations: [validateExistence]
  // },
  {
    name: "title",
    validations: [validateExistence]
  },
  {
    name: "description",
    validations: [validateExistence]
  },
  {
    name: "department",
    validations: [validateExistence]
  },
  {
    name: "category",
    validations: [validateExistence]
  },
  {
    name: "price",
    validations: [validateExistence]
  },
  {
    name: "color",
    validations: [validateExistence]
  },
  {
    name: "size",
    validations: [validateExistence]
  },
  {
    name: "quantity",
    validations: [validateExistence]
  }
]
const toastColor = {
  background: '#505050',
  text: '#fff'
}
export default class AddProduct  extends Component {
  constructor(props) {
    super(props)
    this.state = { formData : undefined }
    this.inputText = {}
//    this.getFormData = this.getFormData.bind(this)
    for (const input of INPUT_CONFIG) {
      this.state[input.name] = { errorMsg: '' }
      this.inputText[input.name] = ''
    }

    fetch('/wake-up')
        .then(res => {
          if (res.ok) {
            console.log('init inti inti nit ninit innt')
            return this.setState({ loading: false })
          }
          const msg = 'Something is went wrong with Heroku'
          this.toast(msg, 'custom', 2000, 32432)
        })
  }
  //validate input when blur
  handleBlur = (e, validResult) => {
    const name = e.target.name
    this.inputText[name] = e.target.value
    if (!validResult.isValid) {
      this.setState({
        [name]: { errorMsg: validResult.errorMsg }
        // [name]: { errorMsg: "kkj1-login-signup-error" }
      })
    } else {
      this.setState({
        [name]: { errorMsg: '' }
      })
    }
  }
  // when focus, clear error message
  handleFocus = (e) => {
    const name = e.target.name
    this.setState({
      [name]: { errorMsg: '' }
    })
  }
  //submit actions
  handleClick = () => {
    let canSubmit = true
    for (const input of INPUT_CONFIG) {
      if (!!!input.validations) continue
      for (const v of input.validations) {
        let checkResult = v.check(this.inputText[input.name])
        canSubmit = canSubmit && checkResult

        if (!checkResult) {
          this.setState({
            [input.name]: { errorMsg: v.errMsg }
            // [input.name]: { errorMsg: 'kkj2-error' }
          })
          break
        }
      }
    }
    if( this.state.formData == undefined )
    {
      return alert('Please select an image.')
    }

    let countFormData = 0
    this.state.formData.forEach((item) => {
      countFormData++;
    })

    console.log(countFormData)

    canSubmit = (countFormData > 0) ? canSubmit : false

    if (!canSubmit) {
      return alert('Please select an image.')
      return
    }

    const { title, description, department, category, price, color, size, quantity } = this.inputText

    this.props.uploadImage(this.state.formData)
        .then(images => {
          let urlArr =[]
          images.data.map(item => {
            urlArr.push(item.secure_url)
          })
          this.props.addProduct(urlArr[0], title, description, department, category, price, color, size, quantity)
              .then(res => {
                {
                  this.props.getAllProducts()
                  jumpTo('/dashboard')
                }
              }).catch(error => {
                  alert('sorry, try again', error)
                  return error
              })
        })
        .catch(error => {
          alert('image upload error', error)
          return error
        })
  }

  onChange = e => {
    const errs = []
    const files = Array.from(e.target.files)

    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time'
      return alert(msg);// this.toast(msg, 'custom', 2000, toastColor)
    }
    const formData = new FormData()

    const types = ['image/png', 'image/jpeg', 'image/gif']
    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
        return alert(errs)
      }

      if (file.size > 500000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
        return alert(errs)
      }

      formData.append(i.toString(), file)
    })
    this.state.formData = formData
  }

  // getFormData = (
  //     formData
  // ) => {
  //   this.setState({ formData: formData })
  // }
  render() {

    return (
        <React.Fragment>
        <div className={styles.outbox}>
          <div className={styles.box}>
            {this.props.loading &&
            <LoadingAnimation />
            }
            <Base

                title="Add Product"
                inputs={INPUT_CONFIG}
                onInputBlur={this.handleBlur}
                onInputFocus={this.handleFocus}
                onSubmit={this.handleClick}
                onChange={this.onChange}
                errorMsg={this.state}
                button_title="Add"
                footer_content={
                  <div className={styles.label}>
                    Don't you add product? <a style={{color: "yellow"}} href={`/`}>
                    Cancel
                  </a>
                  </div>
                }
            />

          </div>
        </div>
        </React.Fragment>
    )
  }
}





