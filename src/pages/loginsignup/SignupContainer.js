import Signup from './Signup'
import { connect } from 'react-redux'
import { signup } from '../../redux/action/signupAction'

const mapDispatchToProps = {
  signup
}
const mapStoreToProps = state => ({
  signup_loading: state.signup.signup_loading,
  signup_error: state.signup.error
})

export default connect(mapStoreToProps, mapDispatchToProps)(Signup)
