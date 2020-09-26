import React from "react";
import { Button } from "@material-ui/core";

const Jobs = (props) => {
  const { history } = props;
  return (
    <>
      <Button onClick={() => history.push("/jobs/engineer")}>engineer</Button>
      <Button onClick={() => history.push("/jobs/marketer")}>marketer</Button>
      <Button onClick={() => history.push("/jobs/designer")}>designer</Button>
    </>
  );
};

export default Jobs;
