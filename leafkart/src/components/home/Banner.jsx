import React from "react";
// import { banners } from '../../container/data'
import { Grid } from "@mui/material";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Banner({ set }) {
  return (
    <>
      <Grid lg={12} sm={12} md={12} xs={12} container>
        {set.map((data) => (
          <Grid lg={4} sm={4} md={12} xs={12}>
           { <img
              src={data.url}
              alt=""
              style={{ width: "100%", padding: "4px" }}
            /> 
            || <Skeleton width={520} height={280} highlightColor="#DEFBFF" />}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
