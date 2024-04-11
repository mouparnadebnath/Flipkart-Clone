import React ,{useState} from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { featuredBrands } from "../../container/data";

export default function BrandsAd() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : featuredBrands.length - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex < featuredBrands.length - 1 ? prevIndex + 1 : 0));
    };
  return (
    <div style={{margin:"0 5px 0 5px"}}>
        <Box className="" zIndex={0} style={{ marginTop: "10px",marginRight:"0"}} bgcolor={"white"} border={"1px solid #DEDEDE"} borderRadius={"4px"}>
<div className="d-flex">
  <h3 className="p-2 w-100" style={{marginLeft:"1rem"}}>Featured Brands</h3>
</div>


<div style={{ position: "relative", overflow: "hidden" }}>
<div className="" style={{display:"flex",flexDirection:"row",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentIndex * (216 + 16)}px)` }} >
          {featuredBrands.map((data)=>(
        
            <img src={data.url} className="" alt="..." style={{width: "100%", margin: "", display: "block", opacity: "1", aspectRatio: "75 / 46", padding: "4px 4px 4px 4px",
              height: "100%",}} />
          
  
  ))}
  </div>
  <IconButton onClick={handlePrev} style={{ position: "absolute", top: "50%", left: "0" }}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleNext} style={{ position: "absolute", top: "50%", right: "0" }}>
          <ArrowForwardIcon />
        </IconButton>
        </div>
    </Box>
    </div>
  )
}
