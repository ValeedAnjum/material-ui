import { Button } from "@material-ui/core";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" color="primary" disableElevation>
        Disable elevation
      </Button>
    </div>
  );
}

export default App;
