import React from "react";
import App from "./App";
import MapsPage from "./mapspage";
import About from './about'
import LocalPage from "./localEvents";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/maps" component={MapsPage} />
        <Route path="/about" component={About} />
        <Route path="/locslpage" component={LocalPage} />
    </Switch>
  </Router>
);
