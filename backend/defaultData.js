import product from "./model/product_schema.js"
import { products } from "./products/product.js"
const defaultdata=async()=>{
try {
// await product.deleteMany({}) 
 await product.insertMany(products) 
   console.log("Data imported successfully")
} catch (error) {
    console.log("error",error.message)
}
}
export default defaultdata