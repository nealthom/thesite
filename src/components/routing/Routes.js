import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Portfolio from "../pages/Portfolio";
import Notes from "../pages/Notes";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/notes">
        <Notes />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
    </Switch>
  );
};

export default Routes;
