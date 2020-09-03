import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BestSeller from "../Routes/BestSeller";
import Search from "../Routes/Search";
import Category from "./Category";
import Recommend from "../Routes/Recommend";
import New from "../Routes/New";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={BestSeller} />
      <Route path="/search" exact component={Search} />
      <Route path="/recommend" exact component={Recommend} />
      <Route path="/new" component={New} />
      <Route path="/a" component={"a"} />
      <Redirect from="*" to="/" />
    </Switch>

    <Category />
  </Router>
);
