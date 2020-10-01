import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Drawer,
  Divider,
} from "@material-ui/core";
import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles, useTheme } from "@material-ui/core";

const drawerWith = "240px";
const useStyles = makeStyles((theme) => ({
  appbar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWith})`,
      marginLeft: drawerWith,
    },
  },
  menuIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appbarLeftOptions: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  drawerWidth: {
    width: drawerWith,
  },
  belowAppbar: theme.mixins.toolbar,
  content: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "260px",
    },
  },
}));
const Layout = (props) => {
  const [anchorEl, setanchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const menuOpen = (event) => {
    setanchorEl(event.target);
  };
  const menuClose = () => {
    setanchorEl(null);
  };
  const closeMenu = () => {
    setMobileOpen(false);
    console.log("c");
  };
  const openMenu = () => {
    setMobileOpen(true);
    console.log("o");
  };
  const ValeedAnjum = (event) => {
    const { history } = props;
    console.log(event.target.getElementsByTagName("p")[0]);
    // document.getElementsByTagName('p')[0]
    // history.push("/");
  };
  const Appbar = (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <div className={classes.appbarLeftOptions}>
          <IconButton
            color="inherit"
            onClick={openMenu}
            className={classes.menuIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography>Valeed Anjum Siddiqui</Typography>
        </div>
        <div>
          <IconButton color="inherit" onClick={menuOpen}>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className="dropdown">
          <Menu
            open={Boolean(anchorEl)}
            onClose={menuClose}
            anchorEl={anchorEl}
          >
            <MenuItem
              onClick={() => {
                setanchorEl(null);
                props.history.push("Valeed Anjum");
              }}
            >
              <IconButton>
                <PersonIcon />
              </IconButton>
              <Typography variant="h6">Valeed Anjum</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setanchorEl(null);
                props.history.push("Logout");
              }}
            >
              <IconButton>
                <VpnKeyIcon />
              </IconButton>
              <Typography variant="h6">Logout</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setanchorEl(null);
                props.history.push("Profile");
              }}
            >
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
              <Typography variant="h6">Profile</Typography>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );

  const desktopDrawer = (
    <Hidden xsDown implementation="css">
      <Drawer
        open
        variant="permanent"
        classes={{
          paper: classes.drawerWidth,
        }}
      >
        <div className={classes.belowAppbar} />
        <Divider />
        <List>
          {["Valeed Anjum", "Graphs", "VPN", "Tools", "About", "Contact"].map(
            (text, index) => (
              <ListItem
                button
                key={index}
                onClick={() => props.history.push(text)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <PersonIcon /> : <VpnKeyIcon />}
                </ListItemIcon>
                <ListItemText>
                  <Typography>{text}</Typography>
                </ListItemText>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Hidden>
  );

  const mobileDrawer = (
    <Drawer
      open={mobileOpen}
      variant="temporary"
      onClose={closeMenu}
      classes={{ paper: classes.drawerWidth }}
    >
      <div className={classes.belowAppbar} />
      <Divider />
      <List>
        {["Valeed Anjum", "Graphs", "VPN", "Tools", "About", "Contact"].map(
          (text, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                props.history.push(text);
                setMobileOpen(false);
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <PersonIcon /> : <VpnKeyIcon />}
              </ListItemIcon>
              <ListItemText>
                <Typography>{text}</Typography>
              </ListItemText>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
  return (
    <div>
      {Appbar}
      {desktopDrawer}
      {mobileDrawer}
      <main className={classes.content}>
        <Switch>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route
            path="/Valeed Anjum"
            exact
            render={() => <h1>Valeed Anjum Siddiqui</h1>}
          />
          <Route path="/Graphs" exact render={() => <h1>Graphs</h1>} />
          <Route path="/VPN" exact render={() => <h1>VPN</h1>} />
          <Route path="/Tools" exact render={() => <h1>Tools</h1>} />
          <Route path="/About" exact render={() => <h1>About</h1>} />
          <Route path="/Contact" exact render={() => <h1>Contact</h1>} />
          <Route path="/Logout" exact render={() => <h1>Logout</h1>} />
          <Route path="/Profile" exact render={() => <h1>Profile</h1>} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(Layout);
