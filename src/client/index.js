import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";

import configureStore from "../utils/configureStore";
import routes from "../routes";

const initialState = window.__INITIAL_STATE__;
const { store, history } = configureStore({ initialState });
const target_el = document.getElementById("react-view");
const App = (Routes) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(Routes)}</ConnectedRouter>
  </Provider>
);

const render = (Routes) =>
  __DEV__
    ? ReactDOM.hydrate(App(Routes), target_el)
    : ReactDOM.render(App(Routes), target_el);

// loadable-component setup
loadableReady(() => render(routes));
