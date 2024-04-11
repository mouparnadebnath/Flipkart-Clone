import React from 'react'
import { sliderImageData } from '../../container/data'
import { Carousel} from 'react-bootstrap'
import { Box,styled } from '@mui/material'
export default function Slide() {

  const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

    return (
      <div style={{border:"2px solid #eeeeee",backgroundColor:"#eeeeee"}}>
      <div style={{margin:"0 10px"}}>
  <Carousel >
      {sliderImageData.map((item, index) => (
        <Carousel.Item  key={index}>
          <img
            className="d-block w-100"
            src={item.url}
            alt={`Slide ${index +1}`}
          />
        </Carousel.Item>
      ))}
   </Carousel>
   
   <Box style={{marginLeft:"5px",marginRight:"5px"}}>
<Image src='https://rukminim1.flixcart.com/fk-p-flap/1510/140/image/be895694c0ed175b.jpg?q=20' />
   </Box>
   </div>
   </div>

    )
}
