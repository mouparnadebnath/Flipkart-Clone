import express from "express";
import { userSignup } from "./userApi.js";
import product from "./model/product_schema.js";
import { userLogin } from "./userApi.js";
const router = express.Router();
router.post('/signup',userSignup)
router.get('/products', async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Error retrieving products' });
    }
});
router.get('/product/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const Product = await product.findOne({'id':id});
res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
})
router.post('/login',userLogin)

export default router