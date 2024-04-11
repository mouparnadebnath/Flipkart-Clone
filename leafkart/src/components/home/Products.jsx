import React ,{useState} from "react";
import { Box ,Divider,styled} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import ProductsSkeleton from "./ProductsSkeleton";
export default function Products({products,advertisementImage,title}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
const Image=styled('img')(({theme})=>({
  [theme.breakpoints.down('lg')]:{
    height:"200px"
  },
  [theme.breakpoints.down('md')]:{
display:"none"  }
}))
const UrlImage=styled('div')(({theme})=>({
  [theme.breakpoints.down('md')]:{
   width:"150px",
   height:"150px"
  }

}))
const Cardstyle=styled('div')(({theme})=>({
  [theme.breakpoints.down('md')]:{
   width:"100px",
   height:"10rem"
  }

}))
const Imgstyle=styled('img')(({theme})=>({
  [theme.breakpoints.down('md')]:{
   width:"75px",
   height:"75px"
  }

}))
  return (
    <>
    {<div className="row" style={{margin:"0 0 10px"}}>

      {advertisementImage===true?
      
      <div className="d-flex flex-row justify-content-between">
      
    <Box className="" zIndex={0} style={{ marginTop: "10px ",marginRight:"0",width:"85%",marginBottom:"5px"}} bgcolor={"white"} border={"1px solid #DEDEDE"} borderRadius={"4px"}>
<div className="d-flex">
  <h3 className="p-2 w-100" style={{marginLeft:"1rem"}}>Deals Of the Day</h3>
  <div className="p-2 flex-shrink-1"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#009A05"    class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginRight:"1.5rem"}}>
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
</svg></div>
</div>
<Divider aria-hidden="true" component="div" role="presentation"/>

<div style={{ position: "relative", overflow: "hidden" }}>

<motion.UrlImage  style={{display:"flex",flexDirection:"row",
            }} 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 100 + "%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            
            >
          {products.map((data)=>(
            <Link to={`product/${data.id}`} style={{textDecoration:"none"}}>
        <Cardstyle
          className="card p-2"
          key={data.id}
          style={{
            width: "216px",
            height: "16rem",
            marginTop: "8px",
            marginBottom: "8px",
            marginLeft: "8px",
            marginRight:"8px",
            flex:"0 0 auto"
          }}
        >
            <Imgstyle src={data.url} className="card-img-top" alt="..." style={{width: "100%", margin: "auto", display: "block", objectFit: "contain", opacity: "1", aspectRatio: "1 / 1", padding: "4px 4px 4px 4px",
              height: "auto",}} />
          
          <div className="card-body text-center" style={{padding:"0",lineHeight:"0.5rem"}}>
            <p>{data.title.shortTitle}</p>
            <p style={{color:"#75BB00"}}><b>{data.discount}</b></p>
          </div>
          </Cardstyle>
          </Link>
  
  ))}
  </motion.UrlImage>
  <IconButton onClick={handlePrev} style={{ position: "absolute", top: "50%", left: "0" }} disabled={currentIndex === 0}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleNext} style={{ position: "absolute", top: "50%", right: "0" }} disabled={currentIndex === products.length - 1}>
          <ArrowForwardIcon />
        </IconButton>
        </div>
    </Box>

<Box  marginTop={"10px"}>
 <a href=""> <Image src="https://rukminim2.flixcart.com/fk-p-flap/209/390/image/aa11f8a2c48ca565.png?q=20" alt="" srcset=""  /></a>
</Box></div>:

<Box className="" zIndex={0} style={{ marginTop: "10px",marginRight:"10px"}} bgcolor={"white"} border={"1px solid #DEDEDE"} borderRadius={"4px"}>
<div className="d-flex">
  <h3 className="p-2 w-100" style={{marginLeft:"1rem"}}>{title}</h3>
  <div className="p-2 flex-shrink-1"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#009A05"    className=" bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginRight:"1.5rem"}}>
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
</svg></div>
</div>
<Divider aria-hidden="true" component="div" role="presentation"/>

<div style={{ position: "relative", overflow: "hidden" }}>
<motion.div className="" style={{display:"flex",flexDirection:"row",
           }} 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 100 + "%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            >

          {products.map((data,index)=>(
     <Link to={`product/${data.id}`} style={{textDecoration:"none"}}>

        <div
          className="card p-2"
          key={index}
          style={{
            width: "216px",
            height: "16rem",
            marginTop: "8px",
            marginBottom: "8px",
            marginLeft: "8px",
            marginRight:"8px",
            flex:"0 0 auto"
          }}
        >
            <img src={data.url} className="card-img-top" alt="..." style={{width: "100%", margin: "auto", display: "block", objectFit: "contain", opacity: "1", aspectRatio: "1 / 1", padding: "4px 4px 4px 4px",
              height: "auto",}} />
          
          <div className="card-body text-center" style={{padding:"0",lineHeight:"0.5rem"}}>
            <p>{data.title.shortTitle}</p>
            <p style={{color:"#75BB00"}}><b>{data.discount}</b></p>
          </div>
          </div>
  </Link>
  ))}
  </motion.div>
  <IconButton onClick={handlePrev} style={{ position: "absolute", top: "50%", left: "0" }} disabled={currentIndex === 0}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleNext} style={{ position: "absolute", top: "50%", right: "0" }} disabled={currentIndex === products.length - 1}>
          <ArrowForwardIcon />
        </IconButton>
        </div>
    </Box>
    }



    </div>||<ProductsSkeleton/>}
    </>
  );
}
