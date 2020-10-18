import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiButton-root": {
      fontSize: "1rem",
    },
    ".MuiButton-textPrimary": {
      color: "red",
    },
  },
})(() => null);

export default function Buttonc() {
  return (
    <React.Fragment>
      <Button color="primary">font-size: 1rem</Button>

      <GlobalCss />
      <Button color="primary">font-size: 1rem</Button>
      <Button color="primary">font-size: 2rem</Button>
    </React.Fragment>
  );
}
