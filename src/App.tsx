import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";

import "./sass/reset.scss";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
