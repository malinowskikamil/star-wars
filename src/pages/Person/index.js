import React from "react";
import loadable from "@loadable/component";

const Person = loadable(() => import("./Person"));

export default (props) => <Person {...props} />;
