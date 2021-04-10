import React from "react";
import loadable from "@loadable/component";

const Home = loadable(() => import("./Home"));

export default (props) => <Home {...props} />;
