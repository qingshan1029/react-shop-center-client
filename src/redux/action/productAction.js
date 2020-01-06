import serverCall from '../../modules/serverCall'
//FormData = require('form-data')
// var fs = require('fs')

import {POST_SIGNIN_BEGIN, POST_SIGNIN_FAIL, POST_SIGNIN_SUCCESS} from "./signupAction";

export const getAllProducts=()=>dispatch=>{
  dispatch({
    type:GET_ALL_PRODUCTS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products`
  })
  .then(res=>{
    console.log("get products success.")
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    console.log("get products failed.")
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const addProduct = (imagePath, title, description, department, category, price, color, size, quantity) =>dispatch=> {
  dispatch({
    type: POST_PRODUCT_BEGIN,
  })
  return serverCall({
    method:'POST',
    url:'/products/add',
    data:{
      imagePath, title, description, department, category, price, color, size, quantity
    }
  })
      .then(res=>{
        dispatch({
          type:POST_PRODUCT_SUCCESS,
          payload:res
        })
        return res
      })
      .catch(error=>{
        dispatch({
          type:POST_PRODUCT_FAIL,
          payload:{error}
        })
        throw error
      })
}
export const uploadImage = (formData) =>dispatch=> {
  // for( var key of formData.entries() ) {
  //   console.log(key[0] + ', ' + key[1])
  // }
  dispatch({
    type: POST_PRODUCT_BEGIN,
  })
  return serverCall({
    method:'POST',
    url:'/products/image-upload',
    data: formData
  })
      .then(res=>{
        dispatch({
          type:POST_PRODUCT_SUCCESS,
          payload:res
        })
        console.log(res)
        return res
      })
      .catch(error=>{
        dispatch({
          type:POST_PRODUCT_FAIL,
          payload:{error}
        })
        throw error
      })
}
export const deleteProduct = (productId) =>dispatch=> {
  dispatch({
    type: POST_PRODUCT_BEGIN,
  })
  return serverCall({
    method:'DELETE',
    url:`/products/delete/${productId}`,
    data:{
      productId
    }
  })
      .then(res=>{
        dispatch({
          type:POST_PRODUCT_SUCCESS,
          payload:res
        })
        return res
      })
      .catch(error=>{
        dispatch({
          type:POST_PRODUCT_FAIL,
          payload:{error}
        })
        throw error
      })
}

export const getProduct=(id)=>dispatch=>{
  dispatch({
    type:GET_PRODUCT_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products/${id}`
  })
  .then(res=>{
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getProductsByCategory=(c)=>dispatch=>{
  dispatch({
    type:GET_PRODUCTS_BY_CATEGORY_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products?category=${c}`
  })
  .then(res=>{
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_FAIL,
      payload: {error}
    })
    return error
  })
}

export const search=(text)=>dispatch=>{
  dispatch({
    type:SEARCH_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/search?query=${text}`
  })
  .then(res=>{
    dispatch({
      type: SEARCH_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: SEARCH_FAIL,
      payload: {error}
    })
    return error
  })
}

export const applyFilters=(filter_string)=>dispatch=>{
  dispatch({
    type:APPLY_FILTERS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products?${filter_string}`
  })
  .then(res=>{
    dispatch({
      type: APPLY_FILTERS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: APPLY_FILTERS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const APPLY_FILTERS_BEGIN='APPLY_FILTERS_BEGIN'
export const APPLY_FILTERS_SUCCESS='APPLY_FILTERS_SUCCESS'
export const APPLY_FILTERS_FAIL='APPLY_FILTERS_FAIL'

export const POST_PRODUCT_BEGIN='POST_PRODUCT_BEGIN'
export const POST_PRODUCT_SUCCESS='POST_PRODUCT_SUCCESS'
export const POST_PRODUCT_FAIL='POST_PRODUCT_FAIL'

export const SEARCH_BEGIN='SEARCH_BEGIN'
export const SEARCH_SUCCESS='SEARCH_SUCCESS'
export const SEARCH_FAIL='SEARCH_FAIL'


export const GET_ALL_PRODUCTS_BEGIN='GET_ALL_PRODUCTS_BEGIN'
export const GET_ALL_PRODUCTS_SUCCESS='GET_ALL_PRODUCTS_SUCCESS'
export const GET_ALL_PRODUCTS_FAIL='GET_ALL_PRODUCTS_FAIL'

export const GET_PRODUCT_BEGIN='GET_PRODUCT_BEGIN'
export const GET_PRODUCT_SUCCESS='GET_PRODUCT_SUCCESS'
export const GET_PRODUCT_FAIL='GET_PRODUCT_FAIL'

export const GET_PRODUCTS_BY_CATEGORY_BEGIN='GET_PRODUCTS_BY_CATEGORY_BEGIN'
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS='GET_PRODUCTS_BY_CATEGORY_SUCCESS'
export const GET_PRODUCTS_BY_CATEGORY_FAIL='GET_PRODUCTS_BY_CATEGORY_FAIL'