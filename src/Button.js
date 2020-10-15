import React, { Fragment } from "react";
import { Button } from "@material-ui/core";

import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
  },
  root2: {
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

const Buttonc = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <Button className={clsx(classes.root, classes.root2)}>I am Button</Button>
    </Fragment>
  );
};

export default withStyles(styles)(Buttonc);
