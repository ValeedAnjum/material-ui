import React, { Fragment } from "react";
import Content from "../components/Content/Content";
import MUIDrawer from "../components/Drawer/Drawer";

const Home = () => {
  return (
    <Fragment>
      <MUIDrawer />
      <Content />
    </Fragment>
  );
};

export default Home;
