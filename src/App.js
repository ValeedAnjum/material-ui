import React, { Fragment } from "react";
import Appbar from "./Appbar";
import LeftMenu from "./Drawer";

const App = () => {
  return (
    <Fragment>
      <Appbar />
      <LeftMenu />
    </Fragment>
  );
};

export default App;
