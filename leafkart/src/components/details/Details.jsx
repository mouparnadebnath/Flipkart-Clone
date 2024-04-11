import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getproductDetails } from "../../redux/actions/productAction";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import heart from '../../assets/heart.svg'
import heartFill from '../../assets/heartFill.svg'
import ReactImageMagnify from "react-image-magnify";
import {IconButton} from "@mui/material";
import SellIcon from '@mui/icons-material/Sell';
import TextField from '@mui/material/TextField';
import {InputAdornment} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';
import { addToCart } from "../../redux/actions/cartAction";
import LowerSection from "../footer/LowerSection";
import '../../App.css'
import Skeletons from "./Skeletons";
import { Link } from "react-router-dom";
import SecondNavbar from "../home/SecondNavbar";
export default function Details() {
  const [image, setimage] = useState(heart)
  const { product } = useSelector((state) => state.getproductDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
const addItemToCart=()=>{
dispatch(addToCart(product))
}

  useEffect(() => {
    if (product && id !== product.id) dispatch(getproductDetails(id));
  }, [dispatch, id, product]);

  const handleFavouritecolor=()=>{
setimage(heartFill)
if (image===heartFill) {
  setimage(heart)
}
  }
 const buyNow=()=>{
  dispatch(addToCart(product))
 }

  const deliveryDate=new Date()
  const deliveryDayObject = new Date(deliveryDate.getTime());
  deliveryDayObject.setDate(deliveryDayObject.getDate() + 5);
  const deliveryday=deliveryDayObject.getDate()
  const deliveryMonth=deliveryDayObject.toLocaleString('default', { month: 'short' });
const deliveryWeekDay=deliveryDayObject.toLocaleString("default" , {weekday:"long"})


const Wrapper=styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"Row",
[theme.breakpoints.down('lg')]:{
  flexDirection:"column"
}
}))
const Buttons=styled('div')(({theme})=>({
  display:"flex",
  flexDirection:"Row",
  justifyContent:"space-Between",
  marginTop:"1rem",
  
[theme.breakpoints.down('lg')]:{
justifyContent:"center"
}
}))

const AddToCartButton=styled('button')(({theme})=>({
  backgroundColor: "#FF9F01",
  border: "none",
  width: "13.2rem",
  height: "3.5rem",
  color: "white",
  fontSize: "1rem",
  fontWeight:"600"
}))

