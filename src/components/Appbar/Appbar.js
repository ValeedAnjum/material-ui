import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "./YoutubeIocn";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import React from "react";
const useStyles = makeStyles((theme) => {
  return {
    Input: {
      flexGrow: "1",
      border: "1px solid rgba(0,0,0,0.2)",
      fontSize: "22px",
      paddingLeft: "12px",
      outline: "none",
    },
    InputButton: {
      border: "1px solid rgba(0,0,0,0.2)",
      borderRadius: "0",
      borderLeft: "0",
    },
  };
});
const Appbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        <Grid container>
          <Grid item sm={3} container>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <div style={{ width: "80px" }}>
              <YouTubeIcon />
            </div>
          </Grid>

          <Grid item sm={5}>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Search"
                className={classes.Input}
              />
              <Button className={classes.InputButton}>
                <SearchIcon />
              </Button>
            </div>
          </Grid>

          <Grid item sm={4} container justify="flex-end">
            <IconButton>
              <VideoCallIcon />
            </IconButton>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Avatar>
              <IconButton>VA</IconButton>
            </Avatar>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
