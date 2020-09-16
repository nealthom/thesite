import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "components/pages/Home";
import Routes from "./routing/Routes";
import LightTheme from "themes/light";
import DarkTheme from "themes/dark";

import setAuthToken from "../utils/setAuthToken";
import ScrollToTop from "../utils/ScrollToTop";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import bcircle from "../img/bcircle.jpg";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
  }

body{
  background:url(${bcircle}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: white;;
  font-family: 'VT323'
}
`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  const [theme, setTheme] = useState(LightTheme);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider
        theme={{
          ...theme,
          setTheme: () => {
            setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
          }
        }}
      >
        <GlobalStyle />
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={Routes} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
