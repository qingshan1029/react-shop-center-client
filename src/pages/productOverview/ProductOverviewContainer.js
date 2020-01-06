import { connect } from 'react-redux'
import ProductOverview from './ProductOverview'
import {getProduct, deleteProduct, getAllProducts} from '../../redux/action/productAction'
import {getVariantsByProductId} from '../../redux/action/variantsAction'
import {postCart} from '../../redux/action/cartAction'

const mapStoreToProps=state=>({
  product:state.product.product,
  variants:state.variant.variants
})
const mapDispatchToProps={
  deleteProduct,
  getProduct,
  getVariantsByProductId,
  postCart,
  getAllProducts
}

export default connect(mapStoreToProps,mapDispatchToProps)(ProductOverview)