import React from "react";
import Helmet from "react-helmet";
import { Seo } from "./components";

import StyledLayout from "./styles";

const Layout = ({ meta, children }) => {
  return (
    <StyledLayout>
      <Seo meta={meta} />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
