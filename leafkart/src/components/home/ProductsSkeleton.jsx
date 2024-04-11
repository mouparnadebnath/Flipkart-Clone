import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
export default function ProductsSkeleton() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <Box
          className=""
          zIndex={0}
          style={{
            marginTop: "10px ",
            marginRight: "0",
            width: "100%",
            marginBottom: "5px",
          }}
          bgcolor={"white"}
        >
          <div className="d-flex m-2">
            <Skeleton
              width={"20rem"}
              height={"3rem"}
              highlightColor="#f5f5f5"
            />
            <div className="p-2 flex-shrink-1"></div>
          </div>
          <Divider aria-hidden="true" component="div" role="presentation" />

          <div style={{ position: "relative", overflow: "hidden",marginTop:"0.5rem" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="card p-2 m-2" style={{border:"none"}}>
                <Skeleton width={200} height={200} highlightColor="#f5f5f5" />

                <div
                  className="card-body text-center"
                  style={{ padding: "0", lineHeight: "0.5rem" }}
                >
                  <Skeleton width={32} height={5} highlightColor="#f5f5f5" />
                  <Skeleton width={70} height={20} highlightColor="#f5f5f5" />
                </div>
              </div>

              <div className="card p-2 m-2" style={{border:"none"}}>
                <Skeleton width={200} height={200} highlightColor="#f5f5f5" />

                <div
                  className="card-body text-center"
                  style={{ padding: "0", lineHeight: "0.5rem" }}
                >
                  <Skeleton width={32} height={5} highlightColor="#f5f5f5" />
                  <Skeleton width={70} height={20} highlightColor="#f5f5f5" />
                </div>
              </div>
              <div className="card p-2 m-2" style={{border:"none"}}>
                <Skeleton width={200} height={200} highlightColor="#f5f5f5" />

                <div
                  className="card-body text-center"
                  style={{ padding: "0", lineHeight: "0.5rem" }}
                >
                  <Skeleton width={32} height={5} highlightColor="#f5f5f5" />
                  <Skeleton width={70} height={20} highlightColor="#f5f5f5" />
                </div>
              </div>
              <div className="card p-2 m-2" style={{border:"none"}}>
                <Skeleton width={200} height={200} highlightColor="#f5f5f5" />

                <div
                  className="card-body text-center"
                  style={{ padding: "0", lineHeight: "0.5rem" }}
                >
                  <Skeleton width={32} height={5} highlightColor="#f5f5f5" />
                  <Skeleton width={70} height={20} highlightColor="#f5f5f5" />
                </div>
              </div>
              <div className="card p-2 m-2" style={{border:"none"}}>
                <Skeleton width={200} height={200} highlightColor="#f5f5f5" />

                <div
                  className="card-body text-center"
                  style={{ padding: "0", lineHeight: "0.5rem" }}
                >
                  <Skeleton width={32} height={5} highlightColor="#f5f5f5" />
                  <Skeleton width={70} height={20} highlightColor="#f5f5f5" />
                </div>
              </div>
              <div className="card p-2 m-2" style={{border:"none"}}>
                <Skeleton width={200} height={200} highlightColor="#f5f5f5" />

                <div
                  className="card-body text-center"
                  style={{ padding: "0", lineHeight: "0.5rem" }}
                >
                  <Skeleton width={32} height={5} highlightColor="#f5f5f5" />
                  <Skeleton width={70} height={20} highlightColor="#f5f5f5" />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
