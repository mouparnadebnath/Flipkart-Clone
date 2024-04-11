import React, { useState } from "react";
import { Box, TextField, } from "@mui/material";
import { Link } from "react-router-dom";
const PaymentOptions = () => {
  const url =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif";
  const [selectedOption, setSelectedOption] = useState(null);
  const [subbuttonSelectedOption, setSubbuttonSelectedOption] = useState({});

  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
    setSubbuttonSelectedOption({});
  };

  const subButtonhandleOptionChange = (event) => {
    const option = parseInt(event.target.value);
    setSubbuttonSelectedOption({ ...subbuttonSelectedOption, [option]: true });
  };

  return (
    <div style={{ marginBottom: "30rem" }}>
      <Box
        className="d-flex flex-row"
        style={{
          backgroundColor: "#287FF0",
          width: "55rem",
          height: "3rem",
          padding: "0.8rem",
        }}
      >
        <span
          style={{
            width: "1.5rem",
            height: "1.5rem",
            backgroundColor: "white",
            padding: "0 0 12px 8px",
          }}
        >
          4
        </span>
        <h4
          style={{
            color: "white",
            marginLeft: "1rem",
            marginBottom: "1rem",
            padding: "0",
          }}
        >
          PAYMENT OPTIONS
        </h4>
      </Box>

      <Box>
        <div
          className="form-check"
          style={{
            width: "55rem",
            backgroundColor: "white",
            padding: "1rem 0 2rem 2rem ",
          }}
        >
          <div style={{ marginLeft: "1rem" }}>
            <input
              className="form-check-input"
              type="radio"
              name="paymentOptions"
              id="flexRadioDefault1"
              value="1"
              checked={selectedOption === 1}
              onChange={handleOptionChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <img src={url} style={{ width: "1.5rem" }} /> UPI
            </label>
            {selectedOption === 1 && (
              <div className="accordion-content">
                {/* Option 1 sub-options */}
                <h6 style={{ fontWeight: "600", margin: "1rem 0 1rem 0" }}>
                  CHOOSE AN OPTION
                </h6>
                <div className="form-check" style={{ marginBottom: "1rem" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`subOptions-${selectedOption}`}
                    id="flexRadioDefaultsub1"
                    value="1"
                    checked={subbuttonSelectedOption[1]} 
                    onChange={subButtonhandleOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefaultsub1"
                  >
                    PhonePe
                  </label>
                  {subbuttonSelectedOption[1] && (
                    <div className="accordion-content">
                      <Link to={'/paymentForm'}>
                      <button
                        style={{
                          margin: "0.5rem 0 0 4rem",
                          width: "13rem",
                          height: "3.5rem",
                          backgroundColor: "#FB641B",
                          border: "none",
                          color: "white",
                          fontSize: "1.3rem",
                          fontWeight: "500",
                        }}
                       
                      >
                        Continue
                      </button>
                      </Link>
                    </div>
                  )}
                </div>
                {/* Option 2 sub-options */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`subOptions-${selectedOption}`}
                    id="flexRadioDefaultsub2"
                    value="2"
                    checked={subbuttonSelectedOption[2]}
                    onChange={subButtonhandleOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefaultsub2"
                  >
                    Your UPI ID
                  </label>
                  {subbuttonSelectedOption[2] && (
                    <div className="accordion-content" style={{margin:"1rem 0 0 0"}}>
                      <TextField
                        id="input-with-icon-textfield"
                        InputProps={{
                          endAdornment: (
                            <a
                              href="/"
                              style={{
                                textDecoration: "none",
                                color: "#227CEB",
                                fontWeight: "300",
                                fontSize:"1rem"
                              }}
                            >
                              VERIFY
                            </a>
                          ),
                        }}
                        label="Enter UPI ID"
                        variant="filled"
                        style={{ border: "1px solid silver",width:"20rem" }}
                        sx={{
                          "& .MuiInputBase-root": {
                            backgroundColor: "white",
                            outline: "none",
                          },
                          "&:focus": {
                            "& .MuiOutlinedInput-root": {
                              outlineColor: "none",
                            },
                            borderColor: "blue",
                          },

                          "& .MuiFilledInput-underline": {
                            backgroundColor: "transparent !important",
                            "&:before": {
                              content: '" "',
                              display: "block",
                              width: 0,
                              height: 0,
                              pointerEvents: "none",
                            },
                          },
                        }}
                      />

                      <button style={{backgroundColor:"grey",border:"none",color:"white",width:"14rem" ,height:"3.5rem",marginLeft:"1rem",cursor:"not-allowed"}}>Pay ₹</button>
                    </div>
                 
                )}
                </div>
                <p style={{color:"grey",fontWeight:"500",marginTop:"1rem"}}>Pay by any UPI app</p>
              </div>
            )}
          </div>
        </div>
 
        <div
          className="form-check"
          style={{ width: "55rem", backgroundColor: "white" ,padding:"2rem 0 2rem 1.5rem"}}
        >
          <div style={{marginLeft:"1.5rem"}}>
          <input
            className="form-check-input"
            type="radio"
            name="paymentOptions"
            id="flexRadioDefault2"
            value="2"
            checked={selectedOption === 2}
            onChange={handleOptionChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <img src={url} style={{ width: "1.5rem" }} /> Wallets
          </label>
          {selectedOption === 2 && (
            <div className="accordion-content">
              {/* Option 1 sub-options */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`subOptions-${selectedOption}`} 
                  id="flexRadioDefaultsub1"
                  value="1"
                  checked={subbuttonSelectedOption[1]} 
                  onChange={subButtonhandleOptionChange}
                  style={{cursor:"not-allowed"}}
                  disabled
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefaultsub1"
                >
                  PhonePe Wallet
                </label>
                <div>
                Coming Soon
                </div>
              </div>
            </div>
          )}
          </div>
        </div>


        <div
          className="form-check"
          style={{ width: "55rem", backgroundColor: "white" ,padding:"1rem 0 1rem 1.5rem"}}
        >
          <div style={{marginLeft:"1.5rem"}}>
          <input
            className="form-check-input"
            type="radio"
            name="paymentOptions"
            id="flexRadioDefault3"
            value="3"
            checked={selectedOption === 3}
            onChange={handleOptionChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
         Credit / Debit / ATM Card
          </label>
          <p style={{color:"grey",fontWeight:"500",marginTop:"0.6rem"}}>Add and secure cards as per RBI guidlines</p>
          </div>
        </div>


        <div
          className="form-check"
          style={{ width: "55rem", backgroundColor: "white" ,padding:"1rem 0 1rem 1.5rem"}}
        >
          <div style={{marginLeft:"1.5rem"}}>
          <input
            className="form-check-input"
            type="radio"
            name="paymentOptions"
            id="flexRadioDefault4"
            value="4"
            checked={selectedOption === 4}
            onChange={handleOptionChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
       Net Banking
          </label>
          <p style={{color:"grey",fontWeight:"500",marginTop:"0.6rem"}}>This instrument has low success, use UPI or cards for better experience</p>
          </div>
        </div>

        <div
          className="form-check"
          style={{ width: "55rem", backgroundColor: "white" ,padding:"1rem 0 1rem 1.5rem"}}
        >
          <div style={{marginLeft:"1.5rem"}}>
          <input
            className="form-check-input"
            type="radio"
            name="paymentOptions"
            id="flexRadioDefault5"
            value="5"
            checked={selectedOption === 5}
            onChange={handleOptionChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
       EMI (Easy Installment)
          </label>
          </div>
        </div>

        <div
          className="form-check"
          style={{ width: "55rem", backgroundColor: "white" ,padding:"1rem 0 1rem 1.5rem"}}
        >
          <div style={{marginLeft:"1.5rem"}}>
          <input
            className="form-check-input"
            type="radio"
            name="paymentOptions"
            id="flexRadioDefault6"
            value="6"
            checked={selectedOption === 6}
            onChange={handleOptionChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
   Cash on delivery
          </label>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default PaymentOptions;
