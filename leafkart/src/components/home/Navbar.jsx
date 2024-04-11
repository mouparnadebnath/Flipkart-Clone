import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { navbarImageData } from "../../container/data";
import "../../App.css";
export default function Navbar() {
  const OuterBoxStyle = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "5px 130px 5px 130px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xl")]: {
      margin:"5px 30px 2px 30px",
      overflow:"scroll"
    },
    [theme.breakpoints.down("lg")]: {
      overflow: "scroll",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "5px 70px 5px 70px",
    },
  }));

  const InnerBoxStyle = styled(Box)(({ theme }) => ({
    padding: "12px 8px",
    [theme.breakpoints.down("xl")]: {
      
    },
  }));
  const Ul = styled("object")(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }));
  const UlStyle = styled("at")(({ theme }) => ({
    textDecoration: "none",
    color: "black",
    display: "inline-block",
    margin: "0.25rem",
    width: "13rem",
    fontSize:'0.8rem',
    lineHeight:"2rem",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }));
  const Image = styled("img")(({ theme }) => ({
    width:"64px",
    [theme.breakpoints.down("md")]: {
      width: "40px",
    },
  }));
  const TextFont=styled('span')(({theme})=>({
    fontFamily:
    "inter_semi_bold, fallback-inter_semi_bold, Arial, sans-serif",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      fontSize:"9px"
    },
   
  }))
  const Svg=styled("svg")(({theme})=>({
    stroke: "black",
    strokeWidth: " 1px",
    marginLeft: "-4px",
    marginTop: "4rem",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }))
  return (
    <div style={{border:"2px solid #eeeeee",backgroundColor:"#eeeeee"}}>
    <div style={{margin:"10px"}}>
    <Box  bgcolor={"white"}>
      <OuterBoxStyle>
        {navbarImageData.map((data, index) => (
          <InnerBoxStyle key={index} className="">
            <div className="dropdown">
              <button
                className="btn  "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "none" }}
              >
                <Image src={data.url} alt="image"  />
                <TextFont
                >
                  {data.text}
                </TextFont>
              </button>
              {data.subItems && (
                <>
                  <Ul className="dropdown-menu ">
                    {(data?.subItems || []).map((item) => (
                      <>
                        <UlStyle
                          href="#"
                        >
                          {item}
                        </UlStyle>
                      </>
                    ))}
                  </Ul>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    className="bii bi-chevron-down"
                    viewBox="0 0 16 16"
                    
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </Svg>
                </>
              )}
            </div>
          </InnerBoxStyle>
        ))}
      </OuterBoxStyle>
    </Box>
    </div>
    </div>
  );
}
