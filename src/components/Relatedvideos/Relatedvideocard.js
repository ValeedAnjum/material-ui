import { Grid, Hidden, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const timiThumStyle = {
  position: "absolute",
  bottom: "0",
  right: "10px",
  padding: "0 10px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "2px",
};
const Relatedvideocard = () => {
  return (
    <div style={{ display: "flex", marginBottom: "5px", cursor: "pointer" }}>
      <Grid item xs={12} sm={6} style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="thumb"
        />
        <p style={timiThumStyle}>6:23</p>
      </Grid>
      <Hidden xsDown>
        <Grid
          item
          sm={6}
          container
          direction="column"
          style={{ paddingLeft: "5px" }}
        >
          <Grid item>
            <Typography
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                lineHeight: "1",
                padding: "1px",
              }}
            >
              Monkeys react to magic
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{
                color: "#949393",
                fontWeight: "600",
                fontSize: "0.7rem",
                padding: "1px",
              }}
            >
              It’s Casper
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "0.6rem", color: "#949393", padding: "1px" }}
            >
              10K view . 10 hours ago
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default Relatedvideocard;
