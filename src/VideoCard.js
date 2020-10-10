import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter } from "react-router-dom";
const VideoCard = (props) => {
  const {history} = props;
  return (
    <Grid container direction="column">
      <Grid item>
        <img
          onClick={() => history.push('/play')}
          style={{ width: "100%",cursor:'pointer' }}
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="thumb"
        />
      </Grid>
      <Grid item container>
        <Grid item >
          <Avatar src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="channel-thumb" />
        </Grid>
        <Grid item style={{flexGrow:'2'}} >
          <Grid container xs={12} direction="column" style={{paddingLeft:'10px'}}>
            <Grid item><Typography >Pakistan Vs India</Typography></Grid>
            <Grid item><Typography noWrap={true}>K2</Typography></Grid>
            <Grid item><Typography noWrap={true}>9.4k views</Typography></Grid>
          </Grid>
        </Grid>
        <Grid item >
          <IconButton>
          <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(VideoCard) ;
