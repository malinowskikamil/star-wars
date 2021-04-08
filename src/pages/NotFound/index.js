import React from "react";
import loadable from "@loadable/component";

const NotFound = loadable(() => import("./NotFound"));

export default (props) => <NotFound {...props} />;
