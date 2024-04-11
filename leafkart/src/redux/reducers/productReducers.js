import * as actionTypes from '../constants/productConstants'


export const getproductreducer=(state={products:[]},action)=>{
switch (action.type) {
  case actionTypes.GET_PRODUCTS_SUCCESS:
    return{products:action.payload}
  case actionTypes.GET_PRODUCTS_FAIL:
    return{error:action.payload}
  default:
   return state
}
}

export const getProductDetailsReducer=(state={product:{}},action)=>{
  switch (action.type){
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return{}
      case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
        return{product:action.payload}
        case actionTypes.GET_PRODUCTS_FAIL:
    return{error:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
    return{product:{}}
    default:
      return state
  }
}


