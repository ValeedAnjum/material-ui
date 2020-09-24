import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const Home = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const tabNameToIndex = {
    0: "about",
    1: "contact",
  };
  const indexToTabName = {
    about: 0,
    contact: 1,
  };
  const [selectTab, setselectTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setselectTab(newValue);
  };
  return (
    <Fragment>
      <AppBar position="static">
        <Tabs value={selectTab} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Contact Us" />
        </Tabs>
      </AppBar>
      {selectTab === 0 && <About />}
      {selectTab === 1 && <Contact />}
    </Fragment>
  );
};

export default Home;
