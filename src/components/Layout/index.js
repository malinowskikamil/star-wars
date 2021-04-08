import React from "react";
import loadable from "@loadable/component";

const Layout = loadable(() => import("./Layout"));

export default (props) => <Layout {...props} />;