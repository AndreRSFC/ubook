import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";

import { ModalProvider } from "./components/modal/modalContext";

import "./sass/reset.scss";

function App() {
  return (
    <ModalProvider>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </ModalProvider>
  );
}

export default App;
