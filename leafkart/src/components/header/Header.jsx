import React, { useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import {  styled } from "@mui/system";
import Cart from "./Cart/Cart";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../redux/actions/productAction";
import { List, ListItem } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Header() {
  const [text, setText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const getProducts = useSelector((state) => state.getproducts);
  const { products } = getProducts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  const getText = (e) => {
    const searchText = e.target.value.toLowerCase();
    setText(searchText);
  };

  useEffect(() => {
    if (text !== "") {
      const filteredData = products.filter((product) => {
        return product.title.longTitle.toLowerCase().includes(text);
      });
      setSearchData(filteredData);
    }
  }, [text]);

  const appBarStyles = {
    backgroundColor: "white",
  };

  const SearchBarStyles = styled('input')({
    width: "50%",
    marginLeft: "2.5rem",
    backgroundColor: "#E9F9FF",
    height: "2.5rem",
    paddingLeft:"3rem",
paddingBottom:"0.4rem",
    "&:focus": {
      outline: "none",
    },
    border:"none",
    outline:"none"
  });

  const SearchiconStyle = {
    color: "grey",
    height: "30px",
    width: "30px",
 marginLeft:"2rem",
 marginRight:"-5rem",
 zIndex:"1"
  };


  const ListWrapper = styled(List)`
    position: absolute;
    display: inline-block;
    color: #000;
    background: #ffffff;
    margin-top: 1rem;
    top: 50px;
    z-index: 1;
    margin-left: 20rem;
    padding: 0;
  `;
const SellerStyle=styled('div')(({theme})=>({
  marginLeft:"2.5rem",
  fontSize:"1.2rem",
  display:"flex",
  flexDirection:"row",
  marginTop:"1rem",
  [theme.breakpoints.between('lg','xl')]:{
    fontSize:"0.7rem",
    fontWeight:"600",
    marginBottom:"0.6rem"
      },
      [theme.breakpoints.down('lg')]:{
       marginLeft:"1.5rem",
       marginBottom:"1rem"

      }
    
}))
const Text=styled("p")(({theme})=>({
  [theme.breakpoints.down('lg')]:{
    display:"none"
  }
}))
const Morevert=styled('div')(({theme})=>({
  [theme.breakpoints.down('lg')]:{
    marginLeft:"1rem"
  }
}))
  const handleClose = () => {
    setText("");
  };

  return (
    <div style={{backgroundColor:"#eeeeee"}}>
      <nav style={appBarStyles}>
        <Toolbar>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="d-flex fler-row"
          >
            <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg' width="150rem" />
          </Link>
          <SearchIcon style={SearchiconStyle} />
          <SearchBarStyles
          id="search"
            className=" me-2"
            placeholder="Search for Products,Brands and more"
            aria-label="Search"
            type="search"
            size="small"
            color="grey"
            onChange={getText}
            value={text}
            autoFocus="true"
           
         />

          {text && (
            <ListWrapper style={{ width: "50rem" }}>
              {searchData.map((product, item) => (
                <Link
                  to={`product/${product.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem
                    key={item}
                    style={{ fontSize: "0.85rem" }}
                    onClick={handleClose}
                  >
                
                    <SearchIcon
                      style={{
                        color: "grey",
                        marginRight: "0.5rem",
                        width: "2rem",
                        height: "2rem",
                      }}
                    />
                    {product.title.longTitle}
                  </ListItem>
                </Link>
              ))}
            </ListWrapper>
          )}
          <Login />
          <Cart />
          <SellerStyle >
          <StorefrontIcon style={{width:"1.5rem",marginRight:"0.5rem"}}/>
         <Text>Become a Seller</Text> 
          </SellerStyle>
          <Morevert style={{marginLeft:"3rem"}}><MoreVertIcon/></Morevert>
        </Toolbar>
      </nav>
    </div>
  );
}
