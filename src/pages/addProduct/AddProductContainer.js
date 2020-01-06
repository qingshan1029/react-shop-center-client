import {connect } from 'react-redux'
import {addProduct, getAllProducts, uploadImage} from '../../redux/action/productAction'
import AddProduct from "./AddProduct";
const mapDispatchToProps={
  uploadImage,
  addProduct,
  getAllProducts
}
const mapStoreToProps=state=>({
  loading:state.token.token_loading,
  login_error:state.token.error
})

export default connect(mapStoreToProps,mapDispatchToProps)(AddProduct)