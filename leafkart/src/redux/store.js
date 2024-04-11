import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import { getproductreducer,getProductDetailsReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducer';
const reducer=combineReducers({
  getproducts:getproductreducer,
  getproductDetails:getProductDetailsReducer,
cart:cartReducers
})

const store = configureStore({
  reducer,
 
});
export default store
