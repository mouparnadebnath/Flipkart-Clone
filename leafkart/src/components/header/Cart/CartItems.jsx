import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../redux/actions/cartAction";
import { useEffect, useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import SecondNavbar from "../../home/SecondNavbar";
export default function CartItems() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    console.log("Removing item with ID:", id);
    dispatch(removeFromCart(id));
  };

  const increaseQuantity=(id)=>{
    dispatch(addToCart(id));

}

const decreaseQuantity=(id)=>{
  dispatch(removeFromCart(id));

}



  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price +=item.id.quantity* item.id.price.mrp;
      discount += item.id.quantity*(item.id.price.mrp - item.id.price.cost);
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems]);
  return (
    <div>
      <SecondNavbar/>
      {cartItems.length ? (
        <div>
          <div
            className="d-flex justify-content-between"
            style={{ margin: "2rem 10rem 10rem 10rem" }}
          >
            <Box
              style={{
                width: "",
                border: "none",
                backgroundColor: "white",
                width: "66%",
              }}
            >
              <div className="d-flex justify-content-between">
                <p style={{margin:"1.2rem 0 0 2rem",color:"grey",fontWeight:"500"}}>From saved address</p>
                <button
                  style={{
                    border: "0.5px solid silver",
                    backgroundColor: "white",
                    color: "#2D7EFF",
                    fontSize: "0.9rem",
                    borderRadius: "5px",
                    fontWeight: "600",
                    margin:"1rem 2rem 0 0",
                    padding:"0.4rem"
                  }}
                >
                  Enter delivery pincode
                </button>
              </div>
              <hr style={{ color: "black" }}></hr>
              {cartItems.map((item, index) => (
                <div
                  className="d-flex flex-column"
                  key={index}
                  style={{ marginRight: "2rem",marginBottom:"1rem" }}
                >
                  <div className="d-flex flex-row">
                    <img
                      src={item.id.url}
                      alt=""
                      style={{ width: "100px", maxHeight:"120px", margin: "2rem",minHeight:"130px" }}
                    />
                    
                 
                  <div style={{ margin: "1rem 0 1rem 0" }}>
                    <p className="d-inline-block text-truncate" style={{maxWidth:"30rem"}}>{item.id.title.longTitle}</p>
                    <p style={{marginTop:"-1.5rem",color:"grey",fontSize:"0.7"}}>Seller: Retail</p>
                    <div className="d-flex flex-row "style={{marginTop:"-1rem"}}>
                      <p
                        className="text-decoration-line-through"
                        style={{
                          color: "grey",
                          fontSize: "0.9rem",
                          marginTop: "0.5rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        {item.id.price.mrp && '₹'+item.id.price.mrp }
                      </p>
                      <p
                        style={{
                          fontSize: "1.5rem",
                          color: "black",
                          marginLeft: "0.3rem",
                        }}
                      >
                        ₹{item.id.price.cost}
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "green",
                          marginTop: "0.5rem",
                          marginLeft: "0.5rem",
                        }}
                      >
                        {item.id.price.discount ? item.id.price.discount:null}
                       {item.id.price.discount&& <span style={{ margin: "0.4rem" }}>off</span>}
                      </p>
                    </div>

                  </div>
                  </div>


                  <div style={{marginLeft:"2rem"}} className="d-flex flex-row">
                      <div>
                      <button style={{border:"none",background:"transparent"}} onClick={()=>decreaseQuantity(item.id)}><RemoveIcon style={{border:"2px solid black",borderRadius:"50%",}}/></button>
                      <button style={{background:"transparent",width:"3rem",height:"2rem"}}>{item.id.quantity}</button>
                      <button style={{border:"none",background:"transparent"}} onClick={()=>increaseQuantity(item.id)}><AddIcon style={{border:"2px solid black",borderRadius:"50%"}}/></button>
                      </div>
                      <button
                      onClick={() => removeItemFromCart(item.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        fontWeight: "700",
                        margin: "0 0 0 4rem",
                      }}
                    >
                      REMOVE
                    </button>
                    </div>
                    <hr style={{color:"black",width:"100%"}}></hr>  

                </div>
              ))}
<Link to={'/prepaymentPage'}>
              <button  style={{color:"white",backgroundColor:"#FB641B",border:"none",margin:"0 0 3rem 30rem",width:"15rem",height:"3rem"}}>Place Order</button>
              </Link>
            </Box>

            <Box
              style={{
                width: "24rem",
                height:"20rem",
                backgroundColor: "white",
              }}
            >
              <div>
                <h6 style={{ fontWeight: "700",margin:"1rem 0 0 1.5rem" }}>PRICE DETAILS</h6>
                <hr style={{ color: "black" }}></hr>
                {/* {cartItems.map((item,index)=>( */}
                <div>
                  <div
                    className="d-flex flex-column"
                    style={{ padding: "0 1.5rem" }}
                  >
                    <div className="d-flex justify-content-between">
                    
                      <p >Price  ({cartItems.length>1? cartItems.length + ' items':cartItems.length + ' item'})
                      </p>
                      
                      
                      
                      <p >{price}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p class="">Discount</p>
                      <p class="" style={{ color: "green" }}>
                         {'₹' + discount }
                      </p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p class="">Delivery Charges</p>
                      <p class="" style={{ color: "green" }}>
                        Free
                      </p>
                    </div>

                    <hr style={{ color: "black" }}></hr>

                    <div className="d-flex justify-content-between">
                      <p class="">Total Amount</p>
                      <p class="">₹{price - discount}</p>
                    </div>
                  </div>

                  <hr style={{ color: "black",width:"86%" ,marginLeft:"1.6rem"}}></hr>

                 {discount? <p style={{color:"green",fontWeight:"600",margin:"-0.5rem 0 0 1rem"}}> You will save ₹{discount} on this order</p> :null}
                </div>
       
              </div>
            
            </Box>

          </div>
          <div>
          <hr
            style={{
              color: "black",
              border: "0.1px solid grey",
              width: "100%",
            }}
          ></hr>
          <div className="d-flex flex-row" style={{ margin: "4rem 0 4rem 0" }}>
            <p style={{ color: "grey", marginLeft: "3rem" }}>
              Policies: Returns | Policy | Terms of use | Security | Privacy |
              Infringement
            </p>
            <p style={{ margin: "0 20rem 0 4rem" }}>© 2007-2024 Flipkart.com</p>
            <p>Need help? Visit the Help Center or Contact Us</p>
          </div>
          </div>
        </div>
      ) : (
        <>
          <Box
            className="d-flex flex-column"
            style={{
              margin: "2rem 10rem ",
              backgroundColor: "white",
              width: "auto",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "4rem",
            }}
          >
            <h5 style={{ marginTop: "1rem" }}>My Cart</h5>
            <hr
              style={{
                color: "black",
                border: "4px solid grey",
                width: "100%",
              }}
            ></hr>

            <img
              src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
              style={{ width: "15rem", margin: "7rem", marginBottom: "1rem" }}
            />
            <p>Your Cart is empty</p>
          </Box>
          <hr
            style={{
              color: "black",
              border: "0.1px solid grey",
              width: "100%",
            }}
          ></hr>
          <div className="d-flex flex-row" style={{ margin: "4rem 0 10rem 0" }}>
            <p style={{ color: "grey", marginLeft: "3rem" }}>
              Policies: Returns | Policy | Terms of use | Security | Privacy |
              Infringement
            </p>
            <p style={{ margin: "0 20rem 0 4rem" }}>© 2007-2024 Flipkart.com</p>
            <p>Need help? Visit the Help Center or Contact Us</p>
          </div>
        </>
      )}
    </div>
  );
}
