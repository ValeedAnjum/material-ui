import React, { Fragment } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import RestoreIcon from "@material-ui/icons/Restore";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => {
  //   console.log(theme.mixins.toolbar.minHeight);
  return {
    marginTopDrawer: {
      "&>.MuiPaper-root": {
        marginTop: "64px",
        border: "none",
      },
      "&.MuiTypography-body1": {
        fontSize: "15px",
      },
    },
  };
});

const options = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "Trending", icon: <WhatshotIcon /> },
  { text: "Subscriptions", icon: <SubscriptionsIcon /> },
  { text: "Library", icon: <VideoLibraryIcon /> },
  { text: "History", icon: <RestoreIcon /> },
  { text: "Your videos", icon: <OndemandVideoIcon /> },
  { text: "Watch Later", icon: <WatchLaterIcon /> },
  { text: "Liked videos", icon: <ThumbUpAltIcon /> },
  { text: "Show more", icon: <KeyboardArrowDownIcon /> },
];
const MUIDrawer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Fragment>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.marginTopDrawer}
      >
        <List style={{ width: "220px" }}>
          {options.map((option, index) => {
            const { text, icon } = option;
            return (
              <Fragment>
                <ListItem button key={index}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{text}</ListItemText>
                </ListItem>
                {index === 2 ? <Divider /> : null}
              </Fragment>
            );
          })}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default MUIDrawer;
