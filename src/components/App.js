import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "components/pages/Home";
import Routes from "./routing/Routes";
import LightTheme from "themes/light";
import DarkTheme from "themes/dark";

import setAuthToken from "../utils/setAuthToken";

import { Provider } from "react-redux";
import store from "../store";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
  }

body{
  background: ${(p) => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  color: ${(p) => p.theme.bodyFontColor};
  font-family: 'Kaushan Script'
}
`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  const [theme, setTheme] = useState(LightTheme);
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
