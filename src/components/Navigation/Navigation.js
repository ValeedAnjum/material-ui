import React, { Fragment } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "./YouTubeIcon";

const Navigation = () => {
  return (
    <Fragment>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div style={{ width: "80px" }}>
            <YouTubeIcon />
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navigation;
