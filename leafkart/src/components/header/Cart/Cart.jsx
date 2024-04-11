import React from "react";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Cart() {
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "red",
    },
  
  }));
  const Divstyle=styled("div")(({theme})=>({
    marginLeft: "40px", 
    width: "25", 
    height: "25",
    [theme.breakpoints.down('lg')]:{
     marginLeft:"20px"
        }
  }))
const CartStyle=styled('a')(({theme})=>({
  fontSize: "1.2rem",
  color: "black",
  textDecoration: "none",
  fontWeight: "400",
  [theme.breakpoints.between('lg','xl')]:{
fontSize:"0.7rem",
fontWeight:"600"
  },
  [theme.breakpoints.down('lg')]:{
display:"none"
  }
}))

  return (
    <Link to={'/cartItems'} style={{textDecoration:"none"}}>
    <Divstyle title="Cart" style={{  }}>
      <StyledBadge
        badgeContent={cartItems.length}
        style={{ marginRight: "0.4rem", marginBottom: "10px"}}
      >
        <ShoppingCartOutlinedIcon style={{color:"black",width:"1.2rem",height:"1.2rem",marginBottom:"-0.5rem"}} />
      </StyledBadge>
      <CartStyle
        href="/"
        title="Cart"
        style={{
         
        }}
      >
        Cart
      </CartStyle>
    </Divstyle>
    </Link>
  );
}