const BuyNowButton=styled('button')(({theme})=>({
  backgroundColor: "#FB641B",
  border: "none",
  width: "13.2rem",
  height: "3.5rem",
  color: "white",
  fontSize: "1rem",
  fontWeight: "600",
}))
  return (
    <>
<SecondNavbar/>
    <Box style={{ width: "auto", height: "auto",margin:"0 5rem",background:"white" ,justifyContent:"center"}}>
      {product && Object.keys(product).length ? (
        <Wrapper className="" style={{ width:"auto",margin:"1rem 0 0 1rem"}}>
          <div className="d-flex flex-column ">
            <div style={{border:"0.1px solid #eeeeef",padding:"1rem"}}>
            <div style={{marginLeft:"24rem" ,zIndex:"1"}}>
              <IconButton>
            <img src={image} alt="" style={{cursor:"pointer",position:"absolute"}} onClick={handleFavouritecolor} title="Favourites"/>
            </IconButton>
            </div>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "",
                    height:450,
                    width: 400,
                    src: product.detailUrl,
                    
                  },
                  largeImage: {
                    src: product.detailUrl,
                    width: 1000,
                    height: 1200,
                    style:{marginLeft:"6rem"}
                  },
                }}
              />
            </div>

            <Buttons>
              <Link to={'/cartItems'}>
            
              <AddToCartButton
             
                onClick={addItemToCart}
              >
                <svg
                  class="_1KOMV2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 15"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ margin: "0.2rem" }}
                >
                  <path
                    d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                    fill="#fff"
                  ></path>
                </svg>
                ADD TO CART
              </AddToCartButton> 
              </Link>
              <Link to={'/cartItems'}>
              <BuyNowButton
      
             onClick={buyNow} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class=" bi-lightning-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
                </svg>
                BUY NOW
              </BuyNowButton>
              </Link>
            </Buttons>
          </div>

          <div className="mx-5 my-5"> 
            <Typography>
              <p>{product.title.longTitle}</p>
              <div className="d-flex flex-row" style={{ margin: "0 0 1rem 0" }}>
                <Box
                  className="d-flex flex-row justify-content-center"
                  style={{
                    width: "2.8rem",
                    height: "1.3rem",
                    backgroundColor: "#388E3C",
                    color: "white",
                    borderRadius: "10%",
                  }}
                >
                  <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                    4.3
                  </div>

                  <div>
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="white"
                      class=" bi-star-fill"
                      viewBox="0 0 16 16"
                      style={{ paddingBottom: "5px" }}
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </Box>
                <Box>
                  <Typography
                    style={{
                      fontSize: "1rem",
                      color: "grey",
                      margin: "0 0.7rem 0 0.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    0 ratings & 0 reviews
                  </Typography>
                </Box>
                <Box>
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt=""
                    style={{ width: "5rem" }}
                  />
                </Box>
              </div>
              <div className="d-flex flex-row ">
                <p style={{ fontSize: "2.2rem", color: "black" }}>
                  ₹{product.price.cost}
                </p>
                <p
                  className="text-decoration-line-through"
                  style={{
                    color: "grey",
                    fontSize: "1.2rem",
                    marginTop: "1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  ₹{product.price.mrp}
                </p>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "green",
                    marginTop: "1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  {product.price.discount}
                  <span style={{ margin: "0.4rem" }}>off</span>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="silver"
                      className="bi bi-info-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </a>
                </p>
              </div>

<Typography>
  <h6>Available Offers</h6>
  <Typography style={{fontSize:"0.9rem",listStyle:"none",lineHeight:"2rem"}} >

    <li><SellIcon style={{width:"20px",height:"20px",color:"#388E3C" ,marginRight:"10px"}}/><a href="/" style={{textDecoration:"none",color:"black"}}><b>   Bank Offer</b> Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI </a> <a href="/" style={{textDecoration:"none",fontWeight:"bold"}}> T&C</a></li>

    <li><SellIcon style={{width:"20px",height:"20px",color:"#388E3C"  ,marginRight:"10px"}}/><a href="/" style={{textDecoration:"none",color:"black"}}><b>   Bank Offer</b> 10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and above</a><a href="/" style={{textDecoration:"none",fontWeight:"bold"}}> T&C</a></li>
    <li><SellIcon style={{width:"20px",height:"20px",color:"#388E3C" ,marginRight:"10px"}}/><a href="/" style={{textDecoration:"none",color:"black"}}><b>   Bank Offer</b> 10% off on HSBC Bank Credit Card and EMI Transactions, up to ₹1,500 on orders of ₹10,000 and above</a><a href="/" style={{textDecoration:"none",fontWeight:"bold"}}> T&C</a></li>
    <li><SellIcon style={{width:"20px",height:"20px",color:"#388E3C" ,marginRight:"10px"}}/><a href="/" style={{textDecoration:"none",color:"black"}}><b>   Partner Offer</b> Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000* </a> <a href="/" style={{textDecoration:"none",fontWeight:"bold"}}> Know More</a></li>
    <li><a href="/" style={{textDecoration:"none",fontWeight:"bold"}}>View 15 more offers</a></li>
  </Typography>
</Typography>


              <img
                src="https://rukminim2.flixcart.com/lockin/500/500/images/CCO__PP_2019-07-14.png?q=50"
                alt=""
                style={{ width: "400px", height: "100px" }}
              />

              <dl class="row">
  <dt className="col-sm-2" style={{color:"grey",marginBottom:"3rem"}} >Warranty</dt>
  <dd className="col-sm-10 ">1 Year doorstep Replacement</dd>

  <dt className="col-sm-2" style={{color:"grey"}}>Delivery</dt>
  <dd className="col-sm-10">
  <TextField
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon/>
            </InputAdornment>
          ),
          endAdornment:<a href="/" style={{textDecoration:"none",color:'#227CEB',fontWeight:"bold"}}>Check</a>
        }}
        placeholder="Enter Delivery Pincode"
        variant="standard"
      type="number"
      inputMode="numeric"
      />
          <p style={{fontSize:"0.9rem",fontWeight:"bold",marginTop:"0.6rem",marginBottom:"3rem"}}>Delivery by {deliveryday} {deliveryMonth},{deliveryWeekDay} <span style={{color:"grey"}}>|</span> <span style={{fontSize:"0.9rem",fontWeight:"bold",color:"green"}}>Free</span></p>
  </dd>

  <dt className="col-sm-2" style={{color:"grey",marginBottom:"3rem"}}>Highlights</dt>
  <dd className="col-sm-10">
<ul style={{listStyle:"none"}}>
  <li><CircleIcon style={{height:"8px",color:"grey"}}/> Very good quality</li>
</ul>
  </dd>

  <dt className="col-sm-2 text-truncate" style={{color:"grey",marginBottom:"3rem"}}>Seller</dt>
  <dd className="col-sm-10">
    <div className="d-flex flex-row">
    <a href="/" style={{textDecoration:"none",color:"#227CEB",marginRight:"0.5rem",fontWeight:"bold"}}>YOU</a>
    <Box
                  className="d-flex flex-row justify-content-center"
                  style={{
                    width: "2.8rem",
                    height: "1.3rem",
                    backgroundColor: "#227CEB",
                    color: "white",
                    borderRadius: "56px",
                  }}
                >
                  <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                    4.3
                  </div>

                  <div>
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="white"
                      class=" bi-star-fill"
                      viewBox="0 0 16 16"
                      style={{ paddingBottom: "5px" }}
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </Box>
                </div>
    </dd>


  <dt className="col-sm-2 text-truncate" style={{color:"grey"}}>Description</dt>
  <dd className="col-sm-10">{product.description}</dd>

  
</dl>
            </Typography>
          </div>
        </Wrapper>
      ):<Skeletons/>}
    </Box>
    <LowerSection/>
    </>
  );
}
