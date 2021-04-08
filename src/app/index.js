import React from 'react';
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader";
import { GlobalStyle } from "theme";

const App = ({ route }) => (
  <>
    <GlobalStyle />
    {renderRoutes(route.routes)}
  </>
);

export default hot(module)(App);
