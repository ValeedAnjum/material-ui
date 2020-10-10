import { Grid, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import Relatedvideos from "./Relatedvideos";
import Videoplayanddetails from "./Videoplayanddetails";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: "75px",
      "&.MuiSwitch-switchBase": {
        color: "red",
      },
    },
  };
});
const Play = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid className={classes.root} justify="center" container>
      {/* Videocard and comments */}
      <Grid
        item
        container
        sm={6}
        xs={12}
        direction="column"
        style={{ padding: "15px" }}
      >
        <Videoplayanddetails switchStyle={classes.switchStyle} />
      </Grid>
      {/* Videocard and comments */}
      <Grid
        item
        sm={3}
        xs={12}
        container
        direction="column"
        style={{ padding: "15px" }}
      >
        <Relatedvideos />
      </Grid>
    </Grid>
  );
};

export default Play;
