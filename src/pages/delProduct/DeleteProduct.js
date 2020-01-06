import React from 'react'
import {connect} from "react-redux";
import {deleteProduct} from "../../redux/action/productAction";

export default function DeleteProduct() {
    return (
        // deleteProduct(this.props.id)
        deleteProduct('dsfasfd')
    )
}


const mapStoreToProps = state => ({
    id: state.product.id
})


