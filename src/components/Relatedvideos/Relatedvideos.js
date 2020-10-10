import { Grid, Switch, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Relatedvideocard from "./Relatedvideocard";

const useStyles = makeStyles(() => {
  return {
    switch: {
      "& > .MuiSwitch-switchBase": {
        color: "#909090",
      },
      "& > .MuiSwitch-track": {
        backgroundColor: "#bab7b7",
      },
    },
  };
});
const Relatedvideos = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container>
        <Grid
          item
          style={{ flexGrow: "2", display: "flex", alignItems: "center" }}
        >
          <Typography style={{ flexGrow: "1" }}>Up next</Typography>
          <Typography>AUTOPLAY</Typography>
        </Grid>
        <Grid item>
          <Switch checked={false} className={classes.switch}></Switch>
        </Grid>
      </Grid>
      <Grid item container>
        {[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ].map((num) => (
          <Relatedvideocard key={num} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Relatedvideos;
