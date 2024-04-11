import * as actionTypes from '../constants/cartConstants'

export const cartReducers=(state={cartItems:[]},action)=>{
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
    const item=action.payload;
    const existItem=state.cartItems.find(product=>product.id===item.id)
            if (existItem) {
                 return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.id === existItem.id ? {...item,quantity:item.id.quantity++} : x
          )
        };
            }
    else{
        return {...state,cartItems:[...state.cartItems,item]}
    }
    case actionTypes.REMOVE_FROM_CART:
        const items=action.payload;
        const existItems=state.cartItems.find(product=>product.id===items.id)
        if (existItems) {
            return {
                cartItems: state.cartItems.map(x =>
                    x.id === existItem.id ? {...x,quantity:items.id.quantity--}:x
                )
         } } 
        else {
            
            return{...state,cartItems:state.cartItems.filter(product=>product.id !== action.payload)}
        }
        default:
            return state
    }
}
 