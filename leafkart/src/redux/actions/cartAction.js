import axios from "axios";
import * as actionTypes from '../constants/cartConstants'

export const addToCart=(id,quantity)=>async(dispatch)=>{
    try {
        const {data}=axios.get(`http://localhost:8000/product/${id}`)

dispatch({type:actionTypes.ADD_TO_CART,payload:{...data,id,quantity}})
    } catch (error) {
        console.log('Error while calling cart API')
    }

}

export const removeFromCart=(id)=>(dispatch)=>{
dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
}