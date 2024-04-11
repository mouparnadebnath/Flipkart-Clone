import axios from "axios";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    name: " ",
    amount: 0,
    number: "",
    MUID: "",
    transactionID: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/payment",
        formData
      );
      setFormData({
        ...formData,
        MUID: response.data.merchantUserId,
        transactionID: response.data.merchantTransactionId,
      });
      console.log("Payment successful:", response.data);
    } catch (error) {
      console.error("Payment error:", error.message);
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const Button = styled("button")(({ theme }) => ({
    "&:hover": {
      backgroundColor: "whitesmoke",
      color: "black",
    },
  }));
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6c3c8c",
          margin: "3rem 40rem ",
          border: "none",
          borderRadius: "20px",
          padding: "1rem",
        }}
      >
        <form
          onSubmit={handlePayment}
          style={{
            width: "12rem",
            color: "white",
            fontWeight: "600",
            opacity: "1",
            cursor: "visible",
            visibility: "visible",
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoFocus="true"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "white",
              color: "black",

              border: "none",
              marginLeft: "2.3rem",
              fontWeight: "600",
              width: "8rem",
            }}
          >
            Pay Now
          </Button>
        </form>
      </div>
    </>
  );
}
