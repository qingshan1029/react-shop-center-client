import {
  POST_SIGNIN_BEGIN,
  POST_SIGNIN_SUCCESS,
  POST_SIGNIN_FAIL
} from '../action/signupAction'

const initialState = {
  signup_loading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNIN_BEGIN:
      return {
        ...state,
        signup_loading: true
      }
    case POST_SIGNIN_SUCCESS:
      return {
        ...state,
        signup_loading: false,
      }
    case POST_SIGNIN_FAIL:
      return {
        ...state,
        signup_loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}