import React from 'react'
import PaymentOptions from './PaymentOptions'
import TotalPayable from './TotalPayable'
export default function PrepaymentPage() {
  return (
    <>
    <div className='d-flex justify-content-between' style={{justifyContent:'center',margin:"2rem 9rem 2rem 9rem"}}>
        <PaymentOptions/>
        <TotalPayable/>
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
        </>
  )
}
