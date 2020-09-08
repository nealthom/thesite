import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, path: Path, ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Route exact path={Path}>
      <Component />
    </Route>
  );
};

export default PrivateRoute;
