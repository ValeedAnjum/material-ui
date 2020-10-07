import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  const [anchorEl, setanchorEl] = useState(null);

  const menuOpen = (event) => {
    setanchorEl(event.target);
  };
  const menuClose = () => {
    setanchorEl(null);
  };
  return (
    <Fragment>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <div style={{ flexGrow: "1" }}>
            <IconButton onClick={menuOpen}>
              <MenuIcon color="action" />
            </IconButton>
          </div>
          <IconButton>
            <VideoCallIcon color="action" />
          </IconButton>
          <IconButton>
            <AppsIcon color="action" />
          </IconButton>
          <IconButton>
            <NotificationsIcon color="action" />
          </IconButton>
          <IconButton onClick={menuOpen}>
            <AccountCircle color="action" />
          </IconButton>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={menuClose}
          >
            <MenuItem>
              <Typography>Valeed Anum</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default App;
