import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { ChunkExtractor } from "@loadable/server";
import { Helmet } from "react-helmet";
import { ServerStyleSheet } from "styled-components";
import chalk from "chalk";

import createStore from "utils/configureStore";
import renderHtml from "./renderHtml";
import routes from "../routes";

export default async (req, res, next) => {
  const { store } = createStore({ url: req.url });

  const loadBranchData = () => {
    const branch = matchRoutes(routes, req.path);
    const promises = branch.map(({ route, match }) => {
      if (route.loadData)
        return Promise.all(
          route
            .loadData({
              params: match.params,
              getState: store.getState,
              req,
              res,
            })
            .map((item) => store.dispatch(item))
        );

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  try {
    await loadBranchData();
    const statsFile = path.resolve(process.cwd(), "public/loadable-stats.json");
    const extractor = new ChunkExtractor({ statsFile });
    const sheet = new ServerStyleSheet();
    const staticContext = {};
    const App = extractor.collectChunks(
      <Provider store={store}>
        <StaticRouter location={req.path} context={staticContext}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

    const initialState = store.getState();
    const htmlContent = renderToString(sheet.collectStyles(App));
    const styleTags = sheet.getStyleTags();
    const head = Helmet.renderStatic();

    const status = staticContext.status === "404" ? 404 : 200;
    res
      .status(status)
      .send(
        renderHtml({ head, extractor, htmlContent, initialState, styleTags })
      );
  } catch (error) {
    res.status(404).send(error);
    console.error(chalk.red(`==> 😭  Rendering routes error: ${error}`));
  }

  next();
};
