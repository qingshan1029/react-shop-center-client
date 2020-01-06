import {combineReducers} from 'redux'
import token from './tokenReducer'
import signup from './signupReducer'
import department from './departmentReducer'
import product from './productReducer'
import variant from './variantsReducer'
import cart from './cartReducer'
import checkout from './checkoutReducer'
import filter from './filterReducer'

export default combineReducers({
  token,
  signup,
  department,
  product,
  variant,
  cart,
  checkout,
  filter
})