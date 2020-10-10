import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import Video from "./Video";

const Videoplayanddetails = () => {
  return (
    <Fragment>
      <Grid item>
        <Video />
      </Grid>
      <Grid item>
        <Typography variant="h6">
          My Offroad Nightmare in Albania Ep. 16 | Germany to Pakistan and India
          on Motorcycle BMW G310GS
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default Videoplayanddetails;
