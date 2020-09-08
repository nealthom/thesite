import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, path: Path, ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  console.log(`Privateland: ${isAuthenticated}`);
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
    //   }
    // />
    <Route exact path={Path}>
      <Component />
    </Route>
  );
};

export default PrivateRoute;
