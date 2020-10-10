import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import VideoCard from "./VideoCard";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: "75px",
      marginLeft: "240px",
      width: "calc(100% - 270px);",
    },
  };
});
const Content = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <Grid container  spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
          <Grid
            item
            xs={12}
            sm={3}
            key={num}
          >
            <VideoCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Content;
