import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Box } from "@mui/material";
export default function Skeletons() {
  return (
    <div className="d-flex flex-row" style={{ width: "auto", margin: "1rem 0 3rem 1rem" }}>
      <div className="d-flex flex-column m-3" >
        <div style={{ border: "0.1px solid #eeeeef", padding: "1rem" }}>
          <div style={{ marginLeft: "24rem", zIndex: "1" }}></div>
          <Skeleton width={400} height={450} highlightColor="#f5f5f5" />
        </div>

        <div className="d-flex justify-content-between">
          <Skeleton
            width={"13.2rem"}
            height={"3.5rem"}
            highlightColor="#f5f5f5"
          />

          <Skeleton
            width={"13.2rem"}
            height={"3.5rem"}
            highlightColor="#f5f5f5"
          />
        </div>
      </div>

      <div className="mx-5 my-5">
        <Skeleton count={1} highlightColor="#f5f5f5" width={'40rem'} />
        <div className="d-flex " style={{ margin: "0 0 1rem 0" }}>
          <Box>
            <Skeleton count={1} highlightColor="#f5f5f5" />
          </Box>
          <Box>
            <Skeleton count={1} highlightColor="#f5f5f5" width={"30rem"} />
          </Box>
          <Box>
            <Skeleton count={1} highlightColor="#f5f5f5" width={"1rem"} />
          </Box>
          <Box>
            <Skeleton count={1} highlightColor="#f5f5f5" width={"1rem"} />
          </Box>
        </div>
       


      </div>
    </div>
  )
}
