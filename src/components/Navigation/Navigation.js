import React, { Fragment } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "./YouTubeIcon";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
  const { history } = props;
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
          <div
            style={{ width: "80px", cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            <YouTubeIcon />
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default withRouter(Navigation);
