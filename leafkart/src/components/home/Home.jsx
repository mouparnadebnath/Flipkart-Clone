import React, { useEffect } from 'react'
import Slide from './Slide'
import Products from './Products'
import { getproducts } from '../../redux/actions/productAction'
import { banners } from '../../container/data'
import {  useDispatch,useSelector } from 'react-redux'
import Banner from './Banner'
import BrandsAd from './BrandsAd'
import Stories from '../footer/Stories'
import LowerSection from '../footer/LowerSection'
import Navbar from './Navbar'
export default function Home() {
  const {products}=useSelector(state=>state.getproducts)
  console.log(products)
const dispatch=useDispatch();
useEffect(() => {
dispatch(getproducts())
}, [dispatch])


  return (
    <>
<Navbar/>
    <div style={{backgroundColor:"#eeeeee"}}>
   <Slide/>
   <div></div>
<Products products={products} advertisementImage={true} />
<div></div>
<Banner set={banners.set_1}/>
<div></div>
<BrandsAd/>
<div></div>
<Banner set={banners.set_2}/>
<div></div>
<Products products={products} advertisementImage={false} title={'Electronics'}/>
<Banner set={banners.set_3}/>
<BrandsAd/>
<Banner set={banners.set_4}/>
{/* to do */}
<Banner set={banners.set_5}/>
<BrandsAd/>
<Banner set={banners.set_6}/>
<Products products={products} advertisementImage={false} title={'Beauty,Toys,Foods & more'}/>
<Banner set={banners.set_7}/>
<Products products={products} advertisementImage={false} title={'Beauty,Toys,Foods & more'}/>
<BrandsAd/>
<Banner set={banners.set_8}/>
</div>
<div></div>
<Stories/>
<LowerSection/>
    </>
  )
}
