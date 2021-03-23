import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";

import { ModalProvider } from "./components/modal/modalContext";
import { ContactsContextProvider } from "./contexts/contactContext";

import "./sass/reset.scss";

function App() {
  return (
    <Switch>
      <ContactsContextProvider>
        <ModalProvider>
          <Route path="/" exact={true} component={Home} />
        </ModalProvider>
      </ContactsContextProvider>
    </Switch>
  );
}

export default App;
