import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function TotalPayable() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.id.quantity * item.id.price.mrp;
      discount += item.id.quantity * (item.id.price.mrp - item.id.price.cost);
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems]);
  return (
    <div style={{ backgroundColor: "white", width: "20rem", height: "15rem" }}>
      <h6 style={{ fontWeight: "700", margin: "1rem 0 0 1.5rem" }}>
        PRICE DETAILS
      </h6>
      <hr style={{ color: "black" }}></hr>

      <div>
        <div className="d-flex flex-column" style={{ padding: "0 1.5rem" }}>
          <div className="d-flex justify-content-between">
            <p>Price ({cartItems.length} item)</p>
            <p class="">₹{price - discount}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p class="">Delivery Charges</p>
            <p class="" style={{ color: "green" }}>
              Free
            </p>
          </div>

          <hr style={{ color: "black" }}></hr>

          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: "700" }}>Amount Payable</p>
            <p class="">₹{price - discount}</p>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-row"
        style={{ marginTop: "3rem", fontSize: "0.8rem", color: "gray" }}
      >
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png"
          alt=""
          width={"39px"}
          height={"39px"}
        />{" "}
        &nbsp;&nbsp;&nbsp;
        <p> Safe and secure payments. Easy Returns. 100% authentic products.</p>
      </div>
    </div>
  );
}
