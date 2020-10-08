import {
  AppBar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  const [menuMenuPosition, setmenuMenuPosition] = useState(null);

  const handleMenuPosistion = () => {
    // console.log(document.getElementById("menuMenuPos"));
    setmenuMenuPosition(document.getElementById("menuMenuPos"));
  };
  return (
    <Fragment>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <div style={{ flexGrow: "1" }}>
            <Grid container style={{ border: "1px solid red" }}>
              <Grid item>
                <IconButton onClick={handleMenuPosistion}>
                  <MenuIcon color="action" />
                </IconButton>
              </Grid>
              <Grid item style={{ border: "1px solid red" }}>
                <div style={{ border: "1px solid blue" }} id="menuMenuPos" />
              </Grid>
            </Grid>
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
          <IconButton>
            <AccountCircle color="action" />
          </IconButton>

          <Menu
            open={Boolean(menuMenuPosition)}
            anchorEl={menuMenuPosition}
            onClose={() => setmenuMenuPosition(null)}
            style={{ padding: "0" }}
          >
            <List style={{ width: "300px", padding: "0" }}>
              <ListItem button onClick={() => setmenuMenuPosition(null)}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText>
                  <Typography>Home</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Menu>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default App;
