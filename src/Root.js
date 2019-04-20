import React from "react";
import App from "./App/App";
// import Mapspage from "./Maps/mapspage";
import BlkMaps from '../src//Maps/BlackMaps'
import articles from "./articles/articles";
import about from './About/about'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route   exact path="./map" component={BlkMaps} />
        <Route exact path="/about" component={about} />
        <Route exact path="/articles" component={articles} />
    </Switch>
  </Router>
);
