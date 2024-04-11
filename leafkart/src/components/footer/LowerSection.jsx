import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import seller from '../../assets/seller.svg'
import advertise from '../../assets/advertise.svg'
import gift from '../../assets/gift.svg'
import help from '../../assets/help.svg'
import copyright from '../../assets/copyright.svg'
export default function LowerSection() {
  const List = styled.ul`
    list-style: none;
  `;
  const A = styled.a`
    text-decoration: none;
    color: white;
    font-weight: bold;
  `;
  const Text = styled(Typography)`
    color: #979797;
  `;
  const Boxes = styled(Box)`
    margin-top: 2rem;
  `;
  const SpanStyle=styled.span`
  margin-bottom:2rem;
  margin-top:1.5rem;
  color:white
  `
  const ImgStyle=styled.img`
  margin-right:0.5rem
  `
  return (
    
    <div
      style={{ backgroundColor: "#2D2D2D", fontSize: "0.75rem" }}
    >
      <div className=" upper d-flex flex-row mb-9 justify-content-evenly">

      <Boxes style={{ marginTop: "2rem" }}>
        <List>
          <Text style={{ fontSize: "0.75rem", marginBottom: "10px" }}>
            ABOUT
          </Text>
          <li>
            <A href="/">Contact Us</A>
          </li>
          <li>
            <A href="/">About Us</A>
          </li>
          <li>
            <A href="/">Careers</A>
          </li>
          <li>
            <A href="/">Flipkart Stories</A>
          </li>
          <li>
            <A href="/">Press</A>
          </li>
        </List>
      </Boxes>

      <Boxes>
        <List>
          <Text style={{ fontSize: "0.75rem", marginBottom: "10px" }}>
            GROUP COMPANIES
          </Text>
          <li>
            <A href="/">Myntra</A>
          </li>
          <li>
            <A href="/">Flipkart Wholesale</A>
          </li>
          <li>
            <A href="/">Cleartrip</A>
          </li>
          <li>
            <A href="/">Shopsy</A>
          </li>
        </List>
      </Boxes>
      <Boxes>
        <List>
          <Text style={{ fontSize: "0.75rem", marginBottom: "10px" }}>
            HELP
          </Text>
          <li>
            <A href="/">Payments</A>
          </li>
          <li>
            <A href="/">Shipping</A>
          </li>
          <li>
            <A href="/">Cancellation & Returns</A>
          </li>
          <li>
            <A href="/">FAQ</A>
          </li>
          <li>
            <A href="/">Report Infringement</A>
          </li>
        </List>
      </Boxes>
      <Boxes>
        <List>
          <Text style={{ fontSize: "0.75rem", marginBottom: "10px" }}>
            CONSUMER POLICY
          </Text>
          <li>
            <A href="/">Cancellation & Returns</A>
          </li>
          <li>
            <A href="/">Terms of Use</A>
          </li>
          <li>
            <A href="/">security</A>
          </li>
          <li>
            <A href="/">Privacy</A>
          </li>
          <li>
            <A href="/">Sitemap</A>
          </li>
          <li>
            <A href="/">Grievence Redressal</A>
          </li>
          <li>
            <A href="/">EPR Compliance</A>
          </li>
        </List>
      </Boxes>

      <div
        style={{
          display: " flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderLeft: "1px solid grey",
            height: "13rem",
            margin: "25px 10px 10px 10px",
          }}
        ></div>
      </div>

      <Boxes>
        <div>
          <Text style={{ fontSize: "0.75rem", marginBottom: "10px" }}>
            Mail Us:
          </Text>
          <p style={{ color: "white", lineHeight: "1.1rem" }}>
            Flipkart Internet Private Limited,
            <div />
            Buildings Alyssa, Begonia &
            <div />
            Clove Embassy Tech Village,
            <div />
            Outer Ring Road,
            <div />
            Devarabeesanahalli Village,
            <div />
            Bengaluru, 560103,
            <div />
            Karnataka, India
          </p>
        </div>
        <div>
          <Text style={{ fontSize: "0.75rem", marginBottom: "10px" }}>
            Social:
          </Text>
          <span>
            <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.9331 21C17.9037 21 21.9331 16.9706 21.9331 12C21.9331 7.02944 17.9037 3 12.9331 3C7.96254 3 3.93311 7.02944 3.93311 12C3.93311 16.9706 7.96254 21 12.9331 21Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6831 8.25H15.1831C14.5864 8.25 14.0141 8.48705 13.5921 8.90901C13.1702 9.33097 12.9331 9.90326 12.9331 10.5V21"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.93311 13.5H15.9331"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </a>
            </span>

          <span style={{ margin: "0 0 0 1rem" }}>
            <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_183_20)">
                <path
                  d="M13.5436 10.6179L20.0971 3H18.5441L12.8537 9.61448L8.30887 3H3.06689L9.93964 13.0023L3.06689 20.9908H4.61994L10.6291 14.0056L15.4288 20.9908H20.6708L13.5432 10.6179H13.5436ZM11.4165 13.0904L10.7202 12.0944L5.17953 4.16911H7.56491L12.0363 10.5651L12.7326 11.5611L18.5448 19.8748H16.1595L11.4165 13.0908V13.0904Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_183_20">
                  <rect
                    x="3.06689"
                    y="3"
                    width="17.6039"
                    height="18"
                    rx="0.2"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            </a>
          </span>

          <span style={{ margin: "0 1rem 0 1rem" }}>
            <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g id="YoutubeLogo">
                <path
                  id="Vector"
                  d="M15.9331 12L11.4331 9V15L15.9331 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M3.18311 12C3.18311 14.7895 3.47131 16.4263 3.69039 17.2675C3.74896 17.4972 3.86142 17.7097 4.01847 17.8873C4.17552 18.0649 4.37263 18.2026 4.59347 18.2888C7.73193 19.4949 12.9331 19.4618 12.9331 19.4618C12.9331 19.4618 18.1342 19.4949 21.2727 18.2888C21.4936 18.2026 21.6907 18.0649 21.8477 17.8873C22.0048 17.7097 22.1172 17.4972 22.1758 17.2675C22.3949 16.4263 22.6831 14.7896 22.6831 12C22.6831 9.21039 22.3949 7.57368 22.1758 6.73248C22.1173 6.50273 22.0048 6.29025 21.8477 6.11264C21.6907 5.93502 21.4936 5.79738 21.2727 5.71113C18.1343 4.50506 12.9331 4.53818 12.9331 4.53818C12.9331 4.53818 7.73199 4.50506 4.5935 5.71112C4.37266 5.79737 4.17555 5.93501 4.0185 6.11262C3.86145 6.29024 3.74898 6.50272 3.69041 6.73246C3.47132 7.57366 3.18311 9.21039 3.18311 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            </a>
          </span>
        </div>
      </Boxes>

      <Boxes>
        <Text style={{ fontSize: "0.75rem", marginBottom: "10px" }}>
          Registered Office Address:
        </Text>
        <p style={{ color: "white", lineHeight: "1.1rem" }}>
          Flipkart Internet Private Limited,
          <div />
          Buildings Alyssa,
          <div />
          Begonia & Clove Embassy Tech Village,
          <div />
          Outer Ring Road,
          <div />
          Devarabeesanahalli Village,
          <div />
          Bengaluru, 560103, Karnataka, India
          <div />
          CIN: U51109KA2012PTC066107
          <div />
          Telephone: <a href="/" style={{textDecoration:"none"}}>044-45614700</a>
        </p>
      </Boxes>
      
      </div>
    <hr style={{color:"white"}}></hr>
    <div className="lower d-flex flex-row mb-9 justify-content-evenly">
      <SpanStyle><a href="/" style={{textDecoration:"none",color:"white"}}><ImgStyle src={seller} alt="" />Become a Seller</a></SpanStyle>
<SpanStyle><a href="/" style={{textDecoration:"none",color:"white"}}><ImgStyle src={advertise} alt="" />Advertise</a></SpanStyle>
<SpanStyle><a href="/" style={{textDecoration:"none",color:"white"}}><ImgStyle src={gift} alt="" />Gift Cards</a></SpanStyle>
<SpanStyle><a href="/" style={{textDecoration:"none",color:"white"}}><ImgStyle src={help} alt="" />Help Center</a></SpanStyle>
<SpanStyle><img src={copyright} alt="" />  2017-2024 Leafkart.com</SpanStyle>
<SpanStyle><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" /></SpanStyle>
    </div>
    </div>
    
  );
}
